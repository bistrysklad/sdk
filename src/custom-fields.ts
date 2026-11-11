import type { CompanySnapshot, EntityKind, FieldDefinition } from './types.js';
const isUUID=(value:string)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
const object=(value:unknown):value is Record<string,unknown>=>Boolean(value)&&typeof value==='object'&&!Array.isArray(value);
const scalar=(type:string,value:unknown)=>value===null||(type==='number'?typeof value==='number'&&Number.isFinite(value):type==='boolean'?typeof value==='boolean':typeof value==='string'&&value.length<=2000);
function valid(field:FieldDefinition,value:unknown):boolean {
 if(value===null)return true;
 const type=field.valueType;
 if(type==='string_list')return Array.isArray(value)&&value.length<=100&&value.every(v=>typeof v==='string'&&v.length<=2000);
 if(type==='table')return Array.isArray(value)&&value.length<=100&&value.every(row=>object(row)&&Object.keys(row).every(k=>field.columns?.some(c=>c.key===k))&&(field.columns??[]).every(c=>Object.hasOwn(row,c.key)&&scalar(c.valueType,row[c.key])));
 if(!scalar(type,value))return false;
 if(type==='select')return field.options.includes(value as string);
 if(type==='date')return typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(value))&&new Date(value).toISOString().slice(0,10)===value;
 return true;
}
function encodeValues(snapshot:CompanySnapshot,entity:EntityKind,raw:unknown,profileId:string|null):Record<string,unknown>{
 if(!object(raw))throw new Error('customValues must be an object');
 const result:Record<string,unknown>=Object.create(null);
 for(const [code,value]of Object.entries(raw)){
  const field=snapshot.fields.find(f=>f.entityKind===entity&&(f.catalogProfileId??null)===profileId&&(f.code===code||f.id===code));
  if(!field){
   const wrongScope=snapshot.fields.some(f=>f.entityKind===entity&&(f.code===code||f.id===code));
   if(isUUID(code)&&!wrongScope){result[code]=value;continue;}
   throw new Error(`Unknown ${entity} custom field: ${code}${wrongScope?' in this catalog scope':''}. Regenerate company types.`);
  }
  if(field.archived)throw new Error(`Custom field ${field.code} is archived`);
  if(!valid(field,value)){
   if(field.valueType==='select')throw new Error(`Unknown option for ${field.code}`);
   if(field.valueType==='date')throw new Error(`Invalid calendar date for ${field.code}; use YYYY-MM-DD`);
   throw new Error(`Invalid value for ${field.code}`);
  }
  result[field.id]=value;
 }
 return result;
}
export function encodeCustom(snapshot:CompanySnapshot|undefined,entity:EntityKind|undefined,body:unknown):unknown{
 if(!snapshot||!entity||!object(body))return body;
 const result={...body};
 if(body.customValues!==undefined)result.customValues=encodeValues(snapshot,entity,body.customValues,null);
 if(body.catalogCustomValues!==undefined){
  if(entity!=='product'||!object(body.catalogCustomValues))throw new Error('catalogCustomValues must be an object of product catalogs');
  result.catalogCustomValues=Object.fromEntries(Object.entries(body.catalogCustomValues).map(([id,values])=>[id,encodeValues(snapshot,entity,values,id)]));
 }
 return result;
}
function decodeValues(snapshot:CompanySnapshot,entity:EntityKind,values:unknown,profileId:string|null):unknown {
 if(!object(values))return values;
 return Object.fromEntries(Object.entries(values).map(([id,v])=>[snapshot.fields.find(f=>f.id===id&&f.entityKind===entity&&(f.catalogProfileId??null)===profileId)?.code??id,v]));
}
export function decodeCustom(snapshot:CompanySnapshot|undefined,value:unknown,entity?:EntityKind):unknown{
 if(!snapshot||!value||typeof value!=='object'||value instanceof Blob)return value;
 if(Array.isArray(value))return value.map(item=>decodeCustom(snapshot,item,entity));
 const data=value as Record<string,unknown>,kind=data.kind;
 const ownEntity=typeof kind==='string'&&['product','bundle','service','variant'].includes(kind)?'product':typeof kind==='string'&&['purchase_order','supplier_invoice','receipt','supplier_return','internal_order'].includes(kind)?kind as EntityKind:entity;
 return Object.fromEntries(Object.entries(data).map(([key,item])=>{
  if(key==='customValues'&&ownEntity)return [key,decodeValues(snapshot,ownEntity,item,null)];
  if(key==='catalogCustomValues'&&ownEntity==='product'&&object(item))return [key,Object.fromEntries(Object.entries(item).map(([id,values])=>[id,decodeValues(snapshot,'product',values,id)]))];
  return [key,decodeCustom(snapshot,item,key==='partners'?'partner':key==='products'?'product':undefined)];
 }));
}

import assert from 'node:assert/strict';
import test from 'node:test';
import {createBistryskladClient} from '../dist/index.js';
const id='00000000-0000-4000-8000-000000000001';
const schema={formatVersion:1,companyId:'00000000-0000-4000-8000-000000000002',revision:'a'.repeat(64),fields:[{id,code:'weight',entityKind:'product',name:'Weight',valueType:'number',options:[],archived:false}]};
test('scoped pages translate custom conditions/sorts, preserve IDs/whole totals and decode related records without full reads',async()=>{
 const calls=[];
 const client=createBistryskladClient({baseUrl:'https://synthetic.example',token:'synthetic',fetch:async request=>{
  const url=new URL(request.url);calls.push(url);assert.equal(request.headers.get('Idempotency-Key'),null);
  return Response.json({resource:'products',revision:schema.companyId+':1',ids:['p'],pagination:{limit:1,offset:120,total:135,nextOffset:121},data:{products:[{id:'p',kind:'product',customValues:{[id]:130}}],partners:[{id:'supplier',customValues:{}}]}});
 }},schema);
 const page=await client.workspace.products.list({limit:1,offset:120,conditions:[{id:'weight',field:'custom:weight',operator:'gte',value:'1',to:''}],sort:{field:'custom:weight',direction:'desc'}});
 assert.equal(calls.length,1);assert.equal(calls[0].pathname,'/api/v1/workspace/products');
 const selection=JSON.parse(calls[0].searchParams.get('selection'));assert.equal(selection.conditions[0].field,'custom:'+id);assert.equal(selection.sort.field,'custom:'+id);assert.equal(selection.offset,120);
 assert.deepEqual(page.ids,['p']);assert.equal(page.pagination.total,135);assert.equal(page.data.products[0].customValues.weight,130);
 await assert.rejects(async()=>client.workspace.products.list({sort:{field:'custom:typo',direction:'asc'}}),/Unknown product custom field/);assert.equal(calls.length,1);
});
test('scoped card encodes its ID and complete CSV export stays a binary file with typed company columns',async()=>{
 const requests=[];
 const client=createBistryskladClient({baseUrl:'https://synthetic.example',token:'synthetic',fetch:async request=>{const url=new URL(request.url);requests.push(url);return url.pathname.endsWith('/export')?new Response('\ufeffName;Weight\r\nProduct;130',{headers:{'Content-Type':'text/csv'}}):Response.json({resource:'products',ids:[],data:{},pagination:{total:0},revision:schema.companyId+':1'});}},schema);
 await client.workspace.products.get('p/one');assert.equal(requests[0].pathname,'/api/v1/workspace/products/p%2Fone');
 const file=await client.workspace.products.export([{key:'name',label:'Name'},{key:'custom:weight',label:'Weight'}],{q:'Product',limit:1});
 assert.ok(file instanceof Blob);assert.match(await file.text(),/Product;130/);assert.equal(JSON.parse(requests[1].searchParams.get('columns'))[1].key,'custom:'+id);
});

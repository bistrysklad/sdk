import assert from 'node:assert/strict';
import test from 'node:test';
import {createBistryskladClient} from '../dist/index.js';
const a='11111111-1111-4111-8111-111111111111',b='22222222-2222-4222-8222-222222222222',badge='33333333-3333-4333-8333-333333333333',blocked='44444444-4444-4444-8444-444444444444',tags='55555555-5555-4555-8555-555555555555',table='66666666-6666-4666-8666-666666666666';
test('native catalog custom values encode by scope and preserve structured values, false and empty text on read',async()=>{
 const fields=[{id:badge,code:'badge',catalogProfileId:a,valueType:'string'},{id:blocked,code:'blocked',catalogProfileId:a,valueType:'boolean'},{id:tags,code:'tags',valueType:'string_list'},{id:table,code:'composition',valueType:'table',columns:[{key:'name',name:'Name',valueType:'string'},{key:'quantity',name:'Quantity',valueType:'number'}]}].map(f=>({...f,entityKind:'product',name:f.code,options:[],archived:false}));
 const calls=[];const client=createBistryskladClient({baseUrl:'https://synthetic.invalid/api/v1',token:'synthetic',fetch:async req=>{calls.push(await req.json());return new Response(JSON.stringify({result:{id:'p'},revision:'synthetic:1'}),{headers:{'Content-Type':'application/json'}});}},{formatVersion:1,companyId:a,revision:'a'.repeat(64),fields});
 await client.products.update('p',{name:'Synthetic',customValues:{tags:['a','b'],composition:[{name:'Stem',quantity:3}]},catalogCustomValues:{[a]:{badge:'',blocked:false}}});
 assert.deepEqual(calls[0].customValues,{[tags]:['a','b'],[table]:[{name:'Stem',quantity:3}]});assert.deepEqual(calls[0].catalogCustomValues,{[a]:{[badge]:'',[blocked]:false}});
 await assert.rejects(client.products.update('p',{name:'P',catalogCustomValues:{[b]:{badge:'wrong profile'}}}),/catalog scope/);
 await assert.rejects(client.products.update('p',{name:'P',customValues:{badge:'wrong global'}}),/catalog scope/);
 await assert.rejects(client.products.update('p',{name:'P',customValues:{composition:[{name:'Stem',quantity:'bad'}]}}),/Invalid value/);
 const read=createBistryskladClient({baseUrl:'https://synthetic.invalid/api/v1',token:'synthetic',fetch:async()=>new Response(JSON.stringify({kind:'product',customValues:{[tags]:['a']},catalogCustomValues:{[a]:{[badge]:'',[blocked]:false}}}),{headers:{'Content-Type':'application/json'}})},{formatVersion:1,companyId:a,revision:'a'.repeat(64),fields});
 const row=await read.catalogProfiles.product(a,'p');assert.deepEqual(row.customValues,{tags:['a']});assert.deepEqual(row.catalogCustomValues,{[a]:{badge:'',blocked:false}});
});

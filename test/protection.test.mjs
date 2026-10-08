import test from 'node:test';
import assert from 'node:assert/strict';
import { createBistryskladClient,BistryskladError } from '../dist/index.js';
test('429 respects Retry-After; explicit command retries keep the same key and bytes',async()=>{
 const calls=[];const started=Date.now();
 const client=createBistryskladClient({baseUrl:'https://synthetic.example',token:'synthetic-token',responseMode:'minimal',fetch:async request=>{
   calls.push({at:Date.now(),key:request.headers.get('Idempotency-Key'),body:await request.text()});
   return new Response(JSON.stringify(calls.length===1?{error:{code:'WORKSPACE_BUSY',message:'Wait'}}:{result:{id:'synthetic'},revision:'synthetic:1'}),{status:calls.length===1?429:200,headers:{'Content-Type':'application/json','Retry-After':'0.05'}});
 }});
 await client.products.create({name:'Synthetic'},{retry:{maxAttempts:2,baseDelayMs:0}});
 assert.ok(calls[1].at-calls[0].at>=45);assert.equal(calls[0].key,calls[1].key);assert.equal(calls[0].body,calls[1].body);
});
test('long Retry-After stays within deadline without timer overflow or a retry storm',async()=>{
 let calls=0;const client=createBistryskladClient({baseUrl:'https://synthetic.example',token:'synthetic-token',timeoutMs:30,fetch:async()=>{calls++;return new Response(JSON.stringify({error:{code:'WORKSPACE_BUSY',message:'Wait'}}),{status:429,headers:{'Retry-After':'9999999999'}});}});
 await assert.rejects(client.workspace.products.list(),e=>e instanceof BistryskladError&&e.code==='TIMEOUT');assert.equal(calls,1);
});
test('invalid retry timing rejects before fetch',async()=>{
 let calls=0;const client=createBistryskladClient({baseUrl:'https://synthetic.example',token:'synthetic-token',fetch:async()=>{calls++;return new Response('{}');}});
 for(const value of [NaN,Infinity,-1])await assert.rejects(client.workspace.products.list(undefined,{retry:{baseDelayMs:value}}));
 assert.equal(calls,0);
});

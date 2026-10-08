/** Compiled examples. Call from your backend with persisted checkout values. */
import {createBistryskladClient,type BistryskladClient,type DefaultFields,type SdkBody} from '@bistrysklad/sdk';
import {subscribeToEvents} from '@bistrysklad/sdk/node';
export function makeClient(token:string):BistryskladClient<DefaultFields,'minimal'> {
 return createBistryskladClient({baseUrl:'https://bistrysklad.ru',token,responseMode:'minimal',timeoutMs:10000});
}
export async function catalog(client:BistryskladClient<DefaultFields,'minimal'>,profileId:string) {
 const page=await client.catalogProfiles.catalog(profileId,{limit:50,offset:0,sort:'default'});
 return {products:page.products,nextOffset:page.nextOffset,version:page.version};
}
export async function createCheckout(client:BistryskladClient<DefaultFields,'minimal'>,body:SdkBody<DefaultFields,'order.create'>,persistedKey:string) {
 const saved=await client.orders.create(body,{idempotencyKey:persistedKey,retry:{maxAttempts:3,baseDelayMs:200,maxDelayMs:2000}});
 return saved.result.id;
}
export async function events(token:string,after:string,signal:AbortSignal,onEvent:(cursor:string)=>Promise<void>) {
 for await(const event of subscribeToEvents({baseUrl:'https://bistrysklad.ru',token},{after,signal}))await onEvent(event.cursor);
}

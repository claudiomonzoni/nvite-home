import assert from 'node:assert/strict';
import {chromium} from 'file:///C:/Users/claud/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const b=await chromium.launch({channel:'chrome',headless:true});
for(const width of [1440,375]){
 const p=await b.newPage({viewport:{width,height:900}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto('http://127.0.0.1:4324/bodas/invitacion-bodas-playa?id=00000000-0000-0000-0000-000000000006&uid=1');
 await p.getByRole('button',{name:'Toca para comenzar'}).click();await p.locator('dialog[open]').waitFor({state:'detached'});await p.waitForTimeout(1800);
 const vip=await p.locator('#mensaje-vip-container').evaluate(e=>({display:getComputedStyle(e).display,text:e.innerText})); console.log('VIP',vip);assert.equal(vip.display,'none');
 const form=p.locator('#Confirmacion-comun');await form.scrollIntoViewIfNeeded();
 const control=await form.evaluate(e=>{const a=e.querySelector('a');const img=a.querySelector('img');const label=e.querySelector('label');return {icon:[img.clientWidth,img.clientHeight],button:a.getBoundingClientRect().height,switch:[label.getBoundingClientRect().width,label.getBoundingClientRect().height]}});
 console.log(width,control);assert.deepEqual(control.icon,[24,24]);assert.equal(control.switch[0],56);assert.equal(control.switch[1],44);assert.ok(control.button<100);
 await form.screenshot({path:'.impeccable/review/brisa/controls-'+width+'.png'});
 await form.locator('input[type=checkbox]').check();await p.waitForTimeout(300);assert.ok(await form.locator('select').count());assert.deepEqual(errors,[]);
 await p.close();
}
await b.close();


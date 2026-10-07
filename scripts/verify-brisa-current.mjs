import assert from 'node:assert/strict';
import {chromium} from 'file:///C:/Users/claud/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const b=await chromium.launch({channel:'chrome',headless:true});
for(const event of ['bodas','quince'])for(const reducedMotion of ['no-preference','reduce']){
 const p=await b.newPage({viewport:{width:375,height:900},reducedMotion});await p.goto('http://127.0.0.1:4321/'+event+'/brisa-demo');
 await p.evaluate(()=>{window.__brisaReady=0;window.addEventListener('hero:ready',()=>window.__brisaReady++);});
 await p.getByRole('button',{name:'Toca para comenzar'}).click();await p.locator('dialog[open]').waitFor({state:'detached'});await p.waitForTimeout(2000);assert.equal(await p.evaluate(()=>window.__brisaReady),1);console.log(event,reducedMotion,'ready: 1');await p.close();
}
const p=await b.newPage({viewport:{width:375,height:900}});await p.goto('http://127.0.0.1:4321/bodas/invitacion-bodas-playa?id=00000000-0000-0000-0000-000000000001&uid=1');await p.getByRole('button',{name:'Toca para comenzar'}).click();await p.locator('dialog[open]').waitFor({state:'detached'});const vip=p.locator('#mensaje-vip-container');await vip.scrollIntoViewIfNeeded();assert.ok(await vip.isVisible());assert.match(await vip.innerText(),/Estimado Ricardo/);await vip.screenshot({path:'.impeccable/review/brisa/vip-375.png'});console.log('VIP Ricardo visible');await b.close();


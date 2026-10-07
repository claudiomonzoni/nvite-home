import fs from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
const {chromium} = await import(process.argv[2] ? pathToFileURL(process.argv[2]).href : 'playwright');
const browser = await chromium.launch({channel:'chrome',headless:true});
const results = [];
await fs.mkdir('.impeccable/review/brisa',{recursive:true});
for (const event of ['bodas','quince']) {
  const page = await browser.newPage();
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  for (const width of [1440,375]) {
    await page.setViewportSize({width,height:1000});
    const response=await page.goto(`http://127.0.0.1:4324/${event}/brisa-demo`,{waitUntil:'networkidle'});
    if (response.status()!==200) {console.log(event,response.status(),await page.locator('body').innerText());process.exitCode=1;break;}
    await page.getByRole('button',{name:'Toca para comenzar'}).click();
    await page.locator('dialog[open]').waitFor({state:'detached'});
    await page.screenshot({path:`.impeccable/review/brisa/real-${event}-${width}.png`,fullPage:true});
    const metrics=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,width:innerWidth,heading:document.querySelector('h1')?.innerText,missingImages:[...document.images].filter(i=>i.getClientRects().length && (!i.complete||!i.naturalWidth)).map(i=>i.src)}));
    results.push({event,width,...metrics,errors:[...errors]});
    if(metrics.scrollWidth>width+1 || metrics.missingImages.length || errors.length) process.exitCode=1;
  }
  await page.close();
}
await fs.writeFile('.impeccable/review/brisa/routes-results.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
await browser.close();

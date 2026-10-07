import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.argv[2] ? pathToFileURL(process.argv[2]).href : 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
await fs.mkdir('.impeccable/review/brisa', { recursive: true });
const results = [];
for (const event of ['bodas','quince']) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [1440, 320, 375, 414, 768]) {
    await page.setViewportSize({ width, height: width > 768 ? 1000 : 900 });
    await page.goto(`http://127.0.0.1:4323/.brisa-preview/?evento=${event}`, { waitUntil:'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `.impeccable/review/brisa/${event}-${width}-opening.png` });
    await page.getByRole('button', {name:'Abrir invitación'}).press('Enter');
    await page.locator('dialog').waitFor({ state:'detached' });
    await page.screenshot({ path: `.impeccable/review/brisa/${event}-${width}.png`, fullPage:true });
    const metrics = await page.evaluate(() => ({
      width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
      heading: getComputedStyle(document.querySelector('h1')).fontFamily,
      headingColor: getComputedStyle(document.querySelector('h1')).color,
      primary: getComputedStyle(document.documentElement).getPropertyValue('--primario').trim(),
      date: document.querySelector('time').textContent,
      focused: document.activeElement.tagName,
      missingImages: [...document.images].filter(img=>!img.complete || img.naturalWidth === 0).length,
    }));
    results.push({event,width,...metrics,errors:[...errors]});
    if (metrics.scrollWidth > width + 1 || metrics.missingImages || errors.length || metrics.headingColor !== 'rgb(36, 77, 84)') process.exitCode = 1;
  }
  await page.goto(`http://127.0.0.1:4323/.brisa-preview/?evento=${event}&lang=en&custom`, {waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Open invitation'}).click();
  const custom = await page.evaluate(() => ({font:getComputedStyle(document.querySelector('h1')).fontFamily,color:getComputedStyle(document.querySelector('h1')).color,date:document.querySelector('time').textContent}));
  results.push({event,custom});
  if (custom.font !== 'Georgia, serif' || custom.color !== 'rgb(97, 63, 71)') process.exitCode = 1;
  await page.close();
}
await fs.writeFile('.impeccable/review/brisa/results.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
await browser.close();

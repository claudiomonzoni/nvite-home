import assert from 'node:assert/strict';
import { chromium } from 'file:///C:/Users/claud/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  for (const event of ['bodas', 'quince']) {
    const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
    await page.goto(`http://127.0.0.1:4321/${event}/brisa-demo`);
    await page.getByRole('button', { name: 'Toca para comenzar' }).click();
    await page.waitForTimeout(1800);
    const result = await page.evaluate(() => {
      const root = document.documentElement;
      const title = document.querySelector('h1');
      const initialHeading = getComputedStyle(title).color;
      root.style.setProperty('--texto', '#734151');
      const textOnlyHeading = getComputedStyle(title).color;
      root.style.setProperty('--primario', '#23576a');
      root.style.setProperty('--acento', '#a16b37');
      const primaryHeading = getComputedStyle(title).color;
      const wave = document.querySelector('[class*="tide"]');
      const backgrounds = ['#f5eddf', '#354462'].map(color => {
        root.style.setProperty('--fondo', color);
        return [...document.querySelectorAll('#regalo, #lluvia, #transferencias')].map(card => ({
          id: card.id,
          background: getComputedStyle(card).backgroundImage,
          shadow: getComputedStyle(card).boxShadow,
          floral: getComputedStyle(card, '::before').backgroundImage,
          heading: getComputedStyle(card.querySelector('h2, h3')).color,
          text: getComputedStyle(card.querySelector('p, li') || card).color,
        }));
      });
      return { initialHeading, textOnlyHeading, primaryHeading, wave: getComputedStyle(wave).color, backgrounds };
    });
    assert.equal(result.initialHeading, result.textOnlyHeading);
    assert.equal(result.primaryHeading, 'rgb(35, 87, 106)');
    assert.equal(result.wave, 'rgb(161, 107, 55)');
    for (const cards of result.backgrounds) {
      assert.equal(cards.length, 3);
      for (const card of cards) {
        assert.match(card.background, /linear-gradient/);
        assert.notEqual(card.shadow, 'none');
        assert.match(card.floral, /bg-floral-regalos/);
        assert.equal(card.heading, 'rgb(35, 87, 106)');
        assert.equal(card.text, 'rgb(115, 65, 81)');
      }
    }
    assert.notDeepEqual(result.backgrounds[0], result.backgrounds[1]);
    await page.evaluate(() => {
      for (const [name, color] of Object.entries({ fondo: '#f5eddf', texto: '#29474b', primario: '#244d54', acento: '#84613f' })) document.documentElement.style.setProperty(`--${name}`, color);
    });
    await page.locator('#regalo').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `.impeccable/review/brisa/gift-cards-${event}.png` });
    console.log(event, JSON.stringify(result));
    await page.close();
  }
} finally { await browser.close(); }

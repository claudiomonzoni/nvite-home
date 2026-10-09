import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Exercise the actual selector script with a controllable clock and iframe.
const source = fs.readFileSync('src/components/WeddingSelector.astro', 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1];
const code = ts.transpileModule(script, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
let now = 0, nextId = 0;
const timers = new Map();
const schedule = (fn, delay) => { const id = ++nextId; timers.set(id, { fn, at: now + delay }); return id; };
function advance(ms) {
  const end = now + ms;
  while (true) {
    const next = [...timers].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
    if (!next) break;
    timers.delete(next[0]); now = next[1].at; next[1].fn();
  }
  now = end;
}
function element(dataset = {}) {
  return { dataset, style: { setProperty() {} }, attrs: {}, listeners: {}, hidden: false,
    setAttribute(key, value) { this.attrs[key] = value; },
    addEventListener(key, fn) { this.listeners[key] = fn; },
    removeEventListener(key) { delete this.listeners[key]; } };
}
const origin = 'http://localhost:4321';
const buttons = ['base', 'brisa', 'elegante'].map(design => element({ theme: design,
  label: design, url: `/bodas/demo?lang=es&tema=${design}` }));
const frame = element();
let frameSrc = origin + buttons[0].dataset.url;
const navigations = [];
Object.defineProperty(frame, 'src', { get: () => frameSrc,
  set(value) { frameSrc = new URL(value, origin).href; navigations.push(frameSrc); } });
frame.contentDocument = { readyState: 'complete' };
frame.contentWindow = { location: new URL(frameSrc), stop() {} };
const status = element(), retry = element(), notice = element(), purchase = element();
const full = { href: frameSrc };
const packageLink = { href: `${origin}/nvitaciones/clasica?tema=base` };
const copy = { loading: 'loading', ready: 'ready', error: 'error' };
const root = element({ package: 'Lux', design: 'base', requested: 'base', initial: 'base', en: 'false', copy: JSON.stringify(copy) });
root.getBoundingClientRect = () => ({ left: 20 });
const elements = { '[data-demo]': frame, '[data-preview-status]': status, '[data-retry]': retry,
  '[data-full-preview]': full, '[data-notice]': notice };
root.querySelector = selector => elements[selector];
root.querySelectorAll = selector => selector === '[data-theme]' ? buttons : [packageLink];
const lifecycle = {};
const location = new URL(`${origin}/nvitaciones/lux?tema=base`);
vm.runInNewContext(code, { URL, location, JSON,
  setTimeout: schedule, clearTimeout: id => timers.delete(id),
  ResizeObserver: class { observe() {} disconnect() {} },
  document: { documentElement: { clientWidth: 375 }, getElementById: () => root,
    querySelectorAll: () => [purchase], addEventListener: (name, fn) => { lifecycle[name] = fn; } },
  window: { addEventListener() {}, removeEventListener() {} },
  history: { pushState(_state, _title, url) { location.href = url.href; } },
});
assert.equal(status.textContent, 'ready');
const click = design => buttons.find(b => b.dataset.theme === design).listeners.click();
for (const design of ['brisa', 'base', 'brisa', 'elegante']) click(design);
assert.equal(purchase.dataset.design, 'elegante', 'Purchase selection responds immediately');
assert.equal(new URL(packageLink.href).searchParams.get('tema'), 'elegante');
advance(179);
assert.equal(navigations.length, 0, 'Rapid taps must not start intermediate loads');
advance(1);
assert.equal(navigations.length, 1);
assert.equal(new URL(frame.src).searchParams.get('tema'), 'elegante');
frame.listeners.load();
assert.equal(status.textContent, 'loading', 'Old document load cannot mark the new theme ready');
frame.contentWindow.location = new URL(frame.src);
frame.listeners.load();
assert.equal(status.textContent, 'ready');
click('brisa'); click('elegante'); advance(180);
assert.equal(navigations.length, 1, 'Returning to the loaded theme cancels the pending navigation');
retry.listeners.click(); advance(180);
assert.equal(navigations.length, 2, 'Retry still reloads the selected theme');
click('brisa'); lifecycle['astro:before-swap'](); advance(30000);
assert.equal(navigations.length, 2, 'Leaving the page cancels pending work');
assert.equal(timers.size, 0);
console.log('Preview: rapid selection, stale load, cancellation, retry and cleanup passed');

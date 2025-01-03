import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CZGRAzlf.mjs';
import { manifest } from './manifest_DYna63q-.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/addinvitados.json.astro.mjs');
const _page2 = () => import('./pages/api/getinvitado.json.astro.mjs');
const _page3 = () => import('./pages/api/getinvitados.json.astro.mjs');
const _page4 = () => import('./pages/api/ingresar.json.astro.mjs');
const _page5 = () => import('./pages/api/registro.json.astro.mjs');
const _page6 = () => import('./pages/api/salir.json.astro.mjs');
const _page7 = () => import('./pages/api/test.astro.mjs');
const _page8 = () => import('./pages/api/_id_.json.astro.mjs');
const _page9 = () => import('./pages/bodas/_slug_.astro.mjs');
const _page10 = () => import('./pages/panel/ingresar.astro.mjs');
const _page11 = () => import('./pages/panel/lib/formsubmit.astro.mjs');
const _page12 = () => import('./pages/panel/registro.astro.mjs');
const _page13 = () => import('./pages/panel.astro.mjs');
const _page14 = () => import('./pages/quince/panel/plus.astro.mjs');
const _page15 = () => import('./pages/quince/_slug_.astro.mjs');
const _page16 = () => import('./pages/robots.txt.astro.mjs');
const _page17 = () => import('./pages/terminos-condiciones.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/addInvitados.json.ts", _page1],
    ["src/pages/api/getInvitado.json.ts", _page2],
    ["src/pages/api/getInvitados.json.ts", _page3],
    ["src/pages/api/ingresar.json.ts", _page4],
    ["src/pages/api/registro.json.ts", _page5],
    ["src/pages/api/salir.json.ts", _page6],
    ["src/pages/api/test.ts", _page7],
    ["src/pages/api/[id].json.ts", _page8],
    ["src/pages/bodas/[slug].astro", _page9],
    ["src/pages/panel/ingresar.astro", _page10],
    ["src/pages/panel/lib/formSubmit.ts", _page11],
    ["src/pages/panel/registro.astro", _page12],
    ["src/pages/panel/index.astro", _page13],
    ["src/pages/quince/panel/plus.astro", _page14],
    ["src/pages/quince/[slug].astro", _page15],
    ["src/pages/robots.txt.ts", _page16],
    ["src/pages/terminos-condiciones.astro", _page17],
    ["src/pages/index.astro", _page18]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "00c11d56-adee-4e7d-b80a-cba6e08a82a9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

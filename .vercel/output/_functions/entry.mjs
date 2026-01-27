import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CX24J45R.mjs';
import { manifest } from './manifest_CHaN-Z_0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/addinvitados.json.astro.mjs');
const _page3 = () => import('./pages/api/getinvitado.json.astro.mjs');
const _page4 = () => import('./pages/api/getinvitados.json.astro.mjs');
const _page5 = () => import('./pages/api/ingresar.json.astro.mjs');
const _page6 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page7 = () => import('./pages/api/registro.json.astro.mjs');
const _page8 = () => import('./pages/api/salir.json.astro.mjs');
const _page9 = () => import('./pages/api/_id_.json.astro.mjs');
const _page10 = () => import('./pages/bodas/_slug_.astro.mjs');
const _page11 = () => import('./pages/bodas.astro.mjs');
const _page12 = () => import('./pages/invitaciones-pdf.astro.mjs');
const _page13 = () => import('./pages/invitaciones-quince.astro.mjs');
const _page14 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page15 = () => import('./pages/nvitaciones/cart.astro.mjs');
const _page16 = () => import('./pages/nvitaciones/checkout.astro.mjs');
const _page17 = () => import('./pages/nvitaciones/success.astro.mjs');
const _page18 = () => import('./pages/nvitaciones/_slug_.astro.mjs');
const _page19 = () => import('./pages/panel/ingresar.astro.mjs');
const _page20 = () => import('./pages/panel/lib/formsubmit.astro.mjs');
const _page21 = () => import('./pages/panel/registro.astro.mjs');
const _page22 = () => import('./pages/panel.astro.mjs');
const _page23 = () => import('./pages/quince/_slug_.astro.mjs');
const _page24 = () => import('./pages/robots.txt.astro.mjs');
const _page25 = () => import('./pages/terminos-condiciones.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/addInvitados.json.ts", _page2],
    ["src/pages/api/getInvitado.json.ts", _page3],
    ["src/pages/api/getInvitados.json.ts", _page4],
    ["src/pages/api/ingresar.json.ts", _page5],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page6],
    ["src/pages/api/registro.json.ts", _page7],
    ["src/pages/api/salir.json.ts", _page8],
    ["src/pages/api/[id].json.ts", _page9],
    ["src/pages/bodas/[slug].astro", _page10],
    ["src/pages/bodas.astro", _page11],
    ["src/pages/invitaciones-pdf.astro", _page12],
    ["src/pages/invitaciones-quince.astro", _page13],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page14],
    ["src/pages/nvitaciones/cart.astro", _page15],
    ["src/pages/nvitaciones/checkout.astro", _page16],
    ["src/pages/nvitaciones/success.astro", _page17],
    ["src/pages/nvitaciones/[slug].astro", _page18],
    ["src/pages/panel/ingresar.astro", _page19],
    ["src/pages/panel/lib/formSubmit.ts", _page20],
    ["src/pages/panel/registro.astro", _page21],
    ["src/pages/panel/index.astro", _page22],
    ["src/pages/quince/[slug].astro", _page23],
    ["src/pages/robots.txt.ts", _page24],
    ["src/pages/terminos-condiciones.astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "b6bba4de-003d-4d67-9644-5e684ef2e653",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

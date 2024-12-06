import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DTIqAvw5.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Listado opciones Bodas AG</h1>`;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/bodas/index.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/bodas/index.astro";
const $$url = "/bodas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

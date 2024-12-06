import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DTIqAvw5.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Invitaciones de quince años</h1>`;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/quince/index.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/quince/index.astro";
const $$url = "/quince";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

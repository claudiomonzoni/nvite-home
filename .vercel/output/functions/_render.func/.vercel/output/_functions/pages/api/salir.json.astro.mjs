import { N as NvitaAuth } from '../../chunks/config_B1_1FYaz.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async () => {
  try {
    await NvitaAuth.signOut();
    return new Response(JSON.stringify({ message: "Sesión cerrada" }), {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

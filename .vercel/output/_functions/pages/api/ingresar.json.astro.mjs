import { setPersistence, browserSessionPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { N as NvitaAuth } from '../../chunks/config_B1_1FYaz.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { email, password } = await request.json();
  try {
    await setPersistence(NvitaAuth, browserSessionPersistence);
    await signInWithEmailAndPassword(NvitaAuth, email, password);
    return new Response(JSON.stringify({ message: "Ingreso exitoso" }), {
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

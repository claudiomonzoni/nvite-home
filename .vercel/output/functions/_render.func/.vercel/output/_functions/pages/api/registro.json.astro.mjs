import { d as db, U as Usuario } from '../../chunks/_astro_db_BHQ6WkRG.mjs';
import sanitize from 'sanitize-html';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { N as NvitaAuth } from '../../chunks/config_B1_1FYaz.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { email, password, ruta, tipoInvitacion } = await request.json();
  try {
    await createUserWithEmailAndPassword(NvitaAuth, email, password);
    const req = await db.insert(Usuario).values({
      email: sanitize(email),
      ruta: sanitize(ruta),
      tipo: sanitize(tipoInvitacion)
    });
    return new Response(
      JSON.stringify({
        message: "Cuenta registrada en firebase",
        message2: req,
        success: true
      }),
      {
        status: 201
      }
    );
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

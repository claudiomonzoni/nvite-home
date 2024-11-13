import sanitize from 'sanitize-html';
import { d as db, I as Invitados } from '../../chunks/_astro_db_BHQ6WkRG.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const body = await request.json();
  try {
    const {
      usuarioId,
      nombre,
      pases,
      mesa,
      numeroWhats,
      confirmado,
      vip,
      InvitacionEnviada,
      noAsiste,
      tipoInvitacion
    } = body;
    if (typeof nombre !== "string" || typeof pases !== "string") {
      throw new Error("llene los campos obligatorios");
    }
    const req = await db.insert(Invitados).values({
      usuarioId,
      nombre: sanitize(nombre),
      pases: sanitize(pases),
      mesa: sanitize(mesa),
      numeroWhats: sanitize(numeroWhats),
      confirmado,
      vip,
      InvitacionEnviada,
      noAsiste,
      tipoInvitacion
    });
    return new Response(
      JSON.stringify({
        message: req,
        success: true
      }),
      {
        status: 201
      }
    );
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false
        }),
        {
          status: 404
        }
      );
    }
    return new Response(
      JSON.stringify({
        message: "There was an unknown error",
        success: false
      }),
      {
        status: 404
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

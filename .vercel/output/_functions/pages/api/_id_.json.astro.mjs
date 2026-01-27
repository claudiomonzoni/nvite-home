import { d as db, I as Invitados } from '../../chunks/_astro_db_evviQCJ5.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const DELETE = async ({ params }) => {
  const uuid = params.id;
  try {
    if (!uuid) {
      throw new Error("no existe o fue enviado el uuid del usuario");
    }
    await db.delete(Invitados).where(eq(Invitados.uuid, uuid));
    return new Response(null, { status: 204 });
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
  }
  return new Response(
    JSON.stringify({
      message: "Error al borrar invitado",
      success: false
    }),
    {
      status: 404
    }
  );
};
const PATCH = async ({ params, request }) => {
  const id = params.id;
  const {
    nombre,
    pases,
    mesa,
    numeroWhats,
    confirmado,
    vip,
    InvitacionEnviada,
    noAsiste,
    tipoInvitacion,
    mensajePersonalizado
  } = await request.json();
  try {
    if (!id) {
      throw new Error("No existe o fue enviado el id del usuario.");
    }
    const updateFields = {
      ...nombre && { nombre },
      ...pases && { pases: Math.trunc(Number(pases)).toString() },
      ...mesa !== void 0 && { mesa },
      ...numeroWhats !== void 0 && { numeroWhats },
      ...confirmado !== void 0 && { confirmado },
      ...vip !== void 0 && { vip },
      ...InvitacionEnviada !== void 0 && { InvitacionEnviada },
      ...noAsiste !== void 0 && { noAsiste },
      ...tipoInvitacion !== void 0 && { tipoInvitacion },
      ...vip && mensajePersonalizado !== void 0 && { mensajePersonalizado }
    };
    await db.update(Invitados).set(updateFields).where(eq(Invitados.id, Number(id)));
    return new Response(
      JSON.stringify({
        message: "Invitado actualizado correctamente.",
        success: true
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
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
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "Ocurrió un error desconocido.",
      success: false
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

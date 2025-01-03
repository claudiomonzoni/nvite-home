import { d as db, U as Usuario, I as Invitados } from '../../chunks/_astro_db_BHQ6WkRG.mjs';
import '../../chunks/config_B1_1FYaz.mjs';
import { eq, desc } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const usuarioEmail = url.searchParams.get("email");
    if (!usuarioEmail) {
      return new Response(JSON.stringify({ message: "usuario indefinido" }), {
        status: 401
      });
    }
    const user = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail));
    if (!user.length || !user[0].id) {
      return new Response(
        JSON.stringify({ message: "Usuario no encontrado o sin ID válido" }),
        { status: 404 }
      );
    }
    const data = await db.select().from(Invitados).orderBy(desc(Invitados.id)).where(eq(Invitados.usuarioId, user[0].id));
    return new Response(JSON.stringify(data), {
      status: 200
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : "Ocurrio un error al obtener los invitados"
      })
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

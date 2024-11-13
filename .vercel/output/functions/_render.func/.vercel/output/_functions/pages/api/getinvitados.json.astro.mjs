import { d as db, U as Usuario, I as Invitados } from '../../chunks/_astro_db_BHQ6WkRG.mjs';
import { N as NvitaAuth } from '../../chunks/config_B1_1FYaz.mjs';
import { eq, desc } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const usuarioEmail = NvitaAuth.currentUser?.email;
const GET = async () => {
  try {
    const user = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail));
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

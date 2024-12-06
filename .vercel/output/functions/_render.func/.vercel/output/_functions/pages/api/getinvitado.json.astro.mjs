import { d as db, I as Invitados } from '../../chunks/_astro_db_BHQ6WkRG.mjs';
import { N as NvitaAuth } from '../../chunks/config_B1_1FYaz.mjs';
import { and, eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

NvitaAuth.currentUser?.email;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const uid = url.searchParams.get("uid");
  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const response = await db.select().from(Invitados).where(
      and(eq(Invitados.id, Number(id)), eq(Invitados.usuarioId, Number(uid)))
    );
    if (response.length === 0) {
      return new Response(JSON.stringify({ error: "No invitado found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

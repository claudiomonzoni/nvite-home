import type { APIRoute } from "astro";
import sanitize from "sanitize-html";
import { Invitados, db } from "astro:db";
import { v4 as uuidv4 } from 'uuid';

export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(
      JSON.stringify({ error: "No autorizado" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const body = await request.json();
  try {
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
      mensajePersonalizado,
    } = body;

    // comprobamos que los campos no esten vacios
    if (
      typeof nombre !== "string" ||
      typeof pases !== "string"
    ) {
      throw new Error("llene los campos obligatorios");
    }
    // hacemos el reg en la bd
    const req = await db.insert(Invitados).values({
      usuarioId: user.id,
      //uuid: uuidv4().split('-')[0] + uuidv4().split('-')[1]  // "550e8400e29b" (12 caracteres, menos riesgo de coalicion)
      uuid: uuidv4().split('-')[0], 
      nombre: sanitize(nombre),
      pases: sanitize(pases),
      pasesOriginales: sanitize(pases),
      mesa: sanitize(mesa),
      numeroWhats: sanitize(numeroWhats),
      confirmado,
      vip,
      InvitacionEnviada,
      noAsiste,
      tipoInvitacion,
      mensajePersonalizado: vip ? sanitize(mensajePersonalizado) : null,
    });

    return new Response(
      JSON.stringify({
        message: req,
        success: true,
      }),
      {
        status: 201,
      }
    );
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false,
        }),
        {
          status: 404,
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: "There was an unknown error",
        success: false,
      }),
      {
        status: 404,
      }
    );

    
  }
};

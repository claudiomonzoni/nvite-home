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

    // comprobamos que los campos no esten vacios o invalidos
    if (
      typeof nombre !== "string" ||
      typeof pases !== "string"
    ) {
      throw new Error("Llene los campos obligatorios.");
    }

    const cleanNombre = sanitize(nombre.trim());
    if (!cleanNombre) {
      throw new Error("El nombre no puede estar vacío.");
    }
    if (cleanNombre.length > 80) {
      throw new Error("El nombre del invitado no puede exceder los 80 caracteres.");
    }

    const parsedPases = parseInt(pases, 10);
    if (isNaN(parsedPases) || parsedPases < 1 || parsedPases > 50) {
      throw new Error("El número de pases debe ser un número entre 1 y 50.");
    }
    const cleanPasesStr = parsedPases.toString();

    // Sanitizar y limpiar número de WhatsApp (guardar como número entero)
    let cleanWhats = null;
    if (numeroWhats) {
      const digitsOnly = numeroWhats.toString().replace(/\D/g, "");
      if (digitsOnly) {
        if (digitsOnly.length < 8 || digitsOnly.length > 15) {
          throw new Error("El número de WhatsApp debe tener entre 8 y 15 dígitos.");
        }
        cleanWhats = parseInt(digitsOnly, 10);
      }
    }

    if (mesa && sanitize(mesa.toString()).length > 50) {
      throw new Error("El nombre de la mesa no puede exceder los 50 caracteres.");
    }
    const cleanMesa = mesa ? sanitize(mesa.toString().trim()) : null;
    const cleanTipo = tipoInvitacion ? sanitize(tipoInvitacion.toString().trim()) : "Familiar";

    if (vip && mensajePersonalizado && sanitize(mensajePersonalizado.toString()).length > 500) {
      throw new Error("El mensaje personalizado no puede exceder los 500 caracteres.");
    }
    const cleanMsg = vip && mensajePersonalizado ? sanitize(mensajePersonalizado.toString().trim()) : null;

    // hacemos el reg en la bd
    const req = await db.insert(Invitados).values({
      usuarioId: user.id,
      uuid: uuidv4().split('-')[0], 
      nombre: cleanNombre,
      pases: cleanPasesStr,
      pasesOriginales: cleanPasesStr,
      mesa: cleanMesa,
      numeroWhats: cleanWhats,
      confirmado: !!confirmado,
      vip: !!vip,
      InvitacionEnviada: !!InvitacionEnviada,
      noAsiste: !!noAsiste,
      tipoInvitacion: cleanTipo,
      mensajePersonalizado: cleanMsg,
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

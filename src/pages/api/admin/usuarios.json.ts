import type { APIRoute } from "astro";
import { db, Usuario, Sesion, Invitados, eq, sql } from "astro:db";
import sanitize from "sanitize-html";

// GET: List all users with guest count and new event/addon details
export const GET: APIRoute = async () => {
  try {
    const users = await db
      .select({
        id: Usuario.id,
        email: Usuario.email,
        tipo: Usuario.tipo,
        ruta: Usuario.ruta,
        rol: Usuario.rol,
        firebaseUid: Usuario.firebaseUid,
        nombreEvento: Usuario.nombreEvento,
        fechaEvento: Usuario.fechaEvento,
        addonMesas: Usuario.addonMesas,
        addonRecordatorios: Usuario.addonRecordatorios,
        guestCount: sql<number>`COUNT(${Invitados.id})`.mapWith(Number),
      })
      .from(Usuario)
      .leftJoin(Invitados, eq(Invitados.usuarioId, Usuario.id))
      .groupBy(Usuario.id)
      .orderBy(Usuario.id);

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error fetching users:", e);
    return new Response(
      JSON.stringify({ error: "Error al obtener la lista de usuarios." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

// POST: Create a new user with event details and addons configuration
export const POST: APIRoute = async ({ request }) => {
  try {
    const { 
      email, 
      password, 
      ruta, 
      tipoInvitacion, 
      rol, 
      nombreEvento, 
      fechaEvento, 
      addonMesas, 
      addonRecordatorios 
    } = await request.json();

    if (!email || !password || !ruta || !tipoInvitacion) {
      return new Response(
        JSON.stringify({ error: "Todos los campos obligatorios deben ser completados." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const cleanEmail = sanitize(email.trim());
    const cleanRuta = sanitize(ruta.trim().toLowerCase());
    const cleanTipo = sanitize(tipoInvitacion.trim());
    const cleanRol = rol === "admin" ? "admin" : "cliente";

    // 1. Verificar si el email o ruta ya existen en Astro DB
    const existingEmail = await db
      .select()
      .from(Usuario)
      .where(eq(Usuario.email, cleanEmail));

    if (existingEmail.length > 0) {
      return new Response(
        JSON.stringify({ error: "El correo electrónico ya está registrado." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const existingRuta = await db
      .select()
      .from(Usuario)
      .where(eq(Usuario.ruta, cleanRuta));

    if (existingRuta.length > 0) {
      return new Response(
        JSON.stringify({ error: "La ruta de la invitación ya está en uso." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Crear el usuario en Firebase Auth usando la REST API
    const apiKey = import.meta.env.SECRET_APIKEY;
    const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

    const authResponse = await fetch(signUpUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: cleanEmail,
        password,
        returnSecureToken: true,
      }),
    });

    const authData = await authResponse.json();

    if (!authResponse.ok) {
      const errMsg = authData.error?.message || "Error al crear la cuenta en Firebase.";
      return new Response(
        JSON.stringify({ error: errMsg }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const firebaseUid = authData.localId;

    // 3. Crear el usuario en la base de datos Astro DB
    await db.insert(Usuario).values({
      email: cleanEmail,
      ruta: cleanRuta,
      tipo: cleanTipo,
      rol: cleanRol,
      firebaseUid: firebaseUid,
      nombreEvento: nombreEvento ? sanitize(nombreEvento.trim()) : null,
      fechaEvento: fechaEvento ? new Date(fechaEvento) : null,
      addonMesas: !!addonMesas,
      addonRecordatorios: !!addonRecordatorios,
    });

    return new Response(
      JSON.stringify({ message: "Usuario creado exitosamente.", success: true }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error creating user:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Error inesperado." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

// PATCH: Edit an existing user (including event details and addons configuration)
export const PATCH: APIRoute = async ({ request }) => {
  try {
    const { 
      id, 
      email, 
      ruta, 
      tipoInvitacion, 
      rol, 
      nombreEvento, 
      fechaEvento, 
      addonMesas, 
      addonRecordatorios 
    } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "ID del usuario no proporcionado." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Verificar si el usuario existe
    const existing = await db
      .select()
      .from(Usuario)
      .where(eq(Usuario.id, Number(id)));

    if (existing.length === 0) {
      return new Response(
        JSON.stringify({ error: "Usuario no encontrado." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const updateFields: any = {};
    if (email) updateFields.email = sanitize(email.trim());
    if (ruta) updateFields.ruta = sanitize(ruta.trim().toLowerCase());
    if (tipoInvitacion) updateFields.tipo = sanitize(tipoInvitacion.trim());
    if (rol) updateFields.rol = rol === "admin" ? "admin" : "cliente";
    
    // Permitir nulo si vienen vacíos
    if (nombreEvento !== undefined) {
      updateFields.nombreEvento = nombreEvento ? sanitize(nombreEvento.trim()) : null;
    }
    if (fechaEvento !== undefined) {
      updateFields.fechaEvento = fechaEvento ? new Date(fechaEvento) : null;
    }
    if (addonMesas !== undefined) {
      updateFields.addonMesas = !!addonMesas;
    }
    if (addonRecordatorios !== undefined) {
      updateFields.addonRecordatorios = !!addonRecordatorios;
    }

    await db
      .update(Usuario)
      .set(updateFields)
      .where(eq(Usuario.id, Number(id)));

    return new Response(
      JSON.stringify({ message: "Usuario actualizado exitosamente.", success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error updating user:", e);
    return new Response(
      JSON.stringify({ error: "Error al actualizar el usuario." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

// DELETE: Delete user, sessions and guests (cascade delete)
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "ID del usuario no proporcionado." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const userId = Number(id);

    // Verificar si el usuario existe
    const existing = await db
      .select()
      .from(Usuario)
      .where(eq(Usuario.id, userId));

    if (existing.length === 0) {
      return new Response(
        JSON.stringify({ error: "Usuario no encontrado." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Borrar sesiones asociadas
    await db.delete(Sesion).where(eq(Sesion.usuarioId, userId));

    // 2. Borrar invitados asociados
    await db.delete(Invitados).where(eq(Invitados.usuarioId, userId));

    // 3. Borrar el usuario
    await db.delete(Usuario).where(eq(Usuario.id, userId));

    return new Response(
      JSON.stringify({ message: "Usuario y todos sus datos borrados exitosamente.", success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error deleting user:", e);
    return new Response(
      JSON.stringify({ error: "Error al borrar el usuario." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

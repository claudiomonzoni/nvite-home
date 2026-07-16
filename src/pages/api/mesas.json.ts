import type { APIRoute } from "astro";
import { db, Mesas, Invitados, eq, and } from "astro:db";
import sanitize from "sanitize-html";

// GET: Get all tables with their assigned guests
export const GET: APIRoute = async ({ locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const tables = await db
      .select()
      .from(Mesas)
      .where(eq(Mesas.usuarioId, user.id));

    const guests = await db
      .select()
      .from(Invitados)
      .where(eq(Invitados.usuarioId, user.id));

    const response = tables.map((table) => {
      const tableGuests = guests.filter((g) => g.mesaId === table.id);
      return {
        id: table.id,
        nombre: table.nombre,
        capacidad: table.capacidad,
        invitados: tableGuests,
      };
    });

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error fetching tables:", e);
    return new Response(JSON.stringify({ error: "Error al obtener las mesas." }), { status: 500 });
  }
};

// POST: Create a new table
export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const { nombre, capacidad } = await request.json();
    if (!nombre) {
      return new Response(JSON.stringify({ error: "El nombre de la mesa es requerido." }), { status: 400 });
    }

    const cleanNombre = sanitize(nombre.trim());
    const cleanCapacidad = Math.max(1, parseInt(capacidad, 10) || 10);

    await db.insert(Mesas).values({
      usuarioId: user.id,
      nombre: cleanNombre,
      capacidad: cleanCapacidad,
    });

    return new Response(JSON.stringify({ message: "Mesa creada exitosamente.", success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error creating table:", e);
    return new Response(JSON.stringify({ error: "Error al crear la mesa." }), { status: 500 });
  }
};

// PATCH: Edit table name/capacity
export const PATCH: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const { id, nombre, capacidad } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: "ID de mesa es requerido." }), { status: 400 });
    }

    // Verificar propiedad
    const existing = await db
      .select()
      .from(Mesas)
      .where(and(eq(Mesas.id, Number(id)), eq(Mesas.usuarioId, user.id)));

    if (existing.length === 0) {
      return new Response(JSON.stringify({ error: "Mesa no encontrada." }), { status: 404 });
    }

    const updateFields: any = {};
    if (nombre !== undefined) updateFields.nombre = sanitize(nombre.trim());
    if (capacidad !== undefined) updateFields.capacidad = Math.max(1, parseInt(capacidad, 10) || 10);

    await db
      .update(Mesas)
      .set(updateFields)
      .where(eq(Mesas.id, Number(id)));

    // Sincronizar columna mesa (texto) de los invitados si el nombre cambió
    if (nombre !== undefined) {
      await db
        .update(Invitados)
        .set({ mesa: sanitize(nombre.trim()) })
        .where(eq(Invitados.mesaId, Number(id)));
    }

    return new Response(JSON.stringify({ message: "Mesa actualizada exitosamente.", success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error updating table:", e);
    return new Response(JSON.stringify({ error: "Error al actualizar la mesa." }), { status: 500 });
  }
};

// DELETE: Delete a table and release guests
export const DELETE: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: "ID de mesa es requerido." }), { status: 400 });
    }

    // Verificar propiedad
    const existing = await db
      .select()
      .from(Mesas)
      .where(and(eq(Mesas.id, Number(id)), eq(Mesas.usuarioId, user.id)));

    if (existing.length === 0) {
      return new Response(JSON.stringify({ error: "Mesa no encontrada o no autorizada." }), { status: 404 });
    }

    // 1. Desasignar invitados de esta mesa en la base de datos
    await db
      .update(Invitados)
      .set({ mesaId: null, mesa: null })
      .where(eq(Invitados.mesaId, Number(id)));

    // 2. Eliminar la mesa
    await db
      .delete(Mesas)
      .where(eq(Mesas.id, Number(id)));

    return new Response(JSON.stringify({ message: "Mesa eliminada con éxito.", success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error deleting table:", e);
    return new Response(JSON.stringify({ error: "Error al eliminar la mesa." }), { status: 500 });
  }
};

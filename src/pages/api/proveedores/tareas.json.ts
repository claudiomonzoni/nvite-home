import type { APIRoute } from "astro";
import { db, Proveedores, TareasProveedor, eq, and } from "astro:db";
import sanitize from "sanitize-html";

// POST: Add a checklist task
export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const { proveedorId, titulo, fechaLimite } = await request.json();

    if (!proveedorId || !titulo) {
      return new Response(JSON.stringify({ error: "Proveedor y título son requeridos" }), { status: 400 });
    }

    // Verify ownership
    const [proveedor] = await db
      .select()
      .from(Proveedores)
      .where(and(eq(Proveedores.id, Number(proveedorId)), eq(Proveedores.usuarioId, user.id)));

    if (!proveedor) {
      return new Response(JSON.stringify({ error: "Proveedor no encontrado" }), { status: 404 });
    }

    const [nuevaTarea] = await db
      .insert(TareasProveedor)
      .values({
        proveedorId: Number(proveedorId),
        titulo: sanitize(titulo.trim()),
        fechaLimite: fechaLimite ? new Date(fechaLimite) : null,
        completada: false,
      })
      .returning();

    return new Response(JSON.stringify(nuevaTarea), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al agregar tarea:", error);
    return new Response(JSON.stringify({ error: "Error al agregar la tarea" }), { status: 500 });
  }
};

// PATCH: Toggle task completed status or update date/title
export const PATCH: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const { id, completada, titulo, fechaLimite } = await request.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "ID de tarea requerido" }), { status: 400 });
    }

    const [tarea] = await db.select().from(TareasProveedor).where(eq(TareasProveedor.id, Number(id)));
    if (!tarea) {
      return new Response(JSON.stringify({ error: "Tarea no encontrada" }), { status: 404 });
    }

    const [proveedor] = await db
      .select()
      .from(Proveedores)
      .where(and(eq(Proveedores.id, tarea.proveedorId), eq(Proveedores.usuarioId, user.id)));

    if (!proveedor) {
      return new Response(JSON.stringify({ error: "No autorizado" }), { status: 403 });
    }

    const [actualizada] = await db
      .update(TareasProveedor)
      .set({
        completada: completada !== undefined ? Boolean(completada) : tarea.completada,
        titulo: titulo ? sanitize(titulo.trim()) : tarea.titulo,
        fechaLimite: fechaLimite !== undefined ? (fechaLimite ? new Date(fechaLimite) : null) : tarea.fechaLimite,
      })
      .where(eq(TareasProveedor.id, Number(id)))
      .returning();

    return new Response(JSON.stringify(actualizada), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    return new Response(JSON.stringify({ error: "Error al actualizar la tarea" }), { status: 500 });
  }
};

// DELETE: Delete a task
export const DELETE: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const url = new URL(request.url);
    const idParam = url.searchParams.get("id");
    if (!idParam) {
      return new Response(JSON.stringify({ error: "ID de tarea requerido" }), { status: 400 });
    }
    const tareaId = Number(idParam);

    const [tarea] = await db.select().from(TareasProveedor).where(eq(TareasProveedor.id, tareaId));
    if (!tarea) {
      return new Response(JSON.stringify({ error: "Tarea no encontrada" }), { status: 404 });
    }

    const [proveedor] = await db
      .select()
      .from(Proveedores)
      .where(and(eq(Proveedores.id, tarea.proveedorId), eq(Proveedores.usuarioId, user.id)));

    if (!proveedor) {
      return new Response(JSON.stringify({ error: "No autorizado" }), { status: 403 });
    }

    await db.delete(TareasProveedor).where(eq(TareasProveedor.id, tareaId));

    return new Response(JSON.stringify({ success: true, id: tareaId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    return new Response(JSON.stringify({ error: "Error al eliminar la tarea" }), { status: 500 });
  }
};

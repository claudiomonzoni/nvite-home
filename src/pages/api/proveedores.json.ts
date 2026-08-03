import type { APIRoute } from "astro";
import { db, Proveedores, PagosProveedor, TareasProveedor, eq, and, inArray } from "astro:db";
import sanitize from "sanitize-html";

// LIST OF COMMON PRELOADED PROVIDERS FOR WEDDINGS / XV YEARS
export const PROVEEDORES_COMUNES = [
  { nombre: "Fotografía y Video", categoria: "Fotografía y Video" },
  { nombre: "Banquete y Catering", categoria: "Banquete" },
  { nombre: "Locación / Salón de Eventos", categoria: "Salón / Locación" },
  { nombre: "Música / DJ / Grupo En Vivo", categoria: "Música / DJ" },
  { nombre: "Flores y Decoración", categoria: "Flores y Decoración" },
  { nombre: "Bebidas y Barra de Cocteles", categoria: "Bebidas y Barra" },
  { nombre: "Mesa de Dulces / Pastel", categoria: "Postres y Pastelería" },
  { nombre: "Vestido / Traje / Maquillaje", categoria: "Estilo y Vestuario" },
];

export function isCommonProviderCovered(
  commonItem: { nombre: string; categoria: string },
  existingList: { nombre?: string | null; categoria?: string | null }[]
): boolean {
  const norm = (s: string = "") => s.toLowerCase().trim();
  const targetNombre = norm(commonItem.nombre);
  const targetCat = norm(commonItem.categoria);

  return existingList.some((p) => {
    const pNom = norm(p.nombre || "");
    const pCat = norm(p.categoria || "");

    if (!pNom && !pCat) return false;

    // Direct exact or substring match on category/name
    if (pNom === targetNombre || pCat === targetCat) return true;
    if (pCat && targetCat && (pCat.includes(targetCat) || targetCat.includes(pCat))) return true;

    // Specific domain rules:
    if (
      (targetCat.includes("fotografía") || targetCat.includes("video")) &&
      (pCat.includes("fotograf") || pCat.includes("video") || pNom.includes("foto") || pNom.includes("video"))
    ) return true;

    if (
      targetCat.includes("banquete") &&
      (pCat.includes("banquete") || pNom.includes("banquete") || pNom.includes("catering"))
    ) return true;

    if (
      (targetCat.includes("salón") || targetCat.includes("locación")) &&
      (pCat.includes("salón") || pCat.includes("salon") || pCat.includes("locación") || pCat.includes("locacion") || pNom.includes("salón") || pNom.includes("salon") || pNom.includes("locación") || pNom.includes("locacion"))
    ) return true;

    if (
      (targetCat.includes("música") || targetCat.includes("dj")) &&
      (pCat.includes("música") || pCat.includes("musica") || pCat.includes("dj") || pNom.includes("dj") || pNom.includes("música") || pNom.includes("musica"))
    ) return true;

    if (
      (targetCat.includes("flores") || targetCat.includes("decoración")) &&
      (pCat.includes("flor") || pCat.includes("decor") || pNom.includes("flor") || pNom.includes("decor"))
    ) return true;

    if (
      (targetCat.includes("bebidas") || targetCat.includes("barra")) &&
      (pCat.includes("bebida") || pCat.includes("barra") || pNom.includes("bebida") || pNom.includes("barra") || pNom.includes("coctel"))
    ) return true;

    if (
      (targetCat.includes("postres") || targetCat.includes("pastelería")) &&
      (pCat.includes("postre") || pCat.includes("pastel") || pNom.includes("dulce") || pNom.includes("pastel") || pNom.includes("postre"))
    ) return true;

    if (
      (targetCat.includes("estilo") || targetCat.includes("vestuario") || targetCat.includes("vestido") || targetCat.includes("traje") || targetCat.includes("maquillaje")) &&
      (pCat.includes("estilo") || pCat.includes("vestuario") || pCat.includes("vestido") || pCat.includes("traje") || pCat.includes("maquillaje") || pNom.includes("vestido") || pNom.includes("traje") || pNom.includes("maquillaje"))
    ) return true;

    return false;
  });
}

// GET: Fetch all providers for the logged-in user with their payments and tasks
export const GET: APIRoute = async ({ locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const proveedoresList = await db
      .select()
      .from(Proveedores)
      .where(eq(Proveedores.usuarioId, user.id));

    if (proveedoresList.length === 0) {
      return new Response(JSON.stringify([]), { status: 200, headers: { "Content-Type": "application/json" } });
    }

    const providerIds = proveedoresList.map((p) => p.id);

    const pagosList = await db
      .select()
      .from(PagosProveedor)
      .where(inArray(PagosProveedor.proveedorId, providerIds));

    const tareasList = await db
      .select()
      .from(TareasProveedor)
      .where(inArray(TareasProveedor.proveedorId, providerIds));

    const result = proveedoresList.map((p) => {
      const pagos = pagosList.filter((pago) => pago.proveedorId === p.id);
      const tareas = tareasList.filter((tarea) => tarea.proveedorId === p.id);
      const totalPagado = pagos.reduce((sum, pago) => sum + pago.monto, 0);

      return {
        ...p,
        totalPagado,
        saldoPendiente: Math.max(0, p.presupuestoTotal - totalPagado),
        pagos,
        tareas,
      };
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al obtener proveedores:", error);
    return new Response(JSON.stringify({ error: "Error al obtener proveedores" }), { status: 500 });
  }
};

// POST: Add new provider (single or bulk precarga)
export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const body = await request.json();

    // Check if precarga action
    if (body.action === "precargar") {
      const existentes = await db
        .select({ nombre: Proveedores.nombre, categoria: Proveedores.categoria })
        .from(Proveedores)
        .where(eq(Proveedores.usuarioId, user.id));

      const aInsertar = PROVEEDORES_COMUNES.filter(
        (item) => !isCommonProviderCovered(item, existentes)
      );

      if (aInsertar.length === 0) {
        return new Response(
          JSON.stringify({
            success: true,
            count: 0,
            message: "Tus categorías de proveedores comunes ya están cubiertas.",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const inserted = [];
      for (const item of aInsertar) {
        const [prov] = await db
          .insert(Proveedores)
          .values({
            usuarioId: user.id,
            nombre: sanitize(item.nombre),
            categoria: sanitize(item.categoria),
            presupuestoTotal: 0,
          })
          .returning();
        inserted.push(prov);
      }
      return new Response(
        JSON.stringify({
          success: true,
          count: inserted.length,
          message: `Se agregaron ${inserted.length} proveedores comunes a tu lista.`,
          proveedores: inserted,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { nombre, categoria, contactoNombre, contactoTelefono, presupuestoTotal, fechaLimitePago, notas } = body;

    if (!nombre || !categoria) {
      return new Response(JSON.stringify({ error: "Nombre y categoría son requeridos" }), { status: 400 });
    }

    const [nuevo] = await db
      .insert(Proveedores)
      .values({
        usuarioId: user.id,
        nombre: sanitize(nombre.trim()),
        categoria: sanitize(categoria.trim()),
        contactoNombre: contactoNombre ? sanitize(contactoNombre.trim()) : null,
        contactoTelefono: contactoTelefono ? sanitize(contactoTelefono.trim()) : null,
        presupuestoTotal: Math.max(0, Number(presupuestoTotal) || 0),
        fechaLimitePago: fechaLimitePago ? new Date(fechaLimitePago) : null,
        notas: notas ? sanitize(notas.trim()) : null,
      })
      .returning();

    return new Response(JSON.stringify(nuevo), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al crear proveedor:", error);
    return new Response(JSON.stringify({ error: "Error al guardar el proveedor" }), { status: 500 });
  }
};

// PUT: Batch Edit provider (including payments and tasks)
export const PUT: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, nombre, categoria, contactoNombre, contactoTelefono, presupuestoTotal, fechaLimitePago, notas, pagos, tareas } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: "ID de proveedor requerido" }), { status: 400 });
    }

    // Verify ownership
    const [existente] = await db
      .select()
      .from(Proveedores)
      .where(and(eq(Proveedores.id, Number(id)), eq(Proveedores.usuarioId, user.id)));

    if (!existente) {
      return new Response(JSON.stringify({ error: "Proveedor no encontrado" }), { status: 404 });
    }

    // Update main provider record
    const [actualizado] = await db
      .update(Proveedores)
      .set({
        nombre: nombre ? sanitize(nombre.trim()) : existente.nombre,
        categoria: categoria ? sanitize(categoria.trim()) : existente.categoria,
        contactoNombre: contactoNombre !== undefined ? (contactoNombre ? sanitize(contactoNombre.trim()) : null) : existente.contactoNombre,
        contactoTelefono: contactoTelefono !== undefined ? (contactoTelefono ? sanitize(contactoTelefono.trim()) : null) : existente.contactoTelefono,
        presupuestoTotal: presupuestoTotal !== undefined ? Math.max(0, Number(presupuestoTotal) || 0) : existente.presupuestoTotal,
        fechaLimitePago: fechaLimitePago !== undefined ? (fechaLimitePago ? new Date(fechaLimitePago) : null) : existente.fechaLimitePago,
        notas: notas !== undefined ? (notas ? sanitize(notas.trim()) : null) : existente.notas,
      })
      .where(eq(Proveedores.id, Number(id)))
      .returning();

    // Batch sync payments if array passed
    if (Array.isArray(pagos)) {
      await db.delete(PagosProveedor).where(eq(PagosProveedor.proveedorId, Number(id)));
      for (const p of pagos) {
        if (Number(p.monto) > 0) {
          await db.insert(PagosProveedor).values({
            proveedorId: Number(id),
            monto: Number(p.monto),
            fecha: p.fecha ? new Date(p.fecha) : new Date(),
            concepto: p.concepto ? sanitize(String(p.concepto).trim()) : "Abono",
          });
        }
      }
    }

    // Batch sync tasks if array passed
    if (Array.isArray(tareas)) {
      await db.delete(TareasProveedor).where(eq(TareasProveedor.proveedorId, Number(id)));
      for (const t of tareas) {
        if (t.titulo) {
          await db.insert(TareasProveedor).values({
            proveedorId: Number(id),
            titulo: sanitize(String(t.titulo).trim()),
            fechaLimite: t.fechaLimite ? new Date(t.fechaLimite) : null,
            completada: Boolean(t.completada),
          });
        }
      }
    }

    return new Response(JSON.stringify({ success: true, proveedor: actualizado }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al actualizar proveedor:", error);
    return new Response(JSON.stringify({ error: "Error al actualizar el proveedor" }), { status: 500 });
  }
};

// DELETE: Remove provider (and cascaded items)
export const DELETE: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const url = new URL(request.url);
    const idParam = url.searchParams.get("id");
    if (!idParam) {
      return new Response(JSON.stringify({ error: "ID de proveedor requerido" }), { status: 400 });
    }
    const id = Number(idParam);

    const [existente] = await db
      .select()
      .from(Proveedores)
      .where(and(eq(Proveedores.id, id), eq(Proveedores.usuarioId, user.id)));

    if (!existente) {
      return new Response(JSON.stringify({ error: "Proveedor no encontrado" }), { status: 404 });
    }

    // Delete associated payments and tasks first
    await db.delete(PagosProveedor).where(eq(PagosProveedor.proveedorId, id));
    await db.delete(TareasProveedor).where(eq(TareasProveedor.proveedorId, id));
    await db.delete(Proveedores).where(eq(Proveedores.id, id));

    return new Response(JSON.stringify({ success: true, id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al eliminar proveedor:", error);
    return new Response(JSON.stringify({ error: "Error al eliminar el proveedor" }), { status: 500 });
  }
};

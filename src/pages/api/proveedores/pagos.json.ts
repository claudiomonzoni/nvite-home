import type { APIRoute } from "astro";
import { db, Proveedores, PagosProveedor, eq, and } from "astro:db";
import sanitize from "sanitize-html";

// POST: Add a new payment for a provider
export const POST: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const { proveedorId, monto, fecha, concepto } = await request.json();

    if (!proveedorId || !monto) {
      return new Response(JSON.stringify({ error: "Proveedor y monto son requeridos" }), { status: 400 });
    }

    // Verify ownership of the provider
    const [proveedor] = await db
      .select()
      .from(Proveedores)
      .where(and(eq(Proveedores.id, Number(proveedorId)), eq(Proveedores.usuarioId, user.id)));

    if (!proveedor) {
      return new Response(JSON.stringify({ error: "Proveedor no encontrado" }), { status: 404 });
    }

    const [nuevoPago] = await db
      .insert(PagosProveedor)
      .values({
        proveedorId: Number(proveedorId),
        monto: Number(monto),
        fecha: fecha ? new Date(fecha) : new Date(),
        concepto: concepto ? sanitize(concepto.trim()) : "Abono / Pago",
      })
      .returning();

    return new Response(JSON.stringify(nuevoPago), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al registrar pago:", error);
    return new Response(JSON.stringify({ error: "Error al registrar el pago" }), { status: 500 });
  }
};

// DELETE: Delete a payment
export const DELETE: APIRoute = async ({ request, locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
  }

  try {
    const url = new URL(request.url);
    const idParam = url.searchParams.get("id");
    if (!idParam) {
      return new Response(JSON.stringify({ error: "ID de pago requerido" }), { status: 400 });
    }
    const pagoId = Number(idParam);

    const [pago] = await db.select().from(PagosProveedor).where(eq(PagosProveedor.id, pagoId));
    if (!pago) {
      return new Response(JSON.stringify({ error: "Pago no encontrado" }), { status: 404 });
    }

    // Verify provider ownership
    const [proveedor] = await db
      .select()
      .from(Proveedores)
      .where(and(eq(Proveedores.id, pago.proveedorId), eq(Proveedores.usuarioId, user.id)));

    if (!proveedor) {
      return new Response(JSON.stringify({ error: "No autorizado" }), { status: 403 });
    }

    await db.delete(PagosProveedor).where(eq(PagosProveedor.id, pagoId));

    return new Response(JSON.stringify({ success: true, id: pagoId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al eliminar pago:", error);
    return new Response(JSON.stringify({ error: "Error al eliminar el pago" }), { status: 500 });
  }
};

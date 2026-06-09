import { defineMiddleware } from "astro:middleware";
import { db, Usuario, Sesion, eq } from "astro:db";

export const onRequest = defineMiddleware(async (context, next) => {
    const { pathname } = context.url;
    const method = context.request.method;

    // 📌 Permitir el acceso a imágenes generadas por Astro y archivos estáticos
    if (
        pathname.startsWith("/_astro/") || 
        pathname.startsWith("/_image") ||  // ✅ Permitir imágenes optimizadas por Astro
        pathname.match(/\.(png|jpe?g|gif|webp|svg|ico|css|js|woff2?|ttf|otf)$/)
    ) {
        return next();
    }

    // 1. Obtener la sesión actual desde la cookie
    const sessionId = context.cookies.get("session_id")?.value;
    let usuarioLogueado = null;

    if (sessionId) {
        try {
            const sessions = await db
                .select()
                .from(Sesion)
                .where(eq(Sesion.id, sessionId));

            if (sessions.length > 0) {
                const session = sessions[0];
                const expiraAt = new Date(session.expiraAt);

                if (expiraAt > new Date()) {
                    const users = await db
                        .select()
                        .from(Usuario)
                        .where(eq(Usuario.id, session.usuarioId));

                    if (users.length > 0) {
                        usuarioLogueado = users[0];
                        context.locals.user = usuarioLogueado;
                    }
                } else {
                    // Limpiar sesión expirada en la BD y en la cookie
                    await db.delete(Sesion).where(eq(Sesion.id, sessionId));
                    context.cookies.delete("session_id", { path: "/" });
                }
            }
        } catch (error) {
            console.error("Error al validar sesión en middleware:", error);
        }
    }

    const estaDentro = !!usuarioLogueado;

    // Rutas protegidas de la API
    const rutasProtegidas = [
        /^\/api\/addInvitados\.json$/, // Ruta para agregar invitados
    ];

    const esRutaProtegida = rutasProtegidas.some((ruta) => ruta.test(pathname));

    if (esRutaProtegida && (method === "POST" || method === "DELETE")) {
        if (!estaDentro) {
            return new Response(JSON.stringify({ message: "No autorizado" }), { status: 401 });
        }
        return next();
    }

    // Redirigir si el usuario autenticado intenta ingresar a /panel/ingresar o /panel/registro
    if (estaDentro && (pathname === '/panel/ingresar' || pathname === '/panel/registro')) {
        return context.redirect('/panel');
    }

    // Rutas públicas permitidas sin autenticación
    const rutasPublicas = [
        /^\/$/,                               // Página principal
        /^\/sitemap\.xml$/,                   // Sitemap
        /^\/robots\.txt$/,                    // Robots.txt
        /^\/api\/getInvitado\.json$/,         // Ruta para obtener invitado
        /^\/api\/\d+\.json$/,                 // Ruta para actualizar invitado (PATCH)
        /^\/panel\/ingresar$/,                // Página de ingreso
        /^\/panel\/registro$/,                // Página de registro
        /^\/keystatic(\/.*)?$/,               // Cualquier subruta en keystatic
        /^\/bodas(\/.*)?$/,                   // Cualquier subruta en /bodas
        /^\/quince(\/.*)?$/,                  // Cualquier subruta en /quince
        /^\/invitaciones-quince(\/.*)?$/,     // Cualquier subruta en /invitaciones-quince
        /^\/invitaciones-pdf(\/.*)?$/,        // Cualquier subruta en /invitaciones-pdf
        /^\/nvitaciones(\/.*)?$/,             // Cualquier subruta en /nvitaciones
        /^\/terminos-condiciones(\/.*)?$/,    // Cualquier subruta en /terminos-condiciones
        /^\/404(\/.*)?$/,                     // 404
    ];

    const esRutaPublica = rutasPublicas.some((ruta) => ruta.test(pathname));

    // Si no está autenticado, permitir acceso a rutas públicas o bloquearlo
    if (!estaDentro) {
        if (esRutaPublica || pathname.startsWith('/api/')) {
            return next();
        } else {
            return context.redirect('/panel/ingresar');
        }
    }

    return next();
});

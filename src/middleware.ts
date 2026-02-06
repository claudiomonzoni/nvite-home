import { defineMiddleware } from "astro:middleware";
import { NvitaAuth } from "./firebase/config";

export const onRequest = defineMiddleware(async (context, next) => {
    const estaDentro = NvitaAuth.currentUser; // Verifica si el usuario está autenticado
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

    // Rutas protegidas
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
        /^\/api\/getInvitados\.json$/,        // Ruta específica de la API
        /^\/api\/getInvitado\.json$/,         // Ruta para obtener invitado
        /^\/api\/\d+\.json$/,                 // Ruta para actualizar invitado (PATCH)
        /^\/panel\/ingresar$/,                // Página de ingreso
        /^\/panel\/registro$/,                // Página de registro
        /^\/keystatic(\/.*)?$/,                   // Cualquier subruta en /bodas
        /^\/bodas(\/.*)?$/,                   // Cualquier subruta en /bodas
        /^\/quince(\/.*)?$/,                   // Cualquier subruta en /bodas
        /^\/invitaciones-quince(\/.*)?$/,                  // Cualquier subruta en /quince
        /^\/invitaciones-pdf(\/.*)?$/,                  // Cualquier subruta en /quince
        /^\/nvitaciones(\/.*)?$/,                  // Cualquier subruta en /quince
        /^\/terminos-condiciones(\/.*)?$/,    // Cualquier subruta en /terminos-condiciones
        /^\/404(\/.*)?$/,    // Cualquier subruta en /terminos-condiciones
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

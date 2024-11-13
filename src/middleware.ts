import { defineMiddleware } from "astro:middleware";
import { NvitaAuth } from "./firebase/config";

export const onRequest = defineMiddleware(async (context, next)  => {
    const estaDentro = NvitaAuth.currentUser
    const { pathname } = context.url;
    
    if(estaDentro && (
        pathname === '/panel/ingresar' ||
        pathname === '/panel/registro'
      
    )){
        return context.redirect('/panel')
    }

    const rutasPublicas = [
        /^\/$/,                              // Página principal
        /^\/api\/getInvitados\.json$/,       // Ruta específica de la API
        /^\/panel\/ingresar$/,               // Página de ingreso
        /^\/panel\/registro$/,               // Página de registro
        /^\/bodas(\/.*)?$/,                  // Cualquier subruta en /bodas
        /^\/quince(\/.*)?$/,                 // Cualquier subruta en /quince
        // /^\/api\/.*$/                        // Todas las rutas de la API con método GET
    ];

    const esRutaPublica = rutasPublicas.some((ruta) => ruta.test(pathname));

    // Permitir acceso a rutas públicas o redirigir si no está autenticado
    if (!estaDentro) {
        if (esRutaPublica || (pathname.startsWith('/api/') )) {
            return next();
        } else {
            // Redirigir a la página de ingreso si el usuario no está autenticado
            return context.redirect('/panel/ingresar');
        }
    }
    // if(!estaDentro && pathname !== "/"  && pathname !== "/api/getInvitados.json" && pathname !== "/panel/ingresar" && pathname !== "/panel/registro" && context.request.method === "GET"){
    //     return context.redirect('/panel/ingresar')
    // }
    return next()
    
})
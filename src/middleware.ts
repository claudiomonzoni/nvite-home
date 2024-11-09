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
    if(!estaDentro && pathname !== "/"  && pathname !== "/api/getInvitados.json" && pathname !== "/panel/ingresar" && pathname !== "/panel/registro" && context.request.method === "GET"){
        return context.redirect('/panel/ingresar')
    }
    return next()
    
})
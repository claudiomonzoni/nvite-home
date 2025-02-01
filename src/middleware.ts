import { defineMiddleware } from "astro:middleware";
import { NvitaAuth } from "./firebase/config";

export const onRequest = defineMiddleware(async (context, next) => {
  

    return next()
    
})
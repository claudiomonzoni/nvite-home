/**
 * Endpoint de Recordatorios Automáticos
 * Se ejecuta diariamente vía cron-job.org
 * 
 * Busca usuarios con evento en 15 días y envía recordatorio WhatsApp
 * a los invitados que no han confirmado
 */

import type { APIRoute } from "astro";
import { db, Invitados, Usuario, eq, and, sql } from "astro:db";
import { enviarRecordatorio } from "../../../lib/metaWhatsapp";

// Días antes del evento para enviar recordatorio
const DIAS_ANTES = 15;

export const GET: APIRoute = async ({ url }) => {
  // Verificar API key de seguridad
  const apiKey = url.searchParams.get('key');
  const expectedKey = import.meta.env.CRON_API_KEY;
  
  // Si hay una API key configurada, verificar que coincida
  if (expectedKey && apiKey !== expectedKey) {
    console.warn('⚠️ [CRON] Intento de acceso no autorizado');
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
      status: 401, 
      headers: { "Content-Type": "application/json" } 
    });
  }

  try {
    console.log('🔔 [CRON] Iniciando proceso de recordatorios...');
    
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    // Calcular fecha objetivo: hoy + 15 días
    const fechaObjetivo = new Date(hoy);
    fechaObjetivo.setDate(fechaObjetivo.getDate() + DIAS_ANTES);
    
    // Obtener la fecha en formato YYYY-MM-DD para comparar
    const fechaObjetivoStr = fechaObjetivo.toISOString().split('T')[0];
    
    console.log(`📅 [CRON] Buscando usuarios con evento el: ${fechaObjetivoStr}`);

    // Obtener usuarios que tienen evento en exactamente 15 días y addon activo
    const usuarios = await db
      .select()
      .from(Usuario)
      .where(
        and(
          eq(Usuario.addonRecordatorios, true),
          eq(Usuario.fechaEvento, fechaObjetivo)
        )
      );

    console.log(`👥 [CRON] ${usuarios.length} usuarios encontrados con evento en ${DIAS_ANTES} días`);

    let totalEnviados = 0;
    let totalErrores = 0;
    let usuariosProcesados = 0;

    for (const usuario of usuarios) {
      if (!usuario.fechaEvento || !usuario.ruta) {
        console.warn(`⚠️ [CRON] Usuario ${usuario.id} sin fecha o ruta, saltando...`);
        continue;
      }

      usuariosProcesados++;

      // Obtener invitados sin confirmar que ya recibieron invitación
      const invitados = await db
        .select()
        .from(Invitados)
        .where(
          and(
            eq(Invitados.usuarioId, usuario.id),
            eq(Invitados.confirmado, false),
            eq(Invitados.noAsiste, false),
            eq(Invitados.InvitacionEnviada, true),
            eq(Invitados.recordatorioEnviado, false)
          )
        );

      console.log(`📋 [CRON] Usuario ${usuario.nombreEvento}: ${invitados.length} invitados sin confirmar`);

      const baseUrl = import.meta.env.PUBLIC_SITE_URL || 'https://nvitaciones.com';
      const urlInvitacion = `${baseUrl}/${usuario.ruta}`;
      const fechaFormateada = new Date(usuario.fechaEvento).toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      for (const invitado of invitados) {
        // Validar que tenga número de WhatsApp y UUID
        if (!invitado.numeroWhats || !invitado.uuid) {
          console.warn(`⚠️ [CRON] Invitado ${invitado.id} sin WhatsApp o UUID, saltando...`);
          continue;
        }

        const numeroFormateado = String(invitado.numeroWhats);
        const urlInvitacionCompleta = `${urlInvitacion}/${invitado.uuid}`;

        // Enviar recordatorio
        const resultado = await enviarRecordatorio(
          numeroFormateado,
          invitado.nombre,
          usuario.nombreEvento || 'tu evento',
          fechaFormateada,
          urlInvitacionCompleta
        );

        if (resultado.success) {
          // Marcar como enviado
          await db
            .update(Invitados)
            .set({
              recordatorioEnviado: true,
              fechaRecordatorioEnviado: new Date()
            })
            .where(eq(Invitados.id, invitados.length > 0 ? invitados[invitados.indexOf(invitado)].id : 0));
          
          // Necesitamos usar el ID correcto del invitado actual
          // Corregimos la actualización
          await db
            .update(Invitados)
            .set({
              recordatorioEnviado: true,
              fechaRecordatorioEnviado: new Date()
            })
            .where(eq(Invitados.id, invitado.id));
          
          console.log(`✅ [CRON] Enviado a ${invitado.nombre} (${numeroFormateado})`);
          totalEnviados++;
        } else {
          console.error(`❌ [CRON] Error enviando a ${invitado.nombre}: ${resultado.error}`);
          totalErrores++;
        }
      }
    }

    console.log(`🏁 [CRON] Proceso completado. Enviados: ${totalEnviados}, Errores: ${totalErrores}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Proceso completado. ${totalEnviados} mensajes enviados, ${totalErrores} errores.`,
        usuariosProcesados,
        mensajesEnviados: totalEnviados,
        errores: totalErrores
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error('❌ [CRON] Error general:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido' 
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
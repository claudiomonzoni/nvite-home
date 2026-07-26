/**
 * Integración con Meta Cloud API para WhatsApp
 * Sistema de Recordatorios Automáticos - nvitaciones.com
 */

interface MessagePayload {
  to: string;
  templateName: string;
  parameters?: Record<string, string>;
}

interface WhatsAppResponse {
  messaging_product: string;
  to: string;
  type: string;
  template: {
    name: string;
    language: { code: string };
    components?: Array<{
      type: string;
      parameters: Array<{
        type: string;
        parameter_name: string;
        text: string;
      }>;
    }>;
  };
}

/**
 * Envía un mensaje de WhatsApp usando Meta Cloud API
 * @param payload - Objeto con los datos del mensaje
 * @returns Promise con la respuesta de la API
 */
export async function enviarWhatsapp(payload: MessagePayload): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const { to, templateName, parameters } = payload;

  // Validar que existan las variables de entorno necesarias
  if (!import.meta.env.META_WHATSAPP_TOKEN || !import.meta.env.META_WHATSAPP_PHONE_ID) {
    console.error('❌ Meta WhatsApp: Faltan variables de entorno');
    return { success: false, error: 'Configuración de WhatsApp no disponible' };
  }

  const url = `https://graph.facebook.com/v21.0/${import.meta.env.META_WHATSAPP_PHONE_ID}/messages`;

  // Construir el cuerpo del mensaje
  const body: WhatsAppResponse = {
    messaging_product: 'whatsapp',
    to: to,
    type: 'template',
    template: {
      name: templateName,
      language: { code: 'es_ES' }
    }
  };

  // Agregar parámetros si existen
  if (parameters && Object.keys(parameters).length > 0) {
    body.template.components = [{
      type: 'body',
      parameters: Object.entries(parameters).map(([key, value]) => ({
        type: 'text',
        parameter_name: key,
        text: value
      }))
    }];
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.META_WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error('❌ Meta WhatsApp API Error:', data.error || data);
      return { 
        success: false, 
        error: data.error?.message || 'Error desconocido al enviar mensaje' 
      };
    }

    console.log('✅ Meta WhatsApp: Mensaje enviado correctamente');
    return { 
      success: true, 
      messageId: data.messages?.[0]?.id 
    };

  } catch (error) {
    console.error('❌ Meta WhatsApp Exception:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Error al enviar mensaje' 
    };
  }
}

/**
 * Envía un recordatorio de confirmación a un invitado
 * @param numeroWhats - Número de WhatsApp del invitado
 * @param nombreInvitado - Nombre del invitado
 * @param nombreEvento - Nombre del evento
 * @param fechaEvento - Fecha del evento
 * @param urlInvitacion - URL de la invitación
 * @returns Promise con el resultado del envío
 */
export async function enviarRecordatorio(
  numeroWhats: string,
  nombreInvitado: string,
  nombreEvento: string,
  fechaEvento: string,
  urlInvitacion: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  return enviarWhatsapp({
    to: numeroWhats,
    templateName: 'recordatorio_confirmar',
    parameters: {
      nombre_invitado: nombreInvitado,
      nombre_evento: nombreEvento,
      fecha_evento: fechaEvento,
      link_invitacion: urlInvitacion
    }
  });
}
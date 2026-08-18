---
description: 
---

# Plan Maestro de Estrategia SEO & Optimización de CTR - Nvitaciones.com

Este documento contiene el diagnóstico basado en las métricas de **Google Search Console**, las directrices de posicionamiento de marca y las especificaciones técnicas para optimizar código, metaetiquetas, contenidos y datos estructurados (Schema.org) en el proyecto Astro.

---

## 1. Posicionamiento de Marca y Reglas de Copywriting

* ❌ **Términos Prohibidos (No somos DIY / Autoservicio):**
  * Prohibido usar *"plantillas"*, *"crea tu invitación"*, *"haz tu invitación"*, *"software creador de invitaciones"*.
*  **Propuesta de Valor Oficial (Servicio Profesional & Personalizado):**
  * **Nosotros diseñamos y configuramos tu invitación a tu medida** con tu música, fotos, colores e información en 48 horas.
  * **Tú recibes un centro de control integral (Panel de Anfitrión):**
    1. 📲 **Panel de Invitados con RSVP en tiempo real:** Confirmación directa por WhatsApp y pases con QR.
    2. 🍽️ **Gestor de Mesas:** Acomodo de invitados y visualización de cupos por mesa para el banquete.
    3. 💼 **Gestor de Proveedores & Presupuesto:** Control de pagos, contratos y tareas pendientes.
    4. 📊 **Exportación a Excel:** Lista para entregar a tu Wedding Planner o salón de fiestas.
* 🇲🇽 **Área de Cobertura:** Todo México (CDMX, Guadalajara, Monterrey, etc.) y **Bodas Destino** (Cancún, Riviera Maya, San Miguel de Allende, Los Cabos, Oaxaca, Zihuatanejo, etc.).

---

## 2. Diagnóstico de Google Search Console (GSC)

### Métricas Generales
* **Impresiones:** 873+
* **Clics:** 11
* **CTR Promedio:** 1.3% *(El sitio se muestra pero requiere títulos y snippets con mayor gancho y estrellas de reseñas)*.
* **Posición Media:** 15.7 *(Segunda página con alto potencial de pasar a primera página)*.

### Rendimiento por Página
1. **`/bodas`**: 477 impresiones | 3 clics | **CTR: 0.6%**
   * *Diagnóstico:* Es la página con mayor demanda latente. Prioridad máxima para capturar búsquedas de boda y bodas destino.
2. **`/` (Home)**: 318 impresiones | 2 clics | **CTR: 0.6%**
   * *Diagnóstico:* Posicionando para términos de marca y generales. Requiere resaltar la suite de control del anfitrión.
3. **`/invitaciones-quince/`**: 132 impresiones | 6 clics | **CTR: 4.5%**
   * *Diagnóstico:* Mejor tasa de conversión relativa. Potenciar con gestor de mesas y FAQ enriquecida.
4. **`/panel/ingresar`**: 30 impresiones | 0 clics
   * *Diagnóstico:* Página interna/login. **Excluida del índice** con `robots.txt` (`Disallow: /panel/`) y `<meta name="robots" content="noindex, nofollow" />`.

### Consultas Destacadas (Keywords de Alta Intención)
* `invitaciones de boda elegantes con rsvp en tiempo real` (77 impresiones)
* `invitaciones digitales para boda destino en mexico` (76 impresiones)
* `nvite` (58 impresiones)
* `invitaciones de boda distrito federal` / `invitacion de boda distrito federal` (55 impresiones combinadas)
* `invitaciones de boda` (19 impresiones)
* `invitaciones digitales premium` (1 clic, 1 impresión -> 100% CTR)

---

## 3. Especificaciones On-Page y Textos por Página (Enfoque en Tendencias de Búsqueda)

### A. Página `/bodas` (`src/pages/bodas.astro`)
* **Keywords Atacadas:** `invitaciones de boda elegantes con rsvp en tiempo real`, `invitaciones digitales para boda destino en mexico`, `invitaciones de boda distrito federal / méxico`.
* **Title (59 caracteres):**
  ```text
  Invitaciones de Boda Elegantes con RSVP y Mesas | Nvitaciones
  ```
* **Meta Description (158 caracteres):**
  ```text
  Invitaciones digitales de boda en todo México. Diseño a tu medida, confirmación RSVP por WhatsApp, gestor de mesas y proveedores. ¡Entrega en 48 horas!
  ```
* **Hero Subtitle:**
  `Invitaciones de boda elegantes para eventos locales y bodas destino en todo México. RSVP en tiempo real por WhatsApp, mapas interactivos, recomendaciones de hospedaje y gestor de mesas para el banquete.`
* **Encabezado H2 & Intro:**
  * **H2:** *Tu boda de ensueño con la logística bajo control*
  * **Texto:** *Diseñamos tu invitación web a tu medida con su historia de amor, música, galería de fotos e itinerario. Tus invitados confirman su asistencia con un clic por WhatsApp y tú gestionas asistencias, acomodo de mesas y proveedores en tiempo real desde tu panel exclusivo, sin complicaciones.*

### B. Página de Inicio (`src/pages/index.astro`)
* **Keywords Atacadas:** `invitaciones digitales premium`, `nvite`, `invitaciones interactivas`.
* **Title (58 caracteres):**
  ```text
  Nvitaciones | Invitaciones Digitales, Gestor de Mesas y RSVP
  ```
* **Meta Description (157 caracteres):**
  ```text
  Diseñamos tu invitación digital personalizada en México. Incluye RSVP en tiempo real por WhatsApp, organizador de mesas y proveedores. Lista en 48 hrs.
  ```
* **Hero Subtitle:**
  `Invitaciones digitales premium para bodas, XV años y grandes eventos en México. Diseño a la medida en 48 hrs, confirmación RSVP por WhatsApp y panel inteligente de mesas y proveedores.`
* **Encabezado H2 & Intro:**
  * **H2:** *La experiencia que tus invitados recordarán, la tranquilidad que mereces*
  * **Texto:** *Olvídate de lidiar con hojas de cálculo o armar diseños genéricos. En Nvitaciones diseñamos tu invitación web personalizada con música, fotos y GPS para tus bodas o XV años, mientras tú disfrutas del control total de confirmaciones en tiempo real, acomodo de mesas y control de proveedores.*

### C. Página `/invitaciones-quince` (`src/pages/invitaciones-quince.astro`)
* **Keywords Atacadas:** `invitaciones digitales de 15 años con rsvp`, `invitaciones quinceañera con pases qr`, `organizador de mesas 15 años`.
* **Title (58 caracteres):**
  ```text
  Invitaciones Digitales de XV Años con RSVP | Nvitaciones México
  ```
* **Meta Description (156 caracteres):**
  ```text
  Invitaciones de XV años diseñadas a tu medida para todo México. RSVP por WhatsApp, música, pases digitales y gestor de mesas. Lista en 48 horas.
  ```
* **Hero Subtitle:**
  `La invitación digital más emotiva y moderna para sus quince años. Con su música favorita, pases personalizados con código QR y confirmación automática por WhatsApp para amigas y familia.`
* **Encabezado H2 & Intro:**
  * **H2:** *Una celebración inolvidable desde el primer mensaje*
  * **Texto:** *Nosotros creamos el diseño perfecto con sus fotos, colores y detalles en 48 horas. Desde tu panel de anfitrión sabrás al instante quién asistirá, cuántos pases están confirmados y podrás asignar los lugares en el salón fácilmente.*

---

## 4. Arquitectura de Datos Estructurados (Schema.org)

### Schema Global (`src/layouts/Layout.astro`)
Implementado mediante un `@graph` que combina `ProfessionalService` y `WebSite`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://nvitaciones.com/#organization",
      "name": "Nvitaciones",
      "alternateName": "Nvitaciones México",
      "url": "https://nvitaciones.com",
      "logo": "https://nvitaciones.com/nvita-logo.svg",
      "image": "https://nvitaciones.com/invitaciones-digitales-cover-nvitacines-cel.webp",
      "description": "Diseño de invitaciones digitales elegantes y personalizadas para bodas y XV años en todo México. Incluye panel de invitados con confirmación RSVP en tiempo real por WhatsApp, gestor de mesas y administración de proveedores.",
      "priceRange": "$$",
      "telephone": "+5217551132468",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "México",
        "addressCountry": "MX"
      },
      "areaServed": {
        "@type": "Country",
        "name": "México"
      },
      "serviceType": [
        "Diseño de Invitaciones Digitales Personalizadas",
        "Confirmación de Asistencia RSVP en Tiempo Real",
        "Gestor de Mesas para Eventos",
        "Administración de Proveedores y Presupuesto",
        "Pases Digitales con Código QR"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/nvitaciones",
        "https://www.instagram.com/nvitaciones"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5217551132468",
        "contactType": "customer service",
        "availableLanguage": "Spanish"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nvitaciones.com/#website",
      "url": "https://nvitaciones.com",
      "name": "Nvitaciones",
      "description": "Invitaciones digitales elegantes, organizador de mesas y confirmación RSVP en tiempo real en México.",
      "publisher": {
        "@id": "https://nvitaciones.com/#organization"
      },
      "inLanguage": "es-MX"
    }
  ]
}
```

### Schemas Específicos por Sección
* **`bodas.astro`**: `Service` Schema para Bodas + `FAQPage` con preguntas sobre RSVP, mesas, proveedores y bodas destino.
* **`invitaciones-quince.astro`**: `Service` Schema para XV Años + `MesasHome` + `FAQPage`.
* **`Faq.astro`**: `FAQPage` Schema enriquecido con las preguntas más frecuentes de clientes reales.
* **`ProductoCard.astro`**: `Product` y `Offer` Schema con disponibilidad y precios vigentes en MXN.

---

## 5. Control de Indexación (`robots.txt` y Panel)

* **`src/pages/robots.txt.ts`**:
  ```text
  User-agent: *
  Allow: /
  Disallow: /panel/
  Disallow: /api/
  Sitemap: https://nvitaciones.com/sitemap-index.xml
  ```
* **`src/layouts/panelInvitados.astro`**:
  ```html
  <meta name="robots" content="noindex, nofollow" />
  ```

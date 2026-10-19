# Paso 1: inventario y contrato de datos

Fecha de revisión: 7 de octubre de 2026.
Fuentes: código local, frontmatter MDX y caché `.astro/data-store.json`.
Informe reproducible: ejecutar `node scripts/audit-catalog.mjs` desde la raíz.
`CATALOGO-AUDITORIA.json` es una captura de diagnóstico, no una fuente de datos de la aplicación.

## Matriz comercial existente

Las 16 demos tienen archivo local; su paquete y tema coinciden con esta matriz.
Todos los archivos de imágenes de detalle referenciados por el catálogo existen.
Esto valida referencias y frontmatter, no renderizado, recursos remotos ni consultas de invitados.

| Evento | Paquete | Diseño | Slug comercial actual | Producto existente | Demos ES / EN |
|---|---|---|---|---|---|
| Bodas | Clásica | Base | `invitacion-bodas-clasica` | `prod_QNpO0T7kRp1zkL` | Sí / Sí |
| Bodas | Lux | Base | `invitacion-bodas-lux` | `prod_Q42WJO0oMaU98G` | Sí / Sí |
| Bodas | Lux | Elegante | `invitacion-bodas-lux-elegante` | `prod_SZwAeRXTJGqFO8` | Sí / Sí |
| XV | Clásica | Base | `invitacion-xv-clasica` | `prod_SK7Bqg9HjOSmhW` | Sí / Sí |
| XV | Lux | Base | `invitacion-xv-lux` | `prod_QLJkNCXvs8egN9` | Sí / Sí |
| XV | Lux | Elegante | `elegante-lux-xv` | `prod_UcVoRiVmcT6ZQM` | Sí / Sí |
| Bodas | Esencial | Base | `invitacion-bodas-esencial` | `prod_QNpXQx0LWRjRFh` | Sí / Sí |
| XV | Esencial | Base | `invitacion-xv-esencial` | `prod_SK7ICkqFPPgSuJ` | Sí / Sí |

Las URLs completas, incluyendo parámetros de demo, están en la captura JSON.
No retirar `id`, `uid` ni `lang` al cambiar el iframe: las demos de Clásica/Lux
usan datos de invitados para mostrar confirmación y pases.

### Combinaciones todavía no respaldadas por demos

Corrección posterior del usuario: Brisa sí tiene versión Lux en español.
Pendiente identificar URL y evento; la lista siguiente refleja únicamente los
archivos locales inspeccionados, no la totalidad de demos disponibles.

- Clásica × Elegante: no hay demos de catálogo en bodas ni XV.
- Clásica/Lux × Brisa: no hay demos de esos paquetes. Ambos `brisa-demo.mdx`
  declaran Esencial y `draft: true`, sin producto comercial asociado.
- «Playa» no es un identificador comercial verificado. No equipararlo a Brisa sin decisión explícita.

Los renderizadores tienen ramas para Base, Elegante y Brisa, separadas del
paquete. Esto permite ampliar combinaciones técnicamente, pero no demuestra
que las demos o la oferta estén listas. Durante esta migración se muestran
solo las combinaciones de la matriz; completar las restantes sería trabajo adicional.

## Funciones comprobadas en los renderizadores

| Función | Clásica | Lux | Esencial |
|---|---|---|---|
| Música y galería | Compartidas con Lux | Compartidas con Clásica | No recibe la misma rama |
| Confirmación conectada a invitados | Sí | Sí | Confirmación básica por WhatsApp |
| QR de pases | No | Sí | No |
| Itinerario | No | Sí, cuando hay datos | No |

Referencias: `src/pages/bodas/[slug].astro`,
`src/pages/quince/[slug].astro` y `src/components/comunes/Confirmacion.jsx`.
Clásica/Lux usan el mismo componente de confirmación; el mensaje sobre QR es específico de Lux.
Hospedaje se muestra cuando hay datos, sin un filtro de paquete en esas ramas:
no publicitarlo como exclusivo de Lux basándose únicamente en el código.
Los módulos del panel y sus addons no prueban derechos comerciales por paquete;
no inventar diferencias de mesas o gestión basándose solo en el nombre Lux.

## Precios: estado de verificación

Caché modificada el 7 de octubre de 2026 a las 15:28:31 UTC.
La consulta directa de productos/precios a Stripe falló con `StripeConnectionError`.
Los importes siguientes son los que resolvería el código con esa caché, no una
confirmación del estado actual de Stripe. Todos los productos de la matriz
figuran activos en ella.

| Oferta | Español | Inglés |
|---|---|---|
| Bodas Clásica Base | MXN 1,290 | USD 87 |
| XV Clásica Base | MXN 1,290 | **MXN 1,290 por fallback; falta USD activo** |
| Lux Base/Elegante, bodas y XV | MXN 1,688 | USD 128 |
| Esencial Base, bodas y XV | MXN 690 | USD 47 |

XV Clásica tiene además un precio activo de MXN 87 en caché; el precio por
defecto de MXN 1,290 tiene prioridad para español. No asumir que MXN 87 es USD
ni corregirlo automáticamente. Antes de validar compras en inglés, verificar
el producto y sus precios en Stripe. En fases posteriores, exigir moneda correcta
o comunicar indisponibilidad; evitar convertir un fallback en una oferta en USD.

## Recorrido de compra existente

1. Ficha: `src/pages/nvitaciones/[slug].astro` relaciona slug con producto y muestra.
   Sus CTAs usan `data-productid`; el script de la ficha agrega el ID a `cartItems`.
2. Helpers globales: `src/js/globals.ts` y `src/js/utils.ts` agregan/eliminan IDs repetidos.
3. Carrito: `src/js/cart.ts` agrupa IDs y cuenta repeticiones como cantidad.
   `CartItem.astro` muestra el nombre/imagen de Stripe, sin un campo propio de diseño.
4. Checkout: `checkout.astro` resuelve los precios en servidor y crea una sesión
   embedded de Stripe con `price` y `quantity`. No envía una selección de diseño
   en metadata y crea sesión al cargar la página.
5. Retorno: `success.astro` recupera la sesión y sus productos, borra el carrito
   y muestra un formulario Tally según `metadata.Tipo`. No transmite el diseño al formulario.
6. No se encontró webhook ni tabla de pedidos en este repositorio. El esquema
   de usuarios/invitados gestiona eventos, pero no registra compras.

La selección hoy se deduce del producto comprado cuando cada diseño tiene su
propio ID. No consolidar todos los diseños en un producto sin preservar ese dato.
El retorno actual no exige `payment_status === 'paid'` antes de mostrar el éxito;
se debe verificar pago confirmado en fase 3 antes de presentar selección como comprada.
Un flujo externo de Tally o automatizaciones fuera del repositorio no ha sido inspeccionado.

## Decisión de migración

**Usar el producto Lux Base de cada evento para todos sus diseños Lux.**
Decisión explícita del usuario posterior al inventario; sustituye la propuesta
inicial de mantener IDs por combinación. No requiere editar productos, precios
ni metadata global de productos en Stripe.

| Evento | Producto para todas las nuevas compras Lux |
|---|---|
| Bodas | `prod_Q42WJO0oMaU98G` |
| XV | `prod_QLJkNCXvs8egN9` |

Clásica y Esencial mantienen sus productos actuales. Los IDs Elegante del
inventario quedan como referencias históricas para enlaces, carritos y compras
anteriores; no se borran ni desactivan. Las nuevas compras toman precio del
producto Base correspondiente, nunca del producto histórico Elegante.

El carrito necesita un formato versionado con líneas
`{ productId, event, package, design, quantity }` para invitaciones web.
La identidad de línea incluye producto y diseño: Base y Elegante del mismo
paquete no se deben mezclar ni sobrescribir. Para otros productos, conservar
identidad por producto sin exigir campos de invitación. Una única cookie será
la fuente del carrito; todos sus lectores/escritores se migran de forma conjunta.

El lector aceptará el antiguo `cartItems: string[]`, resolverá cada ID histórico
a su combinación y contará repeticiones. Para IDs Lux Elegante, conservará
`design: 'elegante'` y resolverá el producto de compra al Lux Base de su evento.
El carrito mostrará el nombre del diseño y recalculará con el precio Base antes
del checkout. Las sesiones ya creadas y compras anteriores no se reescriben.

En fase 3 se guardará una captura validada de selección en metadata de la
sesión de Stripe (con versión de esquema, producto, evento, paquete, diseño y cantidad),
con límites explícitos de tamaño y cantidad. La captura nunca incluirá datos de invitados,
precios enviados por el navegador ni secretos. Validar combinaciones y producto
activo, resolver moneda/precio en servidor y permitir productos ajenos a este
catálogo, como PDF, sin reinterpretarlos como una invitación web.

La página de retorno leerá esa captura persistida y comprobará el pago;
para sesiones antiguas sin captura inferirá las combinaciones conocidas desde
los productos históricos. Para sesiones nuevas, un producto Base sin captura
no permite inferir Elegante: la metadata validada es obligatoria al crearlas.
Mostrará la elección junto al siguiente paso de personalización.
No se garantiza rellenado automático de Tally: queda fuera de lo verificado.
Los diseños adicionales Lux reutilizarán el producto Base del evento y se
identificarán en la captura. La mención de «brisas» es un ejemplo de selección,
no prueba de disponibilidad: Brisa requiere demo Lux válida antes de ofrecerse.

## Contrato propuesto de catálogo

Un módulo compartido expondrá estas entidades tipadas; los precios se mantienen
en las colecciones de Stripe, nunca se copian del informe a la aplicación.

```ts
type Event = 'bodas' | 'quince';
type Package = 'clasica' | 'lux' | 'esencial';
type Design = 'base' | 'elegante' | 'brisa';
type Locale = 'es' | 'en';

type Offering = {
  event: Event;
  package: Package;
  canonicalSlug: string;
  defaultDesign: Design;
  productId: string; // Lux usa el producto Base de su evento para todos sus diseños.
  visibleInPrimaryComparison: boolean; // Esencial permanece accesible.
};

type Combination = {
  event: Event;
  package: Package;
  design: Design;
  legacyProductId: string; // Solo para migrar IDs históricos; compra resuelta por Offering.
  legacySlug: string;
  previewUrls: Record<Locale, string>;
  images: string[]; // Reutilizar assets actuales para el primer piloto.
};
```

Migrar desde `nvitaciones.json` hacia una sola fuente canónica de combinaciones,
con un adaptador temporal para sus consumidores existentes. No mantener mapas
editables duplicados. Los textos de paquete describen funciones; el diseño aporta
nombre/miniatura/demo. Todos los CTAs deben resolver el producto del paquete y
conservar el diseño separado. Nunca escribir el tema en metadata global del
producto: es una elección específica de cada sesión de compra.

### Resolución de ficha y slugs antiguos

| Entrada antigua | Ficha canónica propuesta | Diseño inicial |
|---|---|---|
| `invitacion-bodas-clasica` | Mismo slug | base |
| `invitacion-bodas-lux` | Mismo slug | base |
| `invitacion-bodas-lux-elegante` | `invitacion-bodas-lux?tema=elegante` | elegante |
| `invitacion-xv-clasica` | Mismo slug | base |
| `invitacion-xv-lux` | Mismo slug | base |
| `elegante-lux-xv` | `invitacion-xv-lux?tema=elegante` | elegante |
| Ambos slugs Esencial | Mismo slug | base |

Agregar el prefijo `/nvitaciones/` a estas rutas. Preservar idioma y parámetros
permitidos al resolver aliases; revisar canonicals/redirecciones en fase 4.
Un tema desconocido cae al diseño predeterminado con indicación visible, nunca
se usa como URL libre de iframe. Al pasar de Lux Elegante a Clásica, avisar que
no existe esa combinación y ofrecer Base antes de habilitar la compra.

## Resultado y límites del paso 1

Inventario, trazabilidad de compra, estrategia de IDs y contrato definidos.
Pendientes de validación en fases 2/3: render de demos, acceso a datos de muestra,
precios actuales de Stripe, moneda de XV Clásica EN y persistencia de selección
implementada en sesión/retorno. No se ejecutó build porque solo se agregó
documentación y una auditoría local; no se crearon checkouts ni cargos.

Actualización posterior: se implementaron el piloto de bodas y la persistencia
de selección sobre Lux Base. El carrito almacena producto, diseño y cantidad;
evento y paquete se derivan del catálogo validado en servidor y se guardan en
metadata de sesión. Las pruebas de migración/metadata y el chequeo aislado de
archivos pasan. Build, vista real y consulta Stripe siguen pendientes; ver el
registro actualizado de `PLAN-CATALOGO.md`.

Brisa se conectó después como variante visual de las muestras Lux españolas:
URLs Lux Base con `tema=brisa`, mismas funciones/datos y mismo producto. No utiliza
los MDX Esencial `brisa-demo`. La selección de tema ahora es explícita para las
muestras y no muta la caché de frontmatter. Ver pruebas y avance en el plan.

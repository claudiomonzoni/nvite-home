# Catálogo de invitaciones: temas, paquetes y muestras

Guía de mantenimiento manual. Revisada contra el código el 7 de octubre de 2026.
Describe el estado actual; los ejemplos de ampliación no están aplicados.

## Alcance actual

- El selector de la ficha comercial está habilitado para bodas, Clásica y Lux.
- El catálogo incluye bodas y quince. Las páginas de muestra de ambos eventos
  resuelven el tema, pero el selector comercial todavía filtra solo bodas.
- Base y Elegante se derivan de los registros existentes del JSON.
- Brisa se agrega desde `catalog.ts` para Lux en español, en ambos eventos.
- Esencial sigue en el catálogo existente, fuera del piloto del selector.
- `/bodas` conserva las tarjetas por tema. Al entrar a una ficha de bodas,
  el enlace lleva el tema seleccionado y permite explorar otros en el selector.

## Archivos y responsabilidades

Rutas relativas a la raíz del repositorio:

| Archivo | Responsabilidad |
| --- | --- |
| `src/lib/catalog.ts` | Combinaciones de evento, paquete, tema e idioma; nombres visibles; URLs de muestra; producto Base asociado. |
| `src/pages/nvitaciones/nvitaciones.json` | Registros históricos, datos comerciales, muestras Base/Elegante e imágenes de tarjetas. |
| `src/components/WeddingSelector.astro` | Botones de paquetes/temas, iframe, selección, historial, enlace de muestra y actualización del botón de compra. |
| `src/pages/nvitaciones/[slug].astro` | Activa el piloto, obtiene el paquete/tema solicitado, datos comerciales y precios, y monta el selector. |
| `src/lib/demo-theme.ts` | Resuelve el tema visual de las muestras públicas a partir de `tema` y `lang`. |
| `src/pages/bodas/[slug].astro` | Renderiza la invitación de bodas usando el tema resuelto. |
| `src/pages/quince/[slug].astro` | Renderiza la invitación de quince usando el tema resuelto. |
| `src/lib/catalog-navigation.ts` | Genera enlaces desde tarjetas hacia la ficha de paquete con `?tema=...`. |
| `src/js/cart-state.ts` | Conserva producto, tema y cantidad; normaliza carritos antiguos. |
| `src/lib/checkout-selection.ts` | Serializa y recupera la selección de tema en metadata del checkout. |
| `public/marco-cel.webp` | Marco transparente superpuesto a la muestra. |

La disponibilidad que consume el selector está centralizada en `catalog.ts`.
El contenido comercial del JSON y los componentes visuales siguen siendo
responsabilidades separadas: registrar un tema no implementa su diseño.

## Cómo se construye el catálogo

`existingCatalog` es un arreglo, creado con `entries.map(...)` a partir del JSON.
`flatMap()` es un método nativo de los arreglos de JavaScript, no una función
declarada en el proyecto.

El bloque `export const catalog = existingCatalog.flatMap(...)` conserva cada
registro y agrega Brisa junto a cada Base Lux. Los campos relevantes son:

| Campo | Significado |
| --- | --- |
| `event` | `bodas` o `quince`. |
| `packageId` | `clasica`, `lux` o `esencial`. |
| `design` | Identificador del tema: `base`, `brisa`, `elegante`. |
| `languages` | Idiomas en los que realmente está disponible esa combinación. |
| `muestra.es`, `muestra.en` | URL de la invitación que se carga dentro del iframe. |
| `productId` | ID del producto Base del mismo evento y paquete, usado para comprar. |
| `canonicalSlug` | Slug comercial Base del paquete. |
| `legacyProductId` | ID histórico para resolver productos anteriores; las variantes sintéticas de Brisa no tienen uno. |
| `slug` | Identificador del registro; agregarlo al catálogo no crea una nueva página comercial por sí solo. |

Actualmente se infiere Elegante si el slug del JSON contiene `elegante`;
los demás registros se interpretan como Base. Por eso agregar un tema nuevo
solo al JSON no basta: esa inferencia también necesita contemplarlo, o se debe
registrar explícitamente como variante en `catalog.ts`.

## Cómo un botón cambia la muestra

1. La ficha lee `?tema=...` y busca una combinación compatible con el paquete
   e idioma. Si falta el parámetro, utiliza el tema del registro original.
2. `WeddingSelector.astro` filtra `catalog` por `event === 'bodas'`, paquete
   seleccionado e idioma disponible.
3. Por cada resultado genera un botón con `data-theme`, `data-label` y
   `data-url={previewUrl(item, lang)}`.
4. `previewUrl()` toma `muestra.es` o `muestra.en` y establece los parámetros
   `lang` y `tema`, conservando los demás, como `id` y `uid`.
5. Al pulsar el botón, `choose()` actualiza `aria-pressed`, el tema del botón
   de compra, el enlace de muestra completa y `frame.src` con `data-url`.
6. Actualiza `?tema=...` con `history.pushState` sin recargar la ficha y conserva
   ese tema en los enlaces de cambio de paquete. Atrás/adelante restaura la selección.
7. La página cargada en el iframe utiliza `resolveDemoTheme()` y sus componentes
   para dibujar el tema elegido.

Cambiar de paquete sí navega a otra ficha. Si el tema no está disponible en el
nuevo paquete/idioma, aparece un aviso y la compra queda deshabilitada hasta
seleccionar un tema válido. La muestra inicial puede caer al registro original;
no interpretar esa vista de respaldo como disponibilidad del tema solicitado.

## Habilitar Brisa en inglés y Clásica

Cuando estén listas **todas** las combinaciones de Brisa para bodas y quince,
Clásica y Lux, español e inglés, reemplazar el bloque `export const catalog = ...`
por este ejemplo:

```ts
export const catalog = existingCatalog.flatMap(item =>
  ['lux', 'clasica'].includes(item.packageId) && item.design === 'base'
    ? [
        item,
        {
          ...item,
          slug: `${item.canonicalSlug}-brisa`,
          design: 'brisa' as Design,
          languages: ['es', 'en'],
          legacyProductId: undefined,
          muestra: {
            es: `${item.muestra.es}&tema=brisa`,
            en: `${item.muestra.en}&tema=brisa`,
          },
          imagenes: ['/temas/brisa/orilla.webp'],
        },
      ]
    : [item]
);
```

Este ejemplo reutiliza datos y URLs de las muestras Base, conservando sus
IDs y aplicando Brisa mediante `tema=brisa`. El uso de `&` corresponde a las
URLs actuales, que ya tienen parámetros; para otras URLs usar `URL` y
`searchParams.set()` como hace `previewUrl()`.

Si solo están listas las bodas, limitar la condición también con
`item.event === 'bodas'`. Si la disponibilidad varía por paquete o evento,
declarar `languages` y `muestra` por combinación en lugar de habilitar todo.
No anunciar `en` con `muestra.en` vacío ni antes de verificar los textos
de los componentes del tema en ese idioma.

No hay que añadir botones manualmente ni cambiar productos/precios de Stripe
para habilitar un tema dentro de un paquete existente.

## Agregar un tema completamente nuevo

1. Implementar sus componentes, estilos y recursos visuales. Integrarlo en
   las ramas que renderizan `theme.name` en bodas/quince según corresponda,
   incluyendo los componentes secundarios que dependan del tema.
2. Agregar su identificador a `Design` en `catalog.ts`, por ejemplo `jardin`.
3. Agregar su nombre visible y traducción en `designLabel()`.
4. Registrar las variantes en `catalog`, con evento/paquete, idiomas reales,
   URLs válidas y `productId`/`canonicalSlug` heredados de Base.
5. Revisar `resolveDemoTheme()` si se agregan URLs de muestra nuevas. Actualmente
   identifica la muestra Base por su ruta y excluye específicamente Brisa de
   esa búsqueda. Reutilizar una ruta Base configurada con `?tema=jardin`
   permite resolver la combinación; una ruta nueva necesita revisar ese mapeo
   para que no quede asociada al paquete equivocado.
6. Si también debe aparecer una tarjeta nueva en `/bodas`, revisar el JSON,
   el renderizado de tarjetas y `catalog-navigation.ts`. Las variantes sintéticas
   del catálogo no crean tarjetas ni IDs históricos automáticamente. No inventar
   un producto Stripe como atajo para registrar una tarjeta.
7. Verificar vista previa, URL, cambio de paquete y selección en carrito.

No hace falta escribir o modificar un `.md`/MDX cada vez que el visitante cambia
de tema: la selección vive en la URL y el estado de compra. Crear contenido nuevo
solo cuando la muestra necesite datos distintos o una ruta propia.

## Ajustes manuales de UX/UI

Editar `WeddingSelector.astro`:

- HTML: opciones de paquete, nombres de temas y estructura de la muestra.
- `<style lang="scss">`: `.packages`, `.designs`, selección activa, sombras,
  tamaños, `.phone-preview`, `.phone-screen` y `.phone-frame`.
- `<script>`: `choose()`, sincronización de URL/compra, estados de carga y reintento.

Los recuadros utilizan `@extend .sombra` de `src/estilos/_variables.scss`.
Los temas muestran solo texto; la selección utiliza fondo y peso de fuente.
Conservar `aria-pressed` y el foco visible para navegación por teclado.
El marco debe mantener su proporción y `pointer-events: none` para permitir
clics y desplazamientos dentro del iframe.

## Compra y metadata

La selección se conserva como `{ productId, design, quantity }`. Cada variante
compra el producto Base del mismo evento y paquete; Clásica y Lux conservan
productos distintos. El tema se transporta por separado.

`selectionMetadata()` genera `catalog_version: '1'` y registros
`catalog_line_0`, `catalog_line_1`, etc., cuyo JSON contiene `productId`, `event`,
`package`, `design` y `quantity`. `readSelectionMetadata()` valida esos datos
contra el catálogo antes de recuperarlos.

No cambiar IDs/precios de Stripe como parte de un alta de tema. Esta guía
no requiere crear sesiones de pago reales para verificar el selector.

## Comprobación antes de habilitar una combinación

- Abrir la ficha con `?tema=base`, `?tema=brisa` y el tema nuevo, si corresponde.
- Confirmar que cada nombre corresponde al diseño correcto en el iframe.
- Revisar español e inglés y todos los paquetes/eventos que se anuncian.
- Cambiar de tema, recargar y usar atrás/adelante: URL y selección deben coincidir.
- Cambiar de paquete y comprobar conservación del tema o aviso de incompatibilidad.
- Verificar que el enlace de muestra completa abre la misma combinación.
- Revisar en móvil que el marco no deforma la muestra ni bloquea su interacción.
- Comprobar que carrito conserva el tema y usa el ID Base correcto.
- Para cambios de lógica, revisar `scripts/test-catalog-cart.ts` y actualizar
  expectativas de disponibilidad si se amplían idiomas o paquetes.

Al actualizar el modelo o sus restricciones, actualizar esta guía junto con
el código para evitar que ejemplos antiguos se interpreten como estado vigente.

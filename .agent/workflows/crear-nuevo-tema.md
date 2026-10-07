---
description: Proceso y estado real para crear y registrar temas de invitaciones.
---

# Crear un nuevo tema de invitación

Revisión del código: 6 de octubre de 2026. Esta guía distingue lo implementado actualmente de los requisitos para un tema nuevo. Los nombres de archivo se indican desde la raíz del proyecto.

## 1. Estado actual

Un tema se conecta en varios lugares independientes: estilos SCSS, Hero de la página, componentes con módulos propios y selector de Keystatic. Registrar una opción en el CMS no conecta automáticamente los demás.

| Evento | Opciones en Keystatic | Mixins registrados en el router SCSS | Hero de la página |
| --- | --- | --- | --- |
| Bodas | `base`, `clasico`, `moderno`, `elegante`, `brisa` | Los cinco | Casos explícitos para `base`, `elegante`, `brisa`; los demás devuelven `null` |
| XV años | `base`, `clasico`, `moderno`, `elegante`, `brisa` | `base`, `elegante`, `brisa` | Casos explícitos para esos tres; cualquier otro nombre usa el Hero Base |

Rutas de referencia:

- `keystatic.config.ts`: el selector `theme.name` se repite en las colecciones `bodas` y `quince`.
- `src/content.config.ts`: ambas colecciones leen MDX; `theme.name` es `z.string()`, no un enum. El esquema no comprueba que el tema esté implementado.
- `src/estilos/bodas/redireccion.scss` y `src/estilos/quince/redireccion.scss`: importan los globales y ejecutan sus mixins bajo `:root[data-theme="..."]`.
- `src/pages/bodas/[slug].astro` y `src/pages/quince/[slug].astro`: seleccionan el Hero con un `switch`.
- `src/layouts/bodas/Layout.astro` y `src/layouts/quince/Layout.astro`: conectan los routers e inyectan personalización del contenido.

### Conexiones incompletas y reutilización existente

Estado tras reemplazar Glass por Brisa:

- `clasico` y `moderno` de bodas tienen carpetas de estilos, pero no casos de Hero. En XV se ofrecen en el CMS sin carpetas ni mixins propios.
- `src/components/bodas/Hero-brisa.jsx` y `src/components/quince/Hero-brisa.jsx` contienen sus Heroes completos. Cada uno importa `hero.module.scss` desde la carpeta Brisa de su evento, siguiendo el patrón de los otros temas.
- Brisa de XV importa sus propias variables. Elegante de XV todavía importa variables de Base en sus globales; no asumir que todos los temas están aislados del mismo modo.
- `src/components/comunes/Confirmacion.jsx` tiene `themeMap` para `base`, `elegante` y `brisa` de ambos eventos, con fallback a Base. Ambas páginas pasan `themeName`.
- La versión `Esencial` usa `ConfirmacionBasica.jsx` del evento y selecciona estilos Brisa cuando corresponde; conserva Base para los otros temas. `Lux` y `Clasica` usan la confirmación común.
- Glass ya no se ofrece en Keystatic ni tiene carpetas o Heroes. Las páginas traducen el nombre antiguo `glass` a `brisa` al leer MDX remoto, para conservar las invitaciones existentes.
- `src/components/bodas/Pases.jsx` importa el módulo Base directamente. Tener un archivo de pases en otro tema no basta para activarlo.
- Existen imports de variables de bodas en componentes compartidos como `Footer.astro` y `SliderVentana.astro`. Hay que revisar el CSS emitido para evitar cruces entre eventos.

## 2. Definir alcance y crear archivos

Elegir un identificador en minúsculas, sin espacios, por ejemplo `nuevo`, y definir si soportará bodas, XV o ambos. Mantener ese identificador en carpetas, mixins, CMS y selección de componentes.

Estructura recomendada para un tema con estilos propios en ambos eventos:

```text
src/estilos/temas/nuevo/bodas/_variables.scss
src/estilos/temas/nuevo/bodas/globales.scss
src/estilos/temas/nuevo/bodas/hero.module.scss
src/estilos/temas/nuevo/quince/variablesquince.scss
src/estilos/temas/nuevo/quince/globales.scss
src/estilos/temas/nuevo/quince/hero.module.scss
src/components/bodas/Hero-nuevo.jsx
src/components/quince/Hero-nuevo.jsx
```

Crear módulos adicionales cuando el diseño lo requiera, por ejemplo `confirmacion.module.scss`. Se puede reutilizar un componente existente de forma explícita si cubre el diseño; no sobrescribir componentes de otros temas. Al copiar archivos, revisar todos sus imports, recursos y nombres de mixins.

## 3. Paletas, fuentes y personalización

Ambos eventos tienen archivos de paleta `base`, `invierno`, `otono`, `primavera` y `verano` bajo `src/estilos/paletas/<evento>/`. La existencia de un archivo no garantiza que todos los temas lo importen: por ejemplo, las variables Base de bodas no importan Verano.

Los nombres de mixins son distintos según el evento: bodas utiliza `base()`, `invierno()`, etc.; XV utiliza `base-quince()`, `invierno-quince()`, etc. Revisar el archivo de paleta antes de invocarlo.

Ejemplo parcial para las variables del tema nuevo de XV:

```scss
@use '../../../paletas/quince/base' as *;

:root[data-paleta-quince="base"][data-theme="nuevo"] {
  @include base-quince();
}

:root[data-paleta-quince][data-theme="nuevo"] {
  --font-heading: "Playfair Display", serif;
  --font-body: "Outfit", sans-serif;
}
```

Completar imports y selectores para cada paleta soportada, y cargar las fuentes predeterminadas elegidas. Para bodas usar `data-paleta` y los mixins de bodas. Acotar las variables nuevas al evento y tema; no copiar un `:root` global de archivos antiguos.

Usar variables CSS para colores y fuentes personalizables:

```scss
color: var(--texto, var(--primario));
background-color: var(--fondo);
font-family: var(--font-heading), serif;
```

Las variables Sass y mixins siguen siendo útiles para breakpoints y medidas internas. Evitar usarlos para valores que deban cambiar desde Keystatic. Un color fijo o una fuente escrita directamente en un componente no responde al override del MDX. También revisar fondos con imágenes y variables derivadas como `--primario-rgb`: el layout no las recalcula al cambiar `primary`.

### Personalización ya implementada en los layouts

| Campo MDX / Keystatic | Variable CSS |
| --- | --- |
| `theme.colors.primary` | `--primario` |
| `theme.colors.secondary` | `--secundario` |
| `theme.colors.accent` | `--acento` |
| `theme.colors.background` | `--fondo` |
| `theme.colors.text` | `--texto` |
| `theme.typography.heading` | `--font-heading` |
| `theme.typography.body` | `--font-body` |

Los layouts escriben overrides bajo el selector de paleta y tema correspondiente, y agregan enlaces de Google Fonts cuando hay fuentes personalizadas. Con `colors: {}` y `typography: {}` no se inyectan overrides; se conserva lo definido en las hojas de estilos cargadas. Los defaults actuales usan `--font-heading` y `--font-body` directamente; no existe una obligación de usar variables `--font-*-default`.

`personalizar-colores-tipografias.md` contiene ejemplos históricos con `data-paleta` para XV y `:root` sin aislamiento. Para un tema nuevo usar los atributos y selectores descritos aquí y comprobar los layouts actuales.

## 4. Conectar los estilos

El `globales.scss` nuevo debe importar sus propias variables y declarar un mixin distinto, por ejemplo `tema-nuevo()`:

```scss
// Bodas: @use "./variables" as *;
// XV:
@use "./variablesquince" as *;

@mixin tema-nuevo() {
  body {
    color: var(--texto, var(--primario));
    background-color: var(--fondo);
    font-family: var(--font-body), sans-serif;
  }
}
```

En el router del evento, añadir el import y la ejecución. Ejemplo para XV:

```scss
@use "../temas/nuevo/quince/globales" as *;

:root[data-paleta-quince][data-theme="nuevo"] {
  @include tema-nuevo();
}
```

Para bodas cambiar la ruta y el atributo a `data-paleta`. Las reglas emitidas por archivos de variables o módulos fuera del mixin también deben estar aisladas. Dentro de un selector de `:root`, usar `&` si se quiere estilizar el propio elemento raíz: un `html` anidado busca un descendiente `html`, no la raíz.

## 5. Conectar el Hero y conservar sus datos

Importar `Hero-nuevo.jsx` en la página del evento y añadir un caso explícito al `switch (boda.data.theme.name)` o `switch (quince.data.theme.name)`.

Copiar las propiedades reales del Hero más cercano al diseño:

- Ambos eventos pasan `nombres`, `fecha`, `cover`, `lang`, `labels` y usan `client:load`.
- Bodas usa `novios` para `nombres` y pasa `ellaIniciales` y `elIniciales`.
- XV usa `quinceanera` para `nombres` y pasa `initialInvitado={dbInvitado as any}`.

Conservar traducciones, comportamiento de apertura, animaciones y datos de invitados que el nuevo diseño necesite. Los textos traducidos se obtienen mediante `src/i18n/ui`; probar español e inglés. No confiar en el fallback como registro del tema: bodas devuelve `null` para nombres desconocidos, XV devuelve el Hero Base.

Si cambia la estructura de otra sección, crear su variante y conectarla explícitamente en la página o en el componente selector correspondiente.

## 6. Confirmación y otros módulos

Para una confirmación propia de `Lux` / `Clasica`:

1. Crear el módulo de cada evento soportado.
2. Importarlo en `src/components/comunes/Confirmacion.jsx`.
3. Añadir el identificador a `themeMap.bodas` y/o `themeMap.quince`.
4. Asegurar que la página pase `tipo` y `themeName`; ambas páginas ya los pasan.
5. Conservar `initialInvitado`, traducciones y lógica de confirmación existente.

Si el alcance incluye `Esencial`, ampliar también la selección de estilos de `ConfirmacionBasica.jsx` (actualmente Base y Brisa); el mapa de la confirmación común no la afecta. Aplicar el mismo criterio a Pases y cualquier componente con imports fijos de Base.

## 7. Registrar en Keystatic y revisar el esquema

Añadir `{ label: "Nuevo", value: "nuevo" }` a `theme.name.options` solo en las colecciones soportadas de `keystatic.config.ts`, una vez conectados sus estilos y componentes.

Agregar un nombre no requiere ampliar un enum en `src/content.config.ts`, porque actualmente es un string. Si el nuevo diseño introduce campos de contenido, añadirlos tanto al CMS como al esquema de Astro y conectarlos a sus consumidores.

## 8. Crear contenido de prueba válido

Duplicar una invitación MDX válida del evento en `src/content/bodas/` o `src/content/quince/`, conservar los campos obligatorios y cambiar el bloque `theme`:

```yaml
theme:
  name: nuevo
  colors: {}
  typography: {}
```

Es un fragmento del frontmatter YAML delimitado por `---` dentro del MDX, no una invitación completa. Un archivo con solo `version`, `titulo`, `paleta` y `theme` no cumple el esquema: faltan campos obligatorios como portada, fecha y datos del evento.

Hacer otra prueba con colores y fuentes personalizados. Usar recursos existentes válidos o incorporar los nuevos a `public/` y revisar sus rutas.

Brisa incluye `src/content/bodas/brisa-demo.mdx` y `src/content/quince/brisa-demo.mdx`, ambos con `draft: true` y datos ilustrativos. En desarrollo, las páginas leen primero el MDX local mediante `src/lib/localInvitation.ts` y usan recursos locales; en producción conservan la lectura desde GitHub. Esto permite revisar un tema antes de subir los archivos.

### Diseño y recursos de Brisa

- Nombre visible: `Brisa · Playa`; identificador persistido: `brisa`.
- Tipografías predeterminadas: Cormorant Garamond y DM Sans, sustituibles mediante `theme.typography`. `theme.colors.background` y `text` de Keystatic se aplican en Brisa con prioridad en la raíz. Las superficies siguen el fondo elegido; los encabezados conservan `--primario` independientemente de `text`; los iconos y las olas usan `--acento`. Si el fondo es oscuro y no se configura texto, se usa tinta clara. Padres y el itinerario integran sus fondos con `--fondo`; la arena mantiene una capa de color adaptable y el texto hereda la elección de Keystatic.
- Las tres tarjetas de regalos de Brisa comparten `@extend .sombra`, sombra inferior, degradado oscuro superior derivado de `--fondo` y SVG florales de Base.
- Paleta Base costera: azul mar, arena y marfil. Las paletas estacionales siguen disponibles.
- Cada carpeta de evento (`src/estilos/temas/brisa/bodas/` y `quince/`) contiene sus propios `_tokens.scss`, `_coastal.scss`, variables, globales, `hero.module.scss` y `confirmacion.module.scss`. No existe un Hero compartido fuera de esas carpetas.
- Fondo generado y optimizado: `public/temas/brisa/orilla.webp`. Su prompt y procedencia se guardan junto al recurso.
- Apertura mediante un diálogo nativo, compatible con teclado, que conserva `iniciarInvitacion` para el audio y `hero:ready` para las secciones.
- Vista aislada de componentes: `node scripts/preview-brisa.mjs`, después abrir `http://127.0.0.1:4323/.brisa-preview/` y `?evento=quince`. Esta vista comprueba los Heroes y las confirmaciones básicas reales; las secciones de ejemplo no reemplazan la validación de las rutas completas.
- Vista de las páginas reales sin sincronizar las colecciones de Stripe: `node node_modules/astro/bin/astro.mjs dev --config scripts/brisa-astro.config.mjs --host 127.0.0.1 --port 4324`. Abrir `/bodas/brisa-demo` y `/quince/brisa-demo` en ese puerto. Los wrappers importan las páginas originales y sus componentes; este perfil es solo para desarrollo y no modifica el despliegue.

## 9. Validar antes de publicar

Durante implementación ejecutar `npm run dev` y comprobar cada evento soportado. Si el tema solo soporta un evento, verificar también una invitación existente del otro para detectar contaminación de estilos.

- Confirmar el Hero, las secciones y las variantes de confirmación incluidas en el alcance.
- Comprobar la apertura animada del Hero y la emisión única de `hero:ready` al terminar; probar también `prefers-reduced-motion`. Brisa usa GSAP en el Hero de cada evento y conserva `iniciarInvitacion` para el audio.
- Probar ambos estados del switch de asistencia y limitar explícitamente el tamaño de iconos del botón de confirmación. No validar solo la confirmación básica: Lux usa el componente común.
- Probar un invitado VIP con mensaje y otro no VIP. Las páginas pasan `dbInvitado` a `MensajeVip` para renderizar su mensaje desde SSR; sin datos iniciales se conserva la consulta al endpoint cuando el DOM está disponible. Un invitado con `vip: false` no debe mostrarlo.
- Revisar escritorio y móvil, español e inglés, con y sin overrides.
- Confirmar en DevTools `data-theme`, `data-paleta` para bodas y `data-paleta-quince` para XV.
- Revisar estilos computados de títulos y texto, además de las variables en la raíz. Que una variable cambie no garantiza que un componente la use.
- Confirmar la carga de fuentes y recursos en Network.
- Probar una invitación existente con contenido remoto y todas las secciones habilitadas, además de los ejemplos nuevos. En desarrollo, conservar una ruta local de imagen solo si el archivo existe en `public/`; en caso contrario usar GitHub Raw. Recorrer hasta las imágenes con `loading="lazy"` antes de considerarlas fallidas.
- Revisar visibilidad efectiva de itinerario y fotos: además de `opacity`, comprobar `z-index`, colores y animaciones heredadas. Brisa neutraliza esas animaciones en el itinerario y corrige las capas de `#BaseItinerario` y `.solita`.
- Revisar imports cruzados y CSS emitido; no introducir variables de evento/tema en un `:root` global.
- Comprobar que temas anteriores mantienen su apariencia y comportamiento.

Ejecutar `npm run build` al finalizar la implementación. El proyecto también carga colecciones de productos y precios desde Stripe en `src/content.config.ts`; distinguir errores del tema de fallos de credenciales o servicios externos. Documentar cualquier validación pendiente, sin presentar un build fallido como correcto.

En esta revisión, el build completo quedó bloqueado durante `astro sync` por `require is not defined` en `node_modules/qs/lib/index.js`. Los estilos de ambos routers y los módulos Brisa compilan con Sass; las dos páginas modificadas pasan la transformación sintáctica de Astro. Se verificaron los componentes en cinco anchos y las páginas reales de muestra en escritorio y móvil mediante el perfil aislado de Astro, sin desbordamiento horizontal, imágenes visibles faltantes ni errores de JavaScript. Capturas y métricas: `.impeccable/review/brisa/`. La compilación de producción y el envío real de confirmaciones no están validados.

Actualizar esta guía si cambian routers, opciones del CMS, mapas o casos de Hero.

## Checklist de entrega

- [ ] Identificador consistente en carpetas, mixins, CMS y componentes.
- [ ] Solo se ofrece en eventos realmente soportados.
- [ ] Variables propias importadas y selectores aislados por evento/tema.
- [ ] Paletas y fuentes predeterminadas conectadas.
- [ ] Hero conectado con datos, traducciones e hidratación necesarios.
- [ ] Confirmación y módulos con imports fijos revisados para las versiones soportadas.
- [ ] Overrides de colores y fuentes comprobados visualmente.
- [ ] Contenido de prueba válido y recursos accesibles.
- [ ] Revisión móvil/escritorio y regresión de temas existentes.
- [ ] Build correcto o limitación concreta registrada.

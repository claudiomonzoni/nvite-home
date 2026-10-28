# Auditoría tipográfica de Nvitaciones

Fecha: 27 de octubre de 2026. Alcance: revisión del código del sitio comercial, blog, componentes compartidos y muestra de temas de bodas y XV. No se han modificado estilos ni contenido.

## Dictamen

Conviene conservar las fuentes y profesionalizar su composición. Hurme para titulares y Montserrat para lectura ofrecen roles diferenciados. Las invitaciones tienen identidades propias que deben conservarse; una regla global de tracking o interlineado no sirve por igual para Hurme, Cormorant y Sacramento.

La principal debilidad verificable es la falta de una base estable: tamaños raíz por saltos, interlineado heredado absoluto, valores locales sin escala común y carga de fuentes por varias vías.

Esta es una auditoría de implementación, no una aprobación visual. Astro terminó antes de estar listo y el inspector de Chrome falló al arrancar por crashpad. No se obtuvieron capturas, valores computados, mediciones de contraste ni pruebas de zoom. El cargador de contexto de Impeccable también falló; se leyeron directamente las fuentes y el DESIGN.md de Brisa. No se asigna una puntuación visual sin esa evidencia.

## Hallazgos

### P1 — Base tipográfica con saltos entre dispositivos

Evidencia: `src/estilos/globales.scss:34` y mixins de `src/estilos/_variables.scss`.

El tamaño de `html` es 12px por defecto, 16px hasta 479px, 18px entre 1600 y 1990px y 21px desde 1990px. A 1990px coinciden dos media queries; prevalece la posterior. A 480px desaparece la regla móvil y la base baja de 16 a 12px.

Consecuencias calculadas de las declaraciones, antes de posibles overrides:

| Rol | 390px de viewport | 768/1440px | 1600px |
|---|---:|---:|---:|
| 1rem | 16px | 12px | 18px |
| Botón compartido | 16px (override móvil) | 9.6px (0.8rem) | 14.4px |
| Validación del hero | 16px (override móvil) | 9.6px (0.8rem) | 14.4px |

Ubicaciones: `src/components/Btn.astro:37`, `src/components/HeroNuevo.astro` (`#enviados p`). El blog también depende de esta raíz: el contenido tiene `clamp(1rem, 1.35vw, 1.15rem)`, limitado a 13.8px a 1440px cuando la raíz es 12px.

Acción: base relativa estable, inicialmente `100%`, y tamaños por rol. No cambiar solamente la raíz: `rem` también controla márgenes, paddings y componentes, por lo que debe revisarse el efecto en el layout.

### P1 — Interlineado heredado que no escala con cada texto

Evidencia: `src/estilos/globales.scss:41`: `html { line-height: 1.3em; }`. Los párrafos solo reciben `line-height: 1.4` en celular. `h3` y `h4` no tienen interlineado global propio.

El valor en em se calcula en el elemento que lo declara y se hereda como longitud. Con raíz de 12px, la altura heredada es 15.6px incluso cuando un descendiente aumenta su fuente, salvo override. Esto puede apretar títulos de varias líneas y cuerpos locales más grandes.

Acción: altura de línea sin unidad en la base y valores explícitos por rol; punto de partida para cuerpo 1.55–1.65, titulares Hurme 1.05–1.15 y subtítulos 1.2–1.3. Ajustar tras ver los textos reales.

### P2 — Tracking global sin distinguir familia ni tamaño

Evidencia: `src/estilos/globales.scss:40`: `letter-spacing: 0.02em`. `HeroNuevo.astro` no define tracking propio para el titular. FAQ utiliza -0.03em y -0.02em en titulares, junto con etiquetas de 0.04–0.06em.

La base añade aire a todos los descendientes que no la sobrescriben. El criterio cambia entre hero, FAQ y blog. El tracking es espaciado uniforme; el kerning ajusta pares de letras. No hay evidencia de que la ausencia de `font-kerning` explícito sea un defecto: el navegador ya puede aplicarlo automáticamente.

Acción: probar cuerpo en `normal` o 0 y Hurme grande entre -0.01 y -0.025em; validar pares como AV, VA, To y Ta, además de ñ y acentos. Mantener las caligráficas con espaciado natural: no aplicarles tracking negativo general.

### P2 — Carga y nombres de Hurme duplicados; pesos ambiguos

Evidencia: `src/estilos/globales.scss:6–29` declara familia `Hurme` y la variable `--font-hurme`; `astro.config.mjs` configura `Hurme Geometric Sans 4` con la misma variable, y `src/layouts/Layout.astro:72–91` precarga los archivos e incluye `<Font>`. FAQ mezcla `var(--font-hurme)` con `'Hurme'` literal y pide peso 600; ambas configuraciones locales solo declaran 400 y 700.

No se ha probado descarga duplicada: el navegador puede reutilizar los recursos. Sí existen dos autoridades para la misma variable y nombres de familia diferentes. Un peso solicitado sin archivo correspondiente puede resolverse a otro peso disponible o sintetizarse según la selección del navegador. Existen archivos Light y SemiBold en `public/fonts/hurme` que no están declarados en estas configuraciones.

Montserrat se solicita tanto mediante `@import` como mediante un enlace en Layout con una gama distinta. Las invitaciones personalizadas construyen URLs sin especificar pesos en los layouts de bodas y quince.

Acción: elegir una vía de carga por familia, inventariar pesos realmente usados y declarar solo los necesarios. Usar un nombre/token consistente. Comprobar peso y archivo efectivo antes de deshabilitar síntesis; medir fallback y reflow.

### P2 — Titular interior excesivamente cerrado

Evidencia: `src/components/Herointerior.astro:99–122`, usado en la página de invitaciones PDF. `h1` usa 0.8em y en móvil 0.7em, con spans de 2em y 1em y desplazamientos horizontales.

Riesgo: ritmo irregular y choque óptico de líneas con acentos, ascendentes y descendentes. No se afirma solapamiento observado.

Acción: separar los roles del titular y resolver la composición con altura de línea y gap controlados, sin usar interlineado extremo para compensar posiciones.

### P2 — Escala fluida con límites que se neutralizan

Evidencia: `h2` global usa `clamp(2.2em, 2vw, 30vw)`. A 1440px, con contexto de 12px, produce 28.8px; a 1600px entra otra regla con mínimo 3em sobre raíz de 18px, equivalente a 54px. En `src/estilos/temas/brisa/bodas/globales.scss:963` existe `clamp(4rem, 1.8vw, 3rem)`, cuyo mínimo supera al máximo.

La declaración de Brisa pertenece a estilos heredados y puede quedar sobrescrita por `_coastal.scss`; no debe contarse automáticamente como defecto visible del tema final.

Acción: escala de roles con límites coherentes, revisión de la cascada y pruebas justo antes y después de cada breakpoint. Evitar máximos enormes que no expresan un límite editorial útil.

### P2 — Animación por caracteres: riesgo para kerning y conexiones

Evidencia: `src/components/bodas/Encabezados.astro:68` y `src/components/quince/Encabezados.astro:38` contienen SplitType con `types: "chars"` sobre `.titulo`.

Dividir letras en cajas puede alterar pares y conexiones caligráficas. Hace falta confirmar qué nodos selecciona realmente `.titulo` en cada ruta; no se considera demostrado que todos los encabezados queden afectados. No aparece una espera explícita a `document.fonts.ready` en estos scripts.

Acción: comprobar el DOM resultante y preferir animación por bloque o palabra donde la fuente necesite conexiones. Si se conserva división, medir después de cargar fuentes y recomponer cuando cambie el ancho.

### P2 — Temas de invitación con base y pesos propios poco uniformes

Evidencia: `src/estilos/temas/elegante/bodas/globales.scss:21` define el cuerpo con `clamp(10px, 0.9vw, 22px)`; a 1440px equivale a 12.96px. Sus encabezados usan Cormorant, pero `_variables.scss:9` solicita solo 300 mientras el reset pide normal/400 y otros elementos piden negrita. Los tamaños de elementos concretos pueden sobrescribir el tamaño de body.

Acción: inventario por tema y rol, conservando su carácter. No trasladar mecánicamente los valores de la web comercial a invitaciones caligráficas.

## Lo que conviene conservar

- Hurme/Montserrat como pareja principal y la personalidad tipográfica de cada tema.
- Archivos WOFF2 locales de Hurme y `font-display: swap`.
- FAQ con interlineado explícito en preguntas y respuestas; necesita unificar la escala, no reemplazarse.
- Brisa como referencia de organización: `_coastal.scss` fija cuerpo 1rem/1.7, títulos 1.12, lectura de párrafos libres a 65ch y números tabulares en el contador. Estas reglas finales sobrescriben parte de la base heredada.
- Blog con columna limitada y ritmo explícito; hay que corregir primero el tamaño efectivo antes de juzgar su densidad.

## Plan de mejora

### 1. Obtener la referencia visual

Restablecer ejecución local. Capturar home, bodas, XV, PDF, ficha de producto, FAQ, blog y una invitación por tema. Usar 390, 768, 1440 y 1920px; añadir 479/480 y 1599/1600 para comprobar los saltos actuales. Registrar fuentes efectivas, tamaño, peso, tracking, line-height y ancho de texto. Revisar zoom 200%, títulos largos y español/inglés. Esto convierte los riesgos de código en decisiones visuales.

### 2. Consolidar carga de fuentes

Elegir el sistema de Hurme, unificar tokens y solicitudes de Montserrat, y decidir si el rol semibold requiere el archivo real 600. En invitaciones, cargar los pesos que el tema utiliza y deduplicar familias personalizadas. Comprobar texto con red lenta y fuentes bloqueadas.

### 3. Crear roles tipográficos

Propuesta inicial, sujeta a comprobación óptica:

| Rol comercial | Fuente/peso | Tamaño inicial | Interlineado | Tracking |
|---|---|---|---|---|
| Titular principal | Hurme 400 o 700 según composición | 36–64px fluido | 1.05–1.12 | -0.01 a -0.025em |
| Título de sección | Hurme 400/700 | 28–44px | 1.12–1.2 | -0.01 a -0.02em |
| Subtítulo/pregunta | Hurme 600 real o 700 | 20–26px | 1.2–1.3 | 0 a -0.01em |
| Cuerpo | Montserrat 400 | 16–18px | 1.55–1.65 | normal/0 |
| Acción/navegación | Montserrat 500/600 | 14–16px | 1.25–1.4 | normal/0 |
| Texto auxiliar | Montserrat 400/500 | 13–14px | 1.4–1.5 | normal/0 |

Usar unidades relativas al implementar. Los tamaños son puntos de partida, no una nueva dependencia del viewport global. Conservar texto esencial en el rol de cuerpo o acción. Para prosa, comenzar con 55–70ch y comprobar las líneas reales de Montserrat. Separar párrafos con un ritmo consistente de aproximadamente 0.8–1em.

### 4. Aplicar un piloto en la home

Corregir conjuntamente raíz, interlineado, hero, CTA, validación y FAQ. Ajustar espacios afectados por rem en la misma entrega. Comparar antes/después y acordar el carácter de Hurme antes de propagarlo. Mantener contenido, colores e identidad.

### 5. Propagar a interiores y lectura

Aplicar roles al catálogo, PDF, producto, blog y formularios. Resolver las reglas locales que contradigan el sistema, incluidos los dos pesos consecutivos 600/400 del mixin de `Btn.astro`. Revisar contraste sobre fondos e imágenes con medición real y evitar líneas finales aisladas mediante ancho, texto balanceado donde corresponda y ajustes de composición.

### 6. Afinar cada tema de invitación

Revisar Cormorant, Italiana, Sacramento y demás familias en su contexto. Ajustar líneas de nombres largos, acentos, swashes, pesos y fallback; proteger conexiones de las fuentes manuscritas. Conservar las mejoras finales de Brisa y retirar reglas heredadas solo tras comprobar que están inactivas.

### 7. Criterios de cierre

- Cuerpo principal legible con base equivalente a 16px bajo preferencias estándar, sin caída en tablet/escritorio.
- Roles repetidos con valores coherentes y encabezados multilínea sin choques.
- Espaciado natural en manuscritas y pares de letras revisados en titulares grandes.
- Pesos efectivos correspondientes al diseño y una autoridad de carga por familia.
- Sin recortes al ampliar texto ni desbordamientos con nombres largos o traducciones.
- Contraste y lectura comprobados con fuentes cargadas y fallback.
- Capturas antes/después y revisión final de acabado tipográfico.

Orden recomendado: evidencia visual → carga/pesos → base y roles → piloto home → interiores → invitaciones → acabado final. La revisión de acabado corresponde a `impeccable polish`.

## Ajustes implementados — 27 de octubre de 2026

La ejecución local y Chrome se restablecieron después de la auditoría inicial. Se conservaron las familias y el contenido existente.

- Base comercial relativa de 100%, sin los saltos de 12/16/18/21px. Tokens para display, títulos, subtítulos, cuerpo, acciones y auxiliares.
- Interlineado global sin unidad, cuerpo 1.6, titulares 1.12 y tracking de titulares -0.02em. Kerning normal explícito; el cuerpo conserva el espaciado natural.
- Hurme se carga mediante Astro con archivos reales 400, 600 y 700. Se retiraron las declaraciones manuales duplicadas, las precargas manuales del sitio/panel y el import adicional de Montserrat. FAQ utiliza la misma familia/token.
- Hero con columnas que admiten los textos mayores y composición de dos columnas en tablet. Apoyos y CTA legibles, contraste más alto sobre el rosa y validación con interlineado propio.
- Titular interior con alturas 1.08/1.1 y espaciado entre roles. Introducciones con ancho de lectura limitado, sin estrecharlas a media columna en tablet.
- Notas de precios, catálogo, FAQ, pie de página y textos de apoyo ajustados. Blog con columna 68ch, cuerpo 16–18px e interlineado 1.75.
- Ritmo compartido de lectura 1rem/1.65 para invitaciones base/elegante y bodas moderno. Brisa conserva sus reglas editoriales y respeta el tamaño de fuente preferido del navegador.
- Solicitudes de fuentes personalizadas deduplicadas por familia y con pesos conocidos para Cormorant, Montserrat, DM Sans, Old Standard TT, Libre Baskerville, Dancing Script y Lora. Otras familias mantienen su solicitud por defecto.
- Animación de encabezados y mensaje VIP por palabras, para conservar pares y conexiones dentro de cada palabra.
- Hero sin fijación durante el scroll y entrada del video por debajo de la introducción para evitar que oculten texto.

### Evidencia y verificación

| Medida | Antes | Después |
|---|---:|---:|
| Raíz comercial en escritorio habitual | 12px | 16px con preferencias estándar |
| Altura base del cuerpo | 15.6px heredados | 25.6px (1.6) |
| Acción principal de la home | 9.6px | 15px, peso 600 |
| Validación del hero en escritorio | 9.6px | 14px, altura 21px |
| Tracking del titular destacado | +0.02em heredado | -0.02em |
| Interlineado del titular destacado | 1 | 1.08 |
| Cuerpo de muestras de invitación elegante | Dependía del viewport | 16px/26.4px |

Se generaron y revisaron capturas de la home a 1440, 768 y 390px. También se comprobó la home en español e inglés, el titular interior de PDF, un artículo del blog y muestras elegantes de boda y XV en navegador. En las vistas de escritorio comprobadas no se detectó desbordamiento del documento. Se abrió una segunda pregunta del acordeón y se verificó su estado abierto. La invitación de XV abrió correctamente y se pausó su música tras la comprobación.

`npm run build` completó correctamente. Continúan avisos previos sobre recursos del tema clásico, tamaños de bundles y headers en rutas prerenderizadas. `git diff --check` pasó. Las traducciones que ya estaban modificadas al iniciar se conservaron.

Capturas y reportes locales: `.typography-audit/before`, `.typography-audit/after` y `.typography-audit/final` (ignorados por Git). La captura `final/home-es.png` muestra la home en español. Los últimos ajustes puntuales de contraste y ancho de introducción se verificaron en navegador; las planchas del inspector preceden a esos ajustes puntuales.

### Límites y continuidad

El inspector es una guía de estilo estricta, no una certificación: conserva avisos por recursos de la identidad existente (gradientes, sombras, numeración), titulares de varias líneas y cantidad de tamaños locales. No se cambiaron los textos para cumplir un límite artificial de dos líneas. Su aviso sobre el tamaño de h1 mide el contenedor de 16px y no el span destacado, que sí tiene tamaño display. Algunos avisos de cobertura se relacionan con decoraciones o elementos flotantes; no se declara una aprobación global de accesibilidad.

No se probaron dispositivos físicos, todas las combinaciones de paleta/fuente, zoom al 200% ni carga con red lenta/fuentes bloqueadas. El formulario de RSVP de las muestras sin identificador de invitado mostró su mensaje de dirección incompleta; no se enviaron confirmaciones. La mejora queda en el proyecto local y no se publicó.

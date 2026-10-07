# Plan: catálogo por evento, paquete y diseño

Fecha: 7 de octubre de 2026.
Estado: piloto de bodas implementado y verificado en código; validación visual y build completo pendientes por errores de dependencias del entorno. Validación remota de precios pendiente por conexión.

## Objetivo

Presentar invitaciones para bodas y XV años con dos paquetes principales,
Clásica y Lux, y diseños seleccionables dentro de la ficha. Facilitar la
comparación de funciones y la exploración visual sin presentar cada diseño
como un producto independiente. La mejora de conversión es una hipótesis que
debe medirse, no una garantía.

## Decisiones y límites

- Usar «evento», «paquete» y «diseño» como conceptos distintos.
- Reutilizar las URLs de demos existentes. Cambiar un diseño no escribe archivos MD/MDX.
- Mostrar miniaturas de todos los diseños compatibles y cargar una sola demo a la vez.
- Conservar la selección en la URL de la ficha mediante `?tema=...`.
- Mantener el diseño al cambiar de paquete si la combinación existe.
- Mostrar solamente combinaciones verificadas; no prometer todos los diseños en ambos paquetes sin comprobarlo.
- Empezar por bodas y extender el recorrido validado a XV años.
- Mantener Esencial durante esta migración. Su retirada requiere una decisión posterior del usuario.
- Preservar precios, monedas, idiomas y compras existentes.
- No borrar ni desactivar productos de Stripe, ni cambiar precios, como efecto de la reorganización.
- Por instrucción del usuario, todas las nuevas compras Lux usan el producto
  Base de su evento: bodas `prod_Q42WJO0oMaU98G`, XV `prod_QLJkNCXvs8egN9`.
  El diseño se guarda separado en carrito y metadata de la sesión de pago.
- Conservar accesos antiguos con equivalencias explícitas hacia paquete y diseño.
- No crear nuevas demos, rediseñar las invitaciones ni modificar sus datos de invitados dentro de este alcance.
- No publicar, hacer push ni modificar servicios externos automáticamente.

## Evidencia del código actual

- `src/pages/nvitaciones/[slug].astro`: resuelve una ficha por slug, busca su
  configuración en JSON y obtiene producto/precio de las colecciones.
- `src/pages/nvitaciones/nvitaciones.json`: relaciona slug, ID de producto,
  categoría, versión y URLs de muestra en español e inglés.
- `src/components/PreviewModal.astro`: genera un iframe con la URL de muestra.
- `src/components/Pagos/MostrarNvitaciones.astro`: lista productos activos y
  los ordena/filtra por metadatos de Stripe.
- `src/js/cart.ts` y el script de la ficha: el carrito usa IDs de producto.
  Se debe revisar el recorrido completo para conservar el diseño hasta el pedido.
- Lux Base y Lux Elegante tienen IDs de producto distintos actualmente.
  No se asume todavía que pueden consolidarse sin impacto en pagos y pedidos.

## Secuencia de trabajo

### 1. Inventario y contrato de datos

- [x] Verificar archivos de demos, temas, idiomas y diferencias funcionales en código. Render/acceso remoto pendiente en piloto.
- [x] Registrar una matriz de evento × paquete × diseño con URL de demo y producto asociado.
- [x] Revisar carrito, checkout, creación de pedido y personalización posterior disponible en el repositorio.
- [x] Definir el esquema de paquetes/diseños y equivalencias de slugs antiguos.
- [x] Resolver con evidencia si se mantienen IDs existentes por combinación o si
  se usa un ID por paquete y un campo de diseño. Registrar aquí la decisión antes de implementar pagos.

Criterio de aceptación: cada opción visible tiene una demo válida, un precio
correcto y una correspondencia de compra definida; las combinaciones ausentes
están identificadas.

Resultado: ver `CATALOGO-INVENTARIO.md` y `CATALOGO-AUDITORIA.json`.
Se usarán IDs Lux Base por evento, con carrito versionado y lector compatible
con IDs históricos; la selección se registrará en metadata de sesión.
Referencias locales válidas; precios remotos
no confirmados (`StripeConnectionError`). El criterio de precio correcto aún
requiere validar Stripe, particularmente XV Clásica en inglés.

### 2. Ficha piloto de bodas

- [x] Separar los datos comerciales de los datos visuales sin duplicar su fuente de verdad.
- [x] Incorporar selector Clásica/Lux con diferencias y precio visibles.
- [x] Incorporar miniaturas y nombre del diseño seleccionado.
- [x] Reutilizar demos mediante cambio de `src` del iframe y enlace a muestra completa.
- [x] Implementar carga, fallo de demo, selección inválida y combinación incompatible.
- [x] Leer y actualizar `?tema=...`; conservar idioma y parámetros necesarios de cada demo.
- [x] Actualizar todos los botones de compra con la combinación seleccionada.
- [ ] Validar comportamiento real en navegador, escritorio y móvil.

Criterio de aceptación: seleccionar un diseño actualiza la demo sin recargar
toda la ficha; cambiar paquete conserva un diseño compatible. Una combinación
incompatible se comunica y requiere una elección válida. Precio, funciones,
demo y CTA representan siempre la misma selección. Funciona en móvil y teclado.

### 3. Carrito y pedido

- [x] Implementar la estrategia de IDs definida en la fase 1.
- [x] Implementar persistencia de evento, paquete y diseño en la sesión de pago y mostrarla en retorno confirmado.
- [x] Asegurar compatibilidad con carritos anteriores y validación en servidor.
- [ ] Verificar cómo se distinguen combinaciones y se evita perder o sobrescribir selecciones.

Criterio de aceptación: la selección que se compra coincide con la registrada
en el pedido; el servidor valida la combinación y resuelve el precio de su fuente
confiable. Recargar o navegar al checkout no pierde el diseño.

### 4. Catálogo y enlaces existentes

- [x] Mantener la galería de tarjetas por tema en bodas, por instrucción posterior del usuario.
- [x] Llevar cada tarjeta de bodas a la ficha de su paquete con `?tema=...` seleccionado.
- [x] Mantener productos relacionados y enlaces antiguos accesibles por tema.
- [x] Conservar sitemap y rutas antiguas; no consolidarlas por redirección.

Criterio de aceptación: los enlaces antiguos siguen llegando a la oferta y diseño
esperados; la galería permite descubrir temas y la ficha diferencia paquete de diseño.

### 5. Extender a XV años

- [ ] Reutilizar componentes y contrato de datos del piloto.
- [ ] Aplicar exclusivamente las combinaciones verificadas para XV.
- [ ] Validar demos, idiomas, compra y enlaces antiguos de XV.

Criterio de aceptación: bodas y XV comparten el mismo recorrido, con datos y
funciones correctos para cada evento.

### 6. Validación y medición

- [ ] Ejecutar build y verificaciones pertinentes al código modificado.
- [ ] Probar selección por URL, navegación atrás/adelante, cambio de paquete y errores.
- [ ] Revisar escritorio y móvil en una ronda conjunta; corregir y confirmar.
- [ ] Verificar carrito y pedido sin realizar cargos reales.
- [ ] Revisar analítica existente y definir eventos de vista, selección, carrito,
  inicio de checkout y compra con evento/paquete/diseño, sin datos de invitados.
- [ ] Documentar qué medición queda disponible y qué requiere configuración externa.

Métrica principal: compras / visitas a ficha, con una ventana y atribución
consistentes. Métricas de apoyo: avance a carrito y checkout, mezcla de paquetes
y diseños. Los cambios de diseño son exploración, no una conversión por sí mismos.

## Protocolo de continuidad

Leer este documento antes de retomar la implementación. Completar las fases en
orden; marcar tareas solo cuando exista evidencia. Actualizar decisiones,
archivos modificados, validaciones y bloqueos al cerrar cada fase. Si cambia el
alcance acordado, registrar la instrucción del usuario y ajustar el plan antes
de continuar. No tratar este archivo como sustituto de revisar el código actual.

## Registro de avance

- 2026-10-07: plan creado. Árbol de trabajo limpio antes de crear este archivo.
  Próximo paso: fase 1, inventario de combinaciones y recorrido completo de compra.

## Decisiones pendientes

- Validar precios remotos y moneda de XV Clásica en inglés.
- Validar render y acceso de demos en el piloto; no hay demos comerciales de Clásica Elegante ni Clásica/Lux Brisa.
- Nombres comerciales de los diseños (por ejemplo, «Base»).
- Retirada de Esencial: fuera de esta implementación hasta nueva instrucción.

### Avance del 7 de octubre: paso 1

- Matriz de ocho combinaciones (seis principales y dos Esencial), 16 archivos
  de demo presentes y todas las imágenes de detalle presentes.
- Brisa localizado únicamente como Esencial en borrador; no se ofrecerá como Lux/Clásica.
- Propuesta inicial de IDs por combinación sustituida por instrucción del usuario:
  Lux Base por evento, diseño separado y compatibilidad con IDs históricos.
- Sin tabla de pedidos ni webhook encontrado; retorno usa Stripe y formulario Tally.
- Auditoría local ejecutada correctamente. Consulta directa de Stripe falló por conexión.
- Próximo paso: ficha piloto de bodas usando combinaciones existentes; revisar
  Stripe antes de validar el checkout, sin cambiar precios automáticamente.

### Ajuste autorizado: producto único Lux por evento

- Unificar en la aplicación las nuevas compras Lux sobre sus IDs Base existentes.
- Guardar diseño por línea en carrito y en metadata de sesión; no modificar Stripe
  más allá de crear las sesiones normales durante compras autorizadas.
- Migrar carritos antiguos Elegante preservando tema y mostrando precio Base.
- El usuario confirma que Brisa tiene versión Lux en español. Identificar su
  URL y evento antes de conectarla: los archivos locales `brisa-demo.mdx`
  todavía declaran Esencial. No modificar esas demos para simular la versión Lux.
- Decisión registrada; cambio de código pendiente en fases 2/3.

### Implementación del piloto y soporte de compra

- `src/lib/catalog.ts` deriva combinaciones del JSON existente; no duplica demos
  ni precios. Lux se resuelve al producto Base por evento.
- `WeddingSelector.astro` muestra paquetes, miniaturas y una demo. Cambiar diseño
  actualiza iframe/URL/CTAs; cambiar paquete navega a su ficha conservando tema.
  Un tema incompatible bloquea compra hasta elegir un diseño disponible.
- Piloto visual limitado a bodas Clásica/Lux. XV y Esencial conservan su interfaz.
- `cart-state.ts` migra cookies antiguas a líneas versionadas. Cada producto/tema
  conserva cantidad propia; todos los lectores y escritores conocidos se adaptaron.
- Checkout captura selección validada en metadata por línea y no permite cobrar
  en una moneda distinta de la esperada. No se cambiaron productos/precios Stripe.
- Retorno exige sesión completa y pago confirmado; muestra selección desde metadata
  y permite inferir compras históricas. El formulario Tally no se modificó.
- Pruebas: `node node_modules/tsx/dist/cli.mjs scripts/test-catalog-cart.ts` pasó
  migración, separación de diseños, serialización, entradas inválidas y metadata.
- Compilador Astro: archivos modificados parsean correctamente. Revisión aislada
  con `@astrojs/check` y configuración temporal compatible con TypeScript instalado:
  16 archivos, 0 errores; configuración temporal eliminada después del chequeo.
- `astro check` y `astro build` completos fallan en sync por `require is not defined`
  en `qs`; el servidor dev falla por `module is not defined` en React.
  `tsc` estándar rechaza `ignoreDeprecations: 6.0` con TypeScript 5.8 instalado;
  al sobrescribir a 5.0 revela un error en `stripeLoaders.ts` sin cambios en esta tarea.
- No hubo validación visual ni sesiones/cargos de prueba. No marcar completas
  fases 2/3 hasta resolver el entorno y comprobar navegador/pagos.
- Próximo trabajo: recuperar validación del entorno, comprobar piloto y luego
  actualizar agrupación del catálogo (fase 4). No avanzar a nuevos diseños.

### Corrección de disponibilidad: Brisa Lux español

- El usuario confirma una demo Lux Brisa en español. El inventario anterior
  describe solamente lo encontrado en el árbol local; no demuestra ausencia
  de esa demo fuera de él. Pendiente localizar URL y confirmar evento.
- Cuando se identifique, conectarla como diseño Lux español usando el ID Base
  del evento y `design: 'brisa'` en carrito/metadata. No crear producto en Stripe.
- No asumir versión inglesa ni disponibilidad de Brisa Clásica. El selector
  deberá filtrar diseños por idioma además de evento/paquete.
- Actualizar tipos, validación del carrito, etiquetas y pruebas al incorporar
  Brisa; no basta agregar un botón o una URL al iframe.

### Brisa conectada y corrección de correspondencia de temas

- Brisa se registró como diseño Lux español sobre la demo y producto Base de
  cada evento. La interfaz del piloto de bodas muestra su miniatura y guarda
  `design: brisa` en carrito/metadata. No se modificaron MDX ni productos Stripe.
- Regresión detectada: la primera implementación mutaba `fm.theme`, compartido
  por la caché de gray-matter, y Base podía heredar Brisa de otra petición.
- Corrección: `resolveDemoTheme` devuelve un objeto nuevo y resuelve el tema
  explícitamente para los slugs públicos configurados. Todas las URLs de muestra
  llevan `tema=base`, `tema=elegante` o `tema=brisa`; temas de clientes permanecen
  definidos por su contenido. Brisa no se ofrece en inglés ni Clásica.
- Pruebas pasan para secuencias Base → Brisa → Base → Elegante en bodas y XV,
  aislamiento de caché, correspondencia URL/tema y conservación del diseño comprado.
- Validación visual real sigue pendiente; no afirmar completada por pruebas unitarias.

### Cambio de dirección autorizado: conservar galería por temas

- El usuario pidió deshacer la agrupación de `/bodas`: se restauraron el carrusel,
  las tarjetas por tema, la presentación de Esencial y los productos relacionados.
- Se retiraron las miniaturas agrupadas por paquete y las redirecciones nuevas.
  El sitemap se restauró a su estado anterior.
- Cada tarjeta de bodas abre el slug común de su paquete con su tema seleccionado:
  Elegante → `invitacion-bodas-lux?tema=elegante`, Base → `...?tema=base`.
- El selector dentro de la ficha, Brisa, el carrito y metadata se conservan.
- Pruebas de enlaces y regresión de temas/carrito pasan. Esta decisión sustituye
  la tarea original de agrupar visualmente el catálogo por paquete.

### Refinamiento del selector en la ficha

- Opciones de paquete y tema sin bordes, delimitadas con `@extend .sombra`.
- Temas representados solo por su nombre; se retiraron las miniaturas.
- La muestra interactiva utiliza `/marco-cel.webp` como marco superpuesto,
  proporcional y sin interceptar clics o desplazamientos.
- Comprobados compilación Astro/SCSS, vista de escritorio y móvil sin
  desbordamiento horizontal, y cambio de tema conservando URL y selección.

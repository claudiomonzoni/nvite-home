# Spec Técnico — Sistema de Add-ons para Nvitaciones

## Contexto del proyecto

Nvitaciones es una plataforma de invitaciones digitales para eventos (bodas, XV años y futuros eventos). Cada invitación se genera desde un admin, se almacena en un CMS y se sirve como una URL única.

El objetivo de este spec es:
1. Preparar la arquitectura para soportar add-ons de forma escalable
2. Que los add-ons sean agnósticos del tipo de evento
3. Implementar el primer add-on: **Gestor de Mesas**

---

## 1. Arquitectura de Add-ons

### 1.1 Principio base

Cada add-on es un **componente activable por checkbox en el admin.** Si el campo es `true`, el componente se renderiza en la invitación o en el panel del organizador. Si es `false`, se muestra una CTA para activarlo.

### 1.2 Estructura de campos en el CMS por invitación

Agregar un objeto `addons` a cada entrada de invitación:

```json
{
  "addons": {
    "gestor_mesas": false,
    "codigo_qr": false,
    "video_galeria": false,
    "recordatorio_automatico": false,
    "pagina_agradecimiento": false
  }
}
```

Cada campo es `boolean`. Activar desde el admin = `true`.

### 1.3 Lógica de renderizado (agnóstica de evento)

```js
// Ejemplo en Astro / componente genérico
const { addons } = invitacion;

{addons.gestor_mesas && <GestorMesas invitacionId={id} />}
{addons.codigo_qr && <CodigoQR invitacionId={id} />}
{!addons.gestor_mesas && <AddOnCTA nombre="Gestor de Mesas" />}
```

### 1.4 Componente `<AddOnCTA />`

Cuando el add-on está inactivo, mostrar al organizador (no al invitado):

```
┌─────────────────────────────────────────────┐
│ 🪑 Gestor de Mesas                          │
│ Acomoda a tus invitados antes del evento    │
│                                             │
│ [Activar add-on]                            │
└─────────────────────────────────────────────┘
```

> Este componente solo debe ser visible en la vista de administración/organizador, nunca para el invitado.

---

## 2. Add-on: Gestor de Mesas

### 2.1 Descripción

Permite al organizador distribuir sus invitaciones en mesas antes del evento. Opera sobre **pases**, no sobre nombres individuales de asistentes.

### 2.2 Modelo de datos

#### Invitación (ya existe, sin cambios mayores)
```json
{
  "id": "inv_001",
  "nombre": "Familia García",
  "pases_asignados": 4,
  "pases_confirmados": 3,
  "estado": "confirmado" // confirmado | pendiente | negado
}
```

#### Mesa (nueva entidad)
```json
{
  "id": "mesa_001",
  "invitacion_id": "inv_001",
  "nombre": "Mesa 1",
  "capacidad": 10,
  "invitaciones": ["inv_001", "inv_003", "inv_007"]
}
```

#### Resumen de pases (calculado, no almacenado)
```js
const resumen = {
  confirmados: sumaDePassesConfirmados(),
  pendientes: sumaDePasesPendientes(),
  disponibles: pasesLiberadosPorCancelacion(),
  total_estimado: confirmados + pendientes
}
```

### 2.3 Reglas de negocio

- Una invitación solo puede estar asignada a **una mesa a la vez**
- No se bloquea por estado — se pueden acomodar invitaciones pendientes
- Los pases se suman por estado: confirmados vs esperados vs libres
- Al eliminar una mesa con invitaciones asignadas, esas invitaciones regresan al **pool sin asignar**
- Si una invitación cambia de estado después de ser asignada a mesa, la mesa actualiza sus conteos automáticamente

### 2.4 Vista del panel — Resumen global

Mostrar siempre arriba del panel:

```
✅ Pases confirmados:           87
⏳ Pases por confirmar:         34
🔄 Disponibles (cancelaciones): 6
────────────────────────────────
📊 Total estimado:              127
```

### 2.5 Vista del panel — Por mesa

```
Mesa 1  ██████░░░░  6/10
├── Familia García    ✅  3 pases confirmados
├── Ana y Luis        ⏳  2 pases esperados
├── Dr. Martínez      ✅  1 pase confirmado
└── ░░░░ 4 espacios libres

Mesa 2  ████░░░░░░  4/10
└── ...

[+ Agregar mesa]
```

Cada mesa muestra:
- Nombre editable ("Mesa 1", "Mesa Novios", etc.)
- Capacidad definida por el usuario (6, 8, 10 o custom)
- Barra de ocupación visual
- Lista de invitaciones asignadas con estado y pases
- Espacios libres restantes
- Botón eliminar mesa (con advertencia si tiene invitaciones)

### 2.6 Asignación de invitaciones a mesa

**No usar drag & drop** — es problemático en móvil.

Usar dropdown por invitación:

```
Familia García  |  4 pases  |  ✅ confirmado  |  [Asignar a mesa ▼]
Ana y Luis      |  2 pases  |  ⏳ pendiente   |  [Mesa 1 ▼]
Sin asignar     |  ─────────────────────────────────────────────────
Dr. Martínez    |  1 pase   |  ✅ confirmado  |  [Asignar a mesa ▼]
```

Filtros disponibles en esta vista:
- Todos
- Sin asignar
- Por mesa
- Por estado (confirmado / pendiente / negado)

### 2.7 Mensajes contextuales por tiempo (cuenta regresiva)

El sistema detecta cuántos días faltan para el evento y muestra mensajes adaptativos:

```
// Más de 30 días
💡 "Estás acomodando con anticipación.
    Los espacios en gris aún no están confirmados."

// 20 días o menos
⚠️ "Faltan 20 días. Tienes [N] invitados sin confirmar.
    ¿Quieres enviarles un recordatorio?"

// 5 días o menos
🔴 "Tu evento es en 5 días. Estos invitados no han confirmado: [lista]
    ¿Los incluyes o liberas sus espacios?"

// Día del evento
📋 Vista de solo lectura. Resumen final imprimible.
```

### 2.8 Buscador existente — Extensión

El buscador actual (por nombre, filtra por estado) debe agregar una nueva opción de ordenamiento:

```
Ordenar por:
○ Nombre
○ Confirmados primero
○ Sin confirmar primero  
○ Negados
● Por mesa              ← NUEVO
```

Vista "Por mesa" en el buscador:

```
📋 Sin asignar (12 invitaciones — 28 pases)
   Familia Pérez    4 pases  ⏳
   Carlos Ruiz      2 pases  ✅
   ...

🪑 Mesa 1  6/10
   Familia García   3 pases  ✅
   Ana y Luis       2 pases  ⏳
   ...

🪑 Mesa 2  4/10
   ...
```

---

## 3. Consideraciones de UX importantes

- El gestor de mesas es **solo visible para el organizador**, nunca para los invitados
- Debe funcionar bien en **móvil** — el organizador usará esto desde su celular
- Los colores de estado deben ser consistentes en todo el panel:
  - ✅ Verde — confirmado
  - ⏳ Amarillo/gris — pendiente
  - ❌ Rojo — negado
- Nunca bloquear al usuario — siempre permitir acomodar, solo informar el estado real

---

## 4. Add-ons futuros identificados (para arquitectura)

Documentados aquí para que la arquitectura los contemple desde el inicio, aunque no se desarrollen ahora:

| Add-on | Descripción breve |
|--------|------------------|
| `codigo_qr` | QR único por invitación como entrada al evento |
| `video_galeria` | Video generado con las fotos de la galería |
| `recordatorio_automatico` | Reenvío automático a invitados sin confirmar |
| `pagina_agradecimiento` | Página post-evento con mensaje de los anfitriones |

---

## 5. Orden de implementación sugerido

```
PASO 1 — Preparar arquitectura de add-ons
  └── Agregar objeto `addons` al CMS
  └── Crear componente <AddOnCTA /> genérico
  └── Lógica de renderizado condicional en admin

PASO 2 — Gestor de Mesas: modelo de datos
  └── Crear entidad Mesa en el CMS/DB
  └── Relación Mesa ↔ Invitaciones
  └── Cálculo de pases por mesa y resumen global

PASO 3 — Gestor de Mesas: UI del panel
  └── Resumen global de pases (arriba del panel)
  └── Vista por mesa con capacidad y ocupación
  └── Asignación por dropdown
  └── Agregar / eliminar mesas

PASO 4 — Extensión del buscador
  └── Nuevo filtro "Por mesa"
  └── Vista agrupada por mesa en resultados

PASO 5 — Mensajes contextuales
  └── Lógica de cuenta regresiva
  └── Mensajes adaptativos por fase del evento
```

---

## Notas para el agente

- El stack es **Astro + CMS** (especificar cuál CMS al iniciar)
- Los componentes deben ser **agnósticos del tipo de evento** — no referencias a "boda" o "XV" en la lógica, solo en el contenido/copy
- Priorizar funcionamiento en **móvil**
- No usar drag & drop — usar dropdowns para asignación
- Los add-ons se activan desde el **admin interno**, no desde el sitio público

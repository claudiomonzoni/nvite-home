---
description: Idea para generar un modulo de proveedores para nvitaciones
---

# Módulo de Proveedores (MVP) - Panel de Administración

## Resumen
Este módulo complementa el panel actual (Invitados y Mesas) del sitio de invitaciones digitales. Está diseñado para ser **ultra simple** para novios/quinceañeras, pero con la rigurosidad logística necesaria para que un **Organizador Profesional (Wedding Planner)** lo avale y lo use.

---

## 🗄️ 1. Mapa de Datos Base (Estructura Limpia)
- **Identificación:**
  - Nombre del proveedor (texto)
  - Giro / categoría (catálogo cerrado: Música, Banquete, Fotografía, Flores, Locación, etc.)
  - Nombre de contacto + teléfono (vital para llamadas rápidas desde móvil el día del evento)
- **Núcleo financiero (conexión automática):**
  - Costo total (presupuesto acordado)
  - Historial de pagos (lista de sub-registros: monto + fecha)
  - Saldo pendiente (campo calculado: `Costo Total - Suma de Pagos`)
  - Fecha límite de liquidación (para ordenar prioridad visual)
- **Control de avance:**
  - Checklist de tareas / hitos (texto + estado `[ ]` / `[x]`)

---

## 🎨 2. Estrategia de UX (Limpia y Predictiva)

### Formulario “Esconder la complejidad”
- Se muestran solo **4 campos básicos** al crear al proveedor.
- Los datos avanzados de logística (ej. hora de montaje, menús de staff) se esconden bajo un acordeón opcional titulado: **“+ Agregar datos para mi organizador”**.

### Barra de progreso financiero
- Cada proveedor muestra una barra visual que calcula automáticamente el % pagado:
  - `(Suma de Pagos / Costo Total) * 100`
- Alertas claras:
  - Etiqueta verde **“Liquidado”** si saldo = `$0`.
  - Texto en rojo con el saldo pendiente y su fecha límite.

### Checklist inteligente con un clic
Evita que el usuario escriba todo desde cero. Al dar clic en el botón **[ + Agregar Tarea ]**, se despliega un menú con opciones comunes:

1. **Anticipos:** registrar primer anticipo / liquidar saldo final.
2. **Entregas:** entrega de contrato firmado / montaje en el evento / entrega de material final (fotos, etc.).
3. **Personalizado:** texto libre (ej. *“Limpiar la iglesia”*).

- Nota de control: cada tarea inyectada incluye botón de eliminar **[ 🗑️ ]** para mantener flexibilidad.

---

## 🚀 3. El gancho de negocio (valor para el organizador)
Dado que el core del negocio son las **invitaciones digitales**, el organizador amará el sistema por dos funciones clave en el panel de Astro:

- **Enlace “Solo lectura” para el planner:** los novios generan un link para su organizador. Puede ver teléfonos de proveedores, horarios de montaje y estatus de pagos el día del evento desde su móvil **sin registrarse**.
- **Conteo de menús de staff:** el sistema cruza el número de staff anotado en proveedores con los invitados confirmados (RSVP), calculando el total exacto de platillos que se deben pagar al banquete.

---

## 🛠️ Stack tecnológico definido
- **Frontend / UI:** Astro (aprovechando *View Transitions* para fluidez móvil “nativa”).
- **Base de datos:** Turso (SQLite en el borde para velocidad extrema en la carga de datos).
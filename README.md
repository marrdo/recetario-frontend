# Recetario Frontend

Frontend web desarrollado con **Next.js**, diseñado para consumir la API REST del proyecto **Recetario**.

---

## Descripción

Esta aplicación representa la capa visual del proyecto y se divide en:

- Zona pública (recetas, información general)
- Zona privada (panel de usuario según rol)

El frontend está construido con un enfoque moderno, accesible y escalable.

---

## Características

- Framework **Next.js**
- Arquitectura basada en componentes
- Integración con API Laravel mediante fetch / axios
- Preparado para autenticación con tokens (Sanctum)
- Diseño responsive

---

## Tecnologías

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **next-themes** (modo oscuro / claro)
- **clsx + tailwind-merge** (gestión de clases)
- **lucide-react** (iconografía)

## Dependencias adicionales

El proyecto utiliza algunas librerías auxiliares para mejorar la experiencia de desarrollo y la interfaz:

- `next-themes` → gestión de modo oscuro / claro
- `clsx` y `tailwind-merge` → composición de clases CSS
- `lucide-react` → iconos

Opcionalmente, para formularios avanzados:
- `react-hook-form`
- `zod`
- `@hookform/resolvers`

---

## Comunicación con la API

La aplicación consume la API REST desarrollada en Laravel:

[http://localhost:8000/api]


Gestión de autenticación basada en tokens.

---

## Instalación

Debo poner en la isntalacion del proyecto comandos como estos? npm install next-themes clsx tailwind-merge lucide-react
para indicar que también los lleva el proyecto? npm install react-hook-form zod @hookform/resolvers

```bash
npm install
npm run dev
```
La aplicación estará disponible en:
[http://localhost:3000]

---

## Estado del proyecto
- 🟡 En desarrollo
- Integración con backend en progreso

---

## Autor

**Manuel Maldonado**
Proyecto fullstack con Laravel + Next.js

---

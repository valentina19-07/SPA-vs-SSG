# Evidencias de Build y Métricas de Rendimiento — Astro (SSG)
**Estudiante:** Juan Fernando Vargas  
**Correo:** juan.vargas03@uceva.edu.co  
**Proyecto:** UCEVA — Comparativa SPA (Angular) vs SSG (Astro)  
**Rol:** Persona B — Implementación SSG en Astro  

---

## 1. Arquitectura de la Solución Astro (SSG)
Se implementó la aplicación en la carpeta `astro-app/` utilizando el motor de renderizado estático de **Astro v4 / v5**:
- **Generación de Sitios Estáticos (SSG):** A diferencia de Angular SPA que descarga un bundle masivo de JavaScript y renderiza en el cliente, Astro pre-compila cada una de las rutas a archivos HTML y CSS puros durante el tiempo de compilación (`build time`).
- **Arquitectura de Islas (Islands Architecture):** Solo se envía JavaScript al navegador para los elementos interactivos que realmente lo necesitan (como el envío de formularios o actualización dinámica).
- **Vistas implementadas con paridad 1:1 respecto a Angular:**
  1. `/` (Inicio — Resumen comparativo y accesos)
  2. `/productos` (Catálogo con tabla de productos, badges, precio, descripción y formulario interactivo)
  3. `/clientes` (Directorio de clientes, badges de ciudad, enlaces mailto y registro)
  4. `/pedidos` (Listado de órdenes, estados de cantidades y formulario)

---

## 2. Comparativa de Métricas: Angular (SPA) vs Astro (SSG)

| Métrica | Angular (SPA) | Astro (SSG) | Ventaja / Observación |
| :--- | :--- | :--- | :--- |
| **Arquitectura** | Renderizado en Cliente (CSR / SPA) | Generación en Build (SSG) | Astro genera HTML estático puro |
| **Tamaño de Bundle Inicial (JS)** | ~350 KB - 500 KB (Vendor + App) | **0 KB - ~15 KB** | **Astro reduce hasta un 95% el JS inicial** |
| **First Contentful Paint (FCP)** | ~1.2s - 1.8s (depende de CPU cliente) | **~0.2s - 0.4s** | Astro muestra contenido de inmediato |
| **SEO y Accesibilidad** | Requiere ejecución de JS para indexar | Indexable 100% nativo por motores | SSG ideal para indexación y crawlers |
| **Consumo en Servidor** | Servir archivos estáticos | Servir archivos HTML estáticos | Empate (ambos se alojan en CDN) |
| **Interacción Dinámica** | Estado centralizado en memoria SPA | Hidratación selectiva de componentes | Angular destaca en flujos SPA complejos |

---

## 3. Comandos de Ejecución y Build

### Modo Desarrollo:
```bash
cd astro-app
npm install
npm run dev
```
Servidor disponible en: `http://localhost:4321`

### Compilación para Producción (SSG):
```bash
npm run build
```
Genera la carpeta `dist/` con páginas estáticas optimizadas listas para despliegue en cualquier hosting o CDN (Vercel, Netlify, Cloudflare Pages, Nginx).

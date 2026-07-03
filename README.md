# Julio Pertuz — Portafolio / CV

Este es mi sitio personal. Estoy en formación activa como Full Stack Developer
Jr. y armé este portafolio como mi primer proyecto real, sin frameworks, para
practicar HTML, CSS y JavaScript "puros" de punta a punta: estructura,
estilos, animaciones, pruebas y despliegue. Disponible para trabajo remoto.

## Stack

HTML, CSS y JavaScript vanilla (ES Modules), sin bundler ni framework.
Animaciones con [Motion One](https://motion.dev), vendorizado localmente en
`js/vendor/motion.js` para no depender de un bundler.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:8080`.

## Tests

```bash
npm test
```

Pruebas unitarias (`node:test`, sin dependencias externas) para los módulos
de lógica pura: `js/i18n.js`, `js/terminalTyper.js`, `js/navHighlight.js`.

## Actualizar la librería Motion vendorizada

```bash
npm install --save-dev motion@<version>
cp node_modules/motion/dist/motion.js js/vendor/motion.js
```

## Despliegue

Sitio estático, sin build step. Desplegado en Vercel:

1. Importa el repositorio como nuevo proyecto en Vercel.
2. Framework Preset: "Other" (Vercel lo detecta solo al ver `index.html` en la raíz).
3. Build Command: vacío. Output Directory: raíz del proyecto.
4. En *Project Settings → Deployment Protection*, "Vercel Authentication" y "Password Protection" quedan desactivados para que el sitio sea público sin login.

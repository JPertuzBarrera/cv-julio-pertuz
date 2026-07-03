# Julio Pertuz — Portfolio / CV

This is my personal site. I'm in active training as a Full Stack Developer
Jr. and built this portfolio as my first real project, framework-free, to
practice plain HTML, CSS, and JavaScript end to end: structure, styling,
animations, tests, and deployment. Available for remote work.

## Stack

Vanilla HTML, CSS, and JavaScript (ES Modules), no bundler or framework.
Animations with [Motion One](https://motion.dev), vendored locally at
`js/vendor/motion.js` to avoid depending on a bundler.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:8080`.

## Tests

```bash
npm test
```

Unit tests (`node:test`, no external dependencies) for the pure logic
modules: `js/i18n.js`, `js/terminalTyper.js`, `js/navHighlight.js`.

## Updating the vendored Motion library

```bash
npm install --save-dev motion@<version>
cp node_modules/motion/dist/motion.js js/vendor/motion.js
```

## Deployment

Static site, no build step. Deployed on Vercel:

1. Import the repository as a new project in Vercel.
2. Framework Preset: "Other" (Vercel detects it automatically from `index.html` at the root).
3. Build Command: empty. Output Directory: project root.
4. Under *Project Settings → Deployment Protection*, "Vercel Authentication" and "Password Protection" stay disabled so the site is public without login.

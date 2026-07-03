export const translations = {
  es: {
    'a11y.skipLink': 'Saltar al contenido',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Stack',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.toggleLang': 'EN',
    'nav.langToggleAriaLabel': 'Cambiar idioma',
    'nav.menuToggleAriaLabel': 'Abrir menú de navegación',
    'hero.command': 'whoami',
    'hero.name': 'Julio Pertuz',
    'hero.role': 'Full Stack Developer Jr.',
    'hero.badge': 'Disponible para trabajo remoto',
    'hero.tagline': 'Construyo interfaces web con JavaScript, cuido cada detalle y aprendo rápido.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaContact': 'Contáctame',
    'hero.ctaResume': 'Descargar CV',
    'about.heading': 'Sobre mí',
    'about.p1': 'Soy developer full stack en formación activa, enfocado en JavaScript, React y Node.js. Construyo proyectos reales para aprender resolviendo problemas concretos, no solo siguiendo tutoriales.',
    'about.p2': 'Tengo una base sólida de pensamiento analítico y disciplina de trabajo, que aplico ahora a escribir código limpio, entender bien el problema antes de programar y iterar con feedback.',
    'about.p3': 'Estoy en total disponibilidad para una primera oportunidad remota como developer junior o trainee. Aprendo rápido, me adapto a nuevos equipos y herramientas, y me tomo en serio cada línea de código que escribo.',
    'skills.heading': 'Stack técnico',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    'projects.heading': 'Proyectos',
    'projects.project1.title': 'Este portafolio',
    'projects.project1.description': 'Sitio construido con HTML, CSS y JavaScript puro, animado con Motion y desplegado en Vercel. Sin frameworks, sin bundler: cada línea es código que escribí y entiendo.',
    'projects.viewSite': 'Ver sitio',
    'projects.viewCode': 'Ver código',
    'projects.comingSoon.title': 'Próximamente',
    'projects.comingSoon.description': 'Estoy construyendo mi siguiente proyecto. Vuelve pronto para verlo.',
    'contact.heading': 'Contacto',
    'contact.blurb': '¿Buscas sumar a alguien disciplinado, con ganas reales de aprender y crecer como developer? Escríbeme.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Ubicación',
    'contact.locationValue': 'Chía, Colombia (remoto)',
    'footer.availability': 'Disponible para trabajo remoto — junior / sin experiencia formal en tech.',
  },
  en: {
    'a11y.skipLink': 'Skip to content',
    'nav.about': 'About',
    'nav.skills': 'Stack',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.toggleLang': 'ES',
    'nav.langToggleAriaLabel': 'Switch language',
    'nav.menuToggleAriaLabel': 'Open navigation menu',
    'hero.command': 'whoami',
    'hero.name': 'Julio Pertuz',
    'hero.role': 'Full Stack Developer Jr.',
    'hero.badge': 'Open to remote work',
    'hero.tagline': 'I build web interfaces with JavaScript, care about every detail, and learn fast.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': 'Contact me',
    'hero.ctaResume': 'Download CV',
    'about.heading': 'About me',
    'about.p1': "I'm a full stack developer in active training, focused on JavaScript, React, and Node.js. I build real projects to learn by solving concrete problems, not just following tutorials.",
    'about.p2': 'I bring a solid analytical mindset and work discipline, which I now apply to writing clean code, understanding the problem before coding, and iterating on feedback.',
    'about.p3': "I'm fully available for a first remote opportunity as a junior developer or trainee. I learn fast, adapt to new teams and tools, and take every line of code I write seriously.",
    'skills.heading': 'Tech stack',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'projects.heading': 'Projects',
    'projects.project1.title': 'This portfolio',
    'projects.project1.description': 'Built with plain HTML, CSS, and JavaScript, animated with Motion, and deployed on Vercel. No frameworks, no bundler: every line is code I wrote and understand.',
    'projects.viewSite': 'View site',
    'projects.viewCode': 'View code',
    'projects.comingSoon.title': 'Coming soon',
    'projects.comingSoon.description': "I'm building my next project. Check back soon.",
    'contact.heading': 'Contact',
    'contact.blurb': 'Looking for someone disciplined, eager to learn, and ready to grow as a developer? Reach out.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Location',
    'contact.locationValue': 'Chía, Colombia (remote)',
    'footer.availability': 'Open to remote work — junior / no formal tech experience.',
  },
};

export const DEFAULT_LANGUAGE = 'es';
const STORAGE_KEY = 'cv-language';

export function getText(lang, key) {
  const dict = translations[lang] ?? translations[DEFAULT_LANGUAGE];
  return dict[key] ?? key;
}

export function getOtherLanguage(lang) {
  return lang === 'es' ? 'en' : 'es';
}

export function getStoredLanguage(storage, fallback = DEFAULT_LANGUAGE) {
  const stored = storage.getItem(STORAGE_KEY);
  return stored === 'es' || stored === 'en' ? stored : fallback;
}

export function storeLanguage(storage, lang) {
  storage.setItem(STORAGE_KEY, lang);
}

export function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = getText(lang, key);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    el.setAttribute('aria-label', getText(lang, key));
  });
}

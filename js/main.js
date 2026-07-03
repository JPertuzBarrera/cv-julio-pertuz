import {
  DEFAULT_LANGUAGE,
  getOtherLanguage,
  getStoredLanguage,
  storeLanguage,
  applyLanguage,
} from './i18n.js';
import { prefersReducedMotion } from './motionPreference.js';
import { runTypewriter } from './terminalTyper.js';
import { initScrollReveal } from './scrollReveal.js';
import { initNavHighlight } from './navHighlight.js';

function initLanguage() {
  const initialLang = getStoredLanguage(window.localStorage, DEFAULT_LANGUAGE);
  applyLanguage(initialLang);

  const toggleButton = document.querySelector('[data-lang-toggle]');
  toggleButton.addEventListener('click', () => {
    const currentLang = document.documentElement.lang || DEFAULT_LANGUAGE;
    const nextLang = getOtherLanguage(currentLang);
    applyLanguage(nextLang);
    storeLanguage(window.localStorage, nextLang);
  });
}

function initMobileNav() {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-list]');

  const closeNav = () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeNav();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav();
    }
  });

  document.addEventListener('click', (event) => {
    const isOpen = nav.classList.contains('is-open');
    const clickedInsideNav = nav.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);

    if (isOpen && !clickedInsideNav && !clickedToggle) {
      closeNav();
    }
  });
}

function initHeroTypewriter(reducedMotion) {
  const target = document.querySelector('[data-typed-text]');
  const fullText = target.textContent;
  runTypewriter({ element: target, text: fullText, reducedMotion });
}

function initDownloadCv() {
  const button = document.querySelector('[data-download-cv]');
  button.addEventListener('click', () => {
    window.print();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = prefersReducedMotion(
    window.matchMedia('(prefers-reduced-motion: reduce)')
  );

  initLanguage();
  initMobileNav();
  initHeroTypewriter(reducedMotion);
  initScrollReveal({ reducedMotion });
  initNavHighlight();
  initDownloadCv();
});

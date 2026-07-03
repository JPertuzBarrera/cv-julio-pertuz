import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  translations,
  getText,
  getOtherLanguage,
  getStoredLanguage,
  storeLanguage,
  DEFAULT_LANGUAGE,
} from '../js/i18n.js';

test('translations have the same keys in es and en', () => {
  const esKeys = Object.keys(translations.es).sort();
  const enKeys = Object.keys(translations.en).sort();
  assert.deepEqual(esKeys, enKeys);
});

test('getText returns the value for an existing key', () => {
  assert.equal(getText('es', 'nav.about'), 'Sobre mí');
  assert.equal(getText('en', 'nav.about'), 'About');
});

test('getText falls back to the default language for an unknown language', () => {
  assert.equal(getText('fr', 'nav.about'), translations[DEFAULT_LANGUAGE]['nav.about']);
});

test('getOtherLanguage toggles between es and en', () => {
  assert.equal(getOtherLanguage('es'), 'en');
  assert.equal(getOtherLanguage('en'), 'es');
});

test('getStoredLanguage returns the fallback when nothing is stored', () => {
  const fakeStorage = { getItem: () => null };
  assert.equal(getStoredLanguage(fakeStorage), DEFAULT_LANGUAGE);
});

test('getStoredLanguage returns a valid stored language', () => {
  const fakeStorage = { getItem: () => 'en' };
  assert.equal(getStoredLanguage(fakeStorage), 'en');
});

test('getStoredLanguage ignores invalid stored values', () => {
  const fakeStorage = { getItem: () => 'fr' };
  assert.equal(getStoredLanguage(fakeStorage), DEFAULT_LANGUAGE);
});

test('storeLanguage writes the language under the expected key', () => {
  const calls = [];
  const fakeStorage = { setItem: (key, value) => calls.push([key, value]) };
  storeLanguage(fakeStorage, 'en');
  assert.deepEqual(calls, [['cv-language', 'en']]);
});

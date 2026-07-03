import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typedLength, typedSubstring } from '../js/terminalTyper.js';
import { prefersReducedMotion } from '../js/motionPreference.js';

test('typedLength returns 0 for non-positive elapsed time', () => {
  assert.equal(typedLength(0, 10), 0);
  assert.equal(typedLength(-5, 10), 0);
});

test('typedLength scales with elapsed time and speed', () => {
  assert.equal(typedLength(1000, 10), 10);
  assert.equal(typedLength(500, 10), 5);
});

test('typedSubstring never exceeds the full text length', () => {
  assert.equal(typedSubstring('hola', 10000, 10), 'hola');
});

test('typedSubstring returns partial text mid-animation', () => {
  assert.equal(typedSubstring('hola', 200, 10), 'ho');
});

test('prefersReducedMotion reflects the media query match state', () => {
  assert.equal(prefersReducedMotion({ matches: true }), true);
  assert.equal(prefersReducedMotion({ matches: false }), false);
  assert.equal(prefersReducedMotion(null), false);
});

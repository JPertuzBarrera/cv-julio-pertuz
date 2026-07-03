import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getActiveSectionId } from '../js/navHighlight.js';

const sections = [
  { id: 'about', top: 0 },
  { id: 'skills', top: 600 },
  { id: 'projects', top: 1200 },
  { id: 'contact', top: 1800 },
];

test('returns the first section when scroll is at the top', () => {
  assert.equal(getActiveSectionId(sections, 0), 'about');
});

test('returns the section whose top has been passed', () => {
  assert.equal(getActiveSectionId(sections, 650), 'skills');
});

test('returns the last section when scrolled past all of them', () => {
  assert.equal(getActiveSectionId(sections, 5000), 'contact');
});

test('applies the offset before comparing against section tops', () => {
  assert.equal(getActiveSectionId(sections, 550, 100), 'skills');
});

test('returns null for an empty section list', () => {
  assert.equal(getActiveSectionId([], 100), null);
});

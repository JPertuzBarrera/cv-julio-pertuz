export function typedLength(elapsedMs, charsPerSecond) {
  if (elapsedMs <= 0) return 0;
  return Math.floor((elapsedMs / 1000) * charsPerSecond);
}

export function typedSubstring(fullText, elapsedMs, charsPerSecond) {
  const length = Math.min(fullText.length, typedLength(elapsedMs, charsPerSecond));
  return fullText.slice(0, length);
}

export function runTypewriter({
  element,
  text,
  charsPerSecond = 18,
  reducedMotion,
  onFrame = requestAnimationFrame,
  now = () => performance.now(),
}) {
  if (reducedMotion) {
    element.textContent = text;
    return;
  }

  const start = now();
  const totalDurationMs = (text.length / charsPerSecond) * 1000;

  function tick() {
    const elapsed = now() - start;
    element.textContent = typedSubstring(text, elapsed, charsPerSecond);
    if (elapsed < totalDurationMs) {
      onFrame(tick);
    }
  }

  tick();
}

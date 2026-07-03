export function prefersReducedMotion(mediaQueryList) {
  return Boolean(mediaQueryList && mediaQueryList.matches);
}

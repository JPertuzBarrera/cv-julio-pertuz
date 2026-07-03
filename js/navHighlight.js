export function getActiveSectionId(sections, scrollY, offset = 0) {
  if (sections.length === 0) return null;

  let activeId = sections[0].id;
  for (const section of sections) {
    if (scrollY + offset >= section.top) {
      activeId = section.id;
    }
  }
  return activeId;
}

export function initNavHighlight() {
  const navLinks = Array.from(document.querySelectorAll('[data-nav-list] a[href^="#"]'));
  const sections = navLinks.map((link) => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    return { id, top: el.offsetTop };
  });

  function updateActiveLink() {
    const activeId = getActiveSectionId(sections, window.scrollY, 120);
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${activeId}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

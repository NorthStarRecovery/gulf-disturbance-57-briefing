document.querySelector('[data-print]')?.addEventListener('click', () => window.print());

// Printed evidence is visible even when the online detail panel is closed.
let previouslyOpen = [];
let zoomLinks = [];
let printPrepared = false;
window.addEventListener('beforeprint', () => {
  if (printPrepared) return;
  printPrepared = true;
  previouslyOpen = [...document.querySelectorAll('details[open]')];
  document.querySelectorAll('details').forEach(detail => detail.open = true);
  zoomLinks = [...document.querySelectorAll('[data-local-zoom][href]')].map(anchor => [anchor, anchor.getAttribute('href')]);
  zoomLinks.forEach(([anchor]) => anchor.removeAttribute('href'));
});
window.addEventListener('afterprint', () => {
  if (!printPrepared) return;
  document.querySelectorAll('details').forEach(detail => detail.open = previouslyOpen.includes(detail));
  zoomLinks.forEach(([anchor, href]) => anchor.setAttribute('href', href));
  printPrepared = false;
});

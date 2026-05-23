/* ── Page transition + scroll reveal ── shared across case study templates */
const pt = document.getElementById('pt');
if (pt) {
  requestAnimationFrame(() => requestAnimationFrame(() => pt.classList.add('out')));
  document.querySelectorAll('a[href*=".html"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      pt.classList.remove('out');
      setTimeout(() => { window.location.href = a.href; }, 500);
    });
  });
}
const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    const pt = document.getElementById('pt');
    requestAnimationFrame(() => requestAnimationFrame(() => pt.classList.add('out')));
    document.querySelectorAll('a[href*=".html"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        pt.classList.remove('out');
        setTimeout(() => { window.location.href = a.href; }, 500);
      });
    });

    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    /* Animate Lighthouse rings on scroll-in */
    const scores = { 'lh-perf': 100, 'lh-a11y': 98, 'lh-bp': 100, 'lh-seo': 100 };
    const C = 2 * Math.PI * 28; // circumference
    const lhObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          Object.entries(scores).forEach(([id, score]) => {
            const el = document.getElementById(id);
            if (el) {
              const offset = C * (1 - score / 100);
              el.style.strokeDashoffset = offset;
            }
          });
          lhObs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    const grid = document.getElementById('lh-grid');
    if (grid) {
      // Set initial state (full offset = hidden ring)
      Object.keys(scores).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.strokeDashoffset = C;
      });
      lhObs.observe(grid);
    }

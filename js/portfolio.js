    /* ═══════════════════════════════════════════════
       TOOL LOGOS — inline SVG brand icons
    ═══════════════════════════════════════════════ */
    const TOOL_ICONS = {
      'Figma': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="2" width="4" height="4" rx="2" fill="#A259FF"/>
        <rect x="9" y="2" width="4" height="4" rx="2" fill="#F24E1E"/>
        <rect x="3" y="7" width="4" height="4" rx="2" fill="#0ACF83"/>
        <rect x="9" y="7" width="4" height="4" rx="2" fill="#1ABCFE"/>
        <circle cx="5" cy="13" r="2" fill="#FF7262"/>
      </svg>`,
      'Framer': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h10v4.5H8L13 14H8V9.5H3V2z" fill="#0055FF"/>
      </svg>`,
      'React': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="1.5" fill="#61DAFB"/>
        <ellipse cx="8" cy="8" rx="6.5" ry="2.5" stroke="#61DAFB" stroke-width="1" fill="none"/>
        <ellipse cx="8" cy="8" rx="6.5" ry="2.5" stroke="#61DAFB" stroke-width="1" fill="none" transform="rotate(60 8 8)"/>
        <ellipse cx="8" cy="8" rx="6.5" ry="2.5" stroke="#61DAFB" stroke-width="1" fill="none" transform="rotate(120 8 8)"/>
      </svg>`,
      'Python': `<svg class="tool-svg" viewBox="0 0 16 16">
        <path d="M8 1.5c-2.2 0-3.5 1-3.5 2.5V5.5h4V6H4c-1.4 0-2.5 1.1-2.5 2.75C1.5 10.4 2.6 11.5 4 11.5H5V10c0-1.2.9-2 3-2V1.5z" fill="#3776AB"/>
        <path d="M8 14.5c2.2 0 3.5-1 3.5-2.5V10.5H7.5V10h4.5c1.4 0 2.5-1.1 2.5-2.75C14.5 5.6 13.4 4.5 12 4.5H11V6c0 1.2-.9 2-3 2V14.5z" fill="#FFD43B"/>
      </svg>`,
      'JavaScript': `<svg class="tool-svg" viewBox="0 0 16 16">
        <rect width="16" height="16" rx="2.5" fill="#F7DF1E"/>
        <text x="2.5" y="12.5" font-family="Arial,sans-serif" font-size="8.5" font-weight="bold" fill="#222">JS</text>
      </svg>`,
      'SQL': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <ellipse cx="8" cy="4.5" rx="5" ry="2" stroke="#4A90D9" stroke-width="1.2" fill="rgba(74,144,217,0.12)"/>
        <path d="M3 4.5v7c0 1.1 2.24 2 5 2s5-.9 5-2v-7" stroke="#4A90D9" stroke-width="1.2" fill="none"/>
        <path d="M3 8c0 1.1 2.24 2 5 2s5-.9 5-2" stroke="#4A90D9" stroke-width="1" fill="none"/>
      </svg>`,
      'Power BI': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <rect x="1"   y="11" width="2.5" height="4"  rx="0.5" fill="#F2C811"/>
        <rect x="4.5" y="8"  width="2.5" height="7"  rx="0.5" fill="#F2C811"/>
        <rect x="8"   y="5"  width="2.5" height="10" rx="0.5" fill="#F2C811"/>
        <rect x="11.5" y="2" width="2.5" height="13" rx="0.5" fill="#F2C811"/>
      </svg>`,
      'Tableau': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <rect x="7"   y="2"   width="2"   height="12" rx="0.5" fill="#E8762D"/>
        <rect x="2"   y="7"   width="12"  height="2"  rx="0.5" fill="#E8762D"/>
        <rect x="4.5" y="4.5" width="1.5" height="7"  rx="0.5" fill="#C72037" opacity="0.75"/>
        <rect x="10"  y="4.5" width="1.5" height="7"  rx="0.5" fill="#C72037" opacity="0.75"/>
      </svg>`,
      'Pandas': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <rect x="3.5" y="2" width="3" height="12" rx="1.5" fill="#150458"/>
        <rect x="9.5" y="2" width="3" height="12" rx="1.5" fill="#E70488"/>
        <rect x="3.5" y="6" width="9"  height="2.5" rx="1"   fill="#150458" opacity="0.4"/>
      </svg>`,
      'TensorFlow': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <path d="M8 2L2 5.5V9L8 5.5 14 9V5.5z" fill="#FF6F00"/>
        <path d="M8 5.5L2 9v3.5L8 9l6 3.5V9z" fill="#FF8F00" opacity="0.85"/>
        <path d="M5 9v5l3-1.5V7.5z" fill="#FFA000"/>
      </svg>`,
      'D3.js': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h7c2.76 0 5 2.24 5 5s-2.24 5-5 5H2" stroke="#F9A03C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M2 8h5c1.66 0 3 1.34 3 3" stroke="#F9A03C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </svg>`,
      'NumPy': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <path d="M2 4l6-2 6 2-6 2z" fill="#4DABCF"/>
        <path d="M2 4v4l6 2V6z" fill="#4D77CF"/>
        <path d="M14 4v4l-6 2V6z" fill="#4DABCF" opacity="0.75"/>
      </svg>`,
      'UX Research': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="4.5" stroke="#D4537E" stroke-width="1.2" fill="rgba(212,83,126,0.08)"/>
        <path d="M10.5 10.5L14 14" stroke="#D4537E" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="7" cy="7" r="1.5" fill="#D4537E" opacity="0.5"/>
      </svg>`,
      'Design Systems': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" stroke="#3B6D11" stroke-width="1.2" fill="rgba(59,109,17,0.08)"/>
        <rect x="9.5" y="1" width="5.5" height="5.5" rx="1.5" stroke="#3B6D11" stroke-width="1.2" fill="rgba(59,109,17,0.08)"/>
        <rect x="1" y="9.5" width="5.5" height="5.5" rx="1.5" stroke="#3B6D11" stroke-width="1.2" fill="rgba(59,109,17,0.08)"/>
        <rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1.5" stroke="#3B6D11" stroke-width="1.2" fill="rgba(59,109,17,0.08)"/>
      </svg>`,
      'Prototyping': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="2.5" width="13" height="9" rx="2" stroke="#8B6B09" stroke-width="1.2" fill="rgba(139,107,9,0.08)"/>
        <path d="M5 14.5h6M8 11.5v3" stroke="#8B6B09" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="8" cy="7" r="2" fill="rgba(139,107,9,0.2)" stroke="#8B6B09" stroke-width="1"/>
      </svg>`,
      'Usability Testing': `<svg class="tool-svg" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5.5" r="2.5" stroke="#1A5FAB" stroke-width="1.2" fill="rgba(26,95,171,0.08)"/>
        <path d="M3 13.5c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#1A5FAB" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M11 7l1.5 1.5L14 7" stroke="#1A5FAB" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    };

    /* ═══════════════════════════════════════════════
       HERO TOOL PILLS with logos
    ═══════════════════════════════════════════════ */
    const heroToolsList = ['Figma', 'Framer', 'React', 'Python', 'SQL', 'Power BI'];
    const heroToolsEl = document.getElementById('hero-tools');
    heroToolsList.forEach(t => {
      const pill = document.createElement('span');
      pill.className = 'tool-pill';
      pill.innerHTML = (TOOL_ICONS[t] || '') + ' ' + t;
      heroToolsEl.appendChild(pill);
    });

    /* ═══════════════════════════════════════════════
       ABOUT SKILLS with logos
    ═══════════════════════════════════════════════ */
    const aboutSkillsList = ['Figma', 'Framer', 'Python', 'SQL', 'React', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'UX Research', 'Design Systems', 'Prototyping'];
    const aboutSkillsEl = document.getElementById('about-skills');
    aboutSkillsList.forEach(s => {
      const pill = document.createElement('span');
      pill.className = 'skill-pill';
      pill.innerHTML = (TOOL_ICONS[s] || '') + ' ' + s;
      aboutSkillsEl.appendChild(pill);
    });

    /* ═══════════════════════════════════════════════
       MARQUEE STRIP with logos
    ═══════════════════════════════════════════════ */
    const marqueeItems = ['Figma','Framer','React','Python','SQL','Power BI','JavaScript','Tableau','UX Research','Design Systems','Prototyping','NumPy','TensorFlow','D3.js','Pandas','Usability Testing'];
    function buildMarquee(id) {
      const el = document.getElementById(id);
      el.innerHTML = [...marqueeItems, ...marqueeItems].map(item =>
        `<div class="marquee-item">
          <span class="marquee-item-inner">
            ${TOOL_ICONS[item] || ''}
            <span>${item}</span>
          </span>
          <span class="marquee-dot"></span>
        </div>`
      ).join('');
    }
    buildMarquee('marquee-a');
    buildMarquee('marquee-b');

    /* ═══════════════════════════════════════════════
       PROJECTS
    ═══════════════════════════════════════════════ */
    const projects = [
      { cat:'design', icon:'🏎️', title:'APEX — F1 Experience App',              desc:'End-to-end iOS app design for Formula 1 fans. 23 screens, 5 user flows, full design system.', stack:['Figma','iOS','Prototyping'], page:'case-study-apex.html',  cover:'cover-apex', coverImg:'images/apex/cover-apex.png' },
      { cat:'design', icon:'🦌', title:'CERFS — Deer Gallery',                  desc:'Swiss-style editorial web design for a nature photography gallery. One long-scroll frame, horizontal photo strip, gold accents, and poetic typography.', stack:['Figma','Swiss Design','Editorial'], page:'case-study-deer.html', cover:'cover-deer', coverImg:'images/deer/thumbnail.jpg' },
     // { cat:'design', icon:'🎨', title:'Product Dashboard Design',            desc:'UX redesign improving user flow and key metrics visibility for a data-heavy product.', stack:['Figma','User Research','Prototyping'], page:'case-study-uxui.html',    cover:'cover-design' },
     // { cat:'design', icon:'📱', title:'Mobile App Concept',                  desc:'End-to-end mobile design from wireframe to high-fidelity interactive prototype.',       stack:['Figma','Motion Design','Design System'], page:'case-study-mobile.html',  cover:'cover-design' },
      //{ cat:'design', icon:'✏️', title:'Brand Identity System',               desc:'Visual identity with design tokens and a full component library for a startup.',        stack:['Figma','Illustrator','Design Tokens'], page:'case-study-brand.html',   cover:'cover-design' },
     // { cat:'dev',    icon:'⚡', title:'Portfolio Website',                   desc:'Personal portfolio with glassmorphism design, fluid responsive layout, and animations.', stack:['Framer','JavaScript','CSS'], page:'case-study-dev.html',     cover:'cover-dev' },
      //{ cat:'dev',    icon:'🌐', title:'Data-Driven Web App',                 desc:'Interactive web application built to visualise and explore financial datasets live.',    stack:['JavaScript','D3.js','Node.js'], page:'case-study-webapp.html',  cover:'cover-dev' },
     // { cat:'ai',     icon:'🤖', title:'IBM AI Engineering Projects',         desc:'Machine learning models and Python-based AI systems from IBM certification.',            stack:['Python','Scikit-learn','TensorFlow'], page:'case-study-data.html',    cover:'cover-ai' },
     // { cat:'finance',icon:'💰', title:'Personal Finance Intelligence System',desc:'Tracks spending across 10+ categories. Identified 15–25% savings via predictive analysis.', stack:['Python','SQL','Power BI','Pandas'], page:'case-study-finance.html', cover:'cover-finance' },
     // { cat:'finance',icon:'📊', title:'Business Intelligence Dashboard',     desc:'Analysed 50K+ transactional records. Reduced manual reporting by ~40%.',               stack:['SQL','Power BI','Tableau'], page:'case-study-finance.html',  cover:'cover-finance' }
    ];

    const tagClass = c => ({ design:'tag-design', dev:'tag-dev', ai:'tag-ai', finance:'tag-finance' }[c]);
    const tagLabel = c => ({ design:'Design', dev:'Dev', ai:'AI & Data', finance:'Finance' }[c]);
    let currentProjects = projects;

    function renderCards() {
      const grid  = document.getElementById('cards-grid');
      const count = document.getElementById('proj-count');
      count.textContent = currentProjects.length + ' project' + (currentProjects.length !== 1 ? 's' : '');
      const heroCount = document.getElementById('hc-proj-count');
      if (heroCount) heroCount.textContent = projects.length + '+';
      grid.innerHTML = currentProjects.map((p, i) => `
        <a class="work-card glass reveal reveal-delay-${(i % 3) + 1}" href="${p.page}">
          <div class="card-cover ${p.cover}" ${p.coverImg ? `style="background-image:url('${p.coverImg}');background-size:cover;background-position:center;font-size:0;"` : ''}>
            ${p.coverImg ? '' : p.icon}
            <div class="card-arrow">↗</div>
          </div>
          <div class="card-top">
            <span class="card-tag ${tagClass(p.cat)}">${tagLabel(p.cat)}</span>
            <div class="card-title">${p.title}</div>
            <div class="card-desc">${p.desc}</div>
          </div>
          <div class="card-foot">${p.stack.join(' · ')}</div>
        </a>
      `).join('');
      document.querySelectorAll('#cards-grid .reveal').forEach(el => observer.observe(el));
      addCardTilt();
    }

    function filterProjects(cat, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProjects = cat === 'all' ? projects : projects.filter(p => p.cat === cat);
      renderCards();
    }

    /* ═══════════════════════════════════════════════
       CYCLING TEXT
    ═══════════════════════════════════════════════ */
    const cycleWords = ['code.', 'data.', 'users.', 'purpose.', 'systems.'];
    let cycleIdx = 0;
    const cycleEl = document.getElementById('cycle-word');
    setInterval(() => {
      cycleEl.classList.remove('cycle-in');
      cycleEl.classList.add('cycle-out');
      setTimeout(() => {
        cycleIdx = (cycleIdx + 1) % cycleWords.length;
        cycleEl.textContent = cycleWords[cycleIdx];
        cycleEl.classList.remove('cycle-out');
        cycleEl.classList.add('cycle-in');
      }, 340);
    }, 2800);

    /* ═══════════════════════════════════════════════
       SCROLL REVEAL
    ═══════════════════════════════════════════════ */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          const counter = e.target.querySelector('[data-count]');
          if (counter && !counter.dataset.animated) {
            counter.dataset.animated = '1';
            animateCounter(counter, counter.dataset.count);
          }
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible')); }, 100);
    });

    /* ═══════════════════════════════════════════════
       STAT COUNTER
    ═══════════════════════════════════════════════ */
    function animateCounter(el, target) {
      const isK   = target.includes('K');
      const isPct = target.includes('%');
      const end   = parseFloat(target.replace(/[^0-9.]/g,''));
      const dur   = 1400;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val  = Math.round(ease * end);
        el.textContent = isK ? val + 'K+' : isPct ? val + '%' : val;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      })(start);
    }

    /* ═══════════════════════════════════════════════
       3D TILT — Hero card
    ═══════════════════════════════════════════════ */
    const tiltCard = document.getElementById('hero-tilt-card');
    if (tiltCard) {
      tiltCard.addEventListener('mousemove', e => {
        const r = tiltCard.getBoundingClientRect();
        const x = (e.clientX - r.left)  / r.width  - 0.5;
        const y = (e.clientY - r.top)   / r.height - 0.5;
        tiltCard.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`;
        tiltCard.style.boxShadow = `${-x * 24}px ${-y * 18}px 48px rgba(212,83,126,0.13), 0 24px 64px rgba(28,28,24,0.07)`;
      });
      tiltCard.addEventListener('mouseleave', () => {
        tiltCard.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)';
        tiltCard.style.boxShadow = '';
        tiltCard.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease';
        setTimeout(() => { tiltCard.style.transition = ''; }, 600);
      });
    }

    /* ═══════════════════════════════════════════════
       3D TILT — Work cards
    ═══════════════════════════════════════════════ */
    function addCardTilt() {
      document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left)  / r.width  - 0.5;
          const y = (e.clientY - r.top)   / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-5px)`;
          card.style.boxShadow = `${-x * 12}px ${-y * 10}px 28px rgba(28,28,24,0.09)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
          card.style.boxShadow = '';
          card.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease';
          setTimeout(() => { card.style.transition = ''; }, 520);
        });
      });
    }

    /* ═══════════════════════════════════════════════
       MAGNETIC BUTTONS
    ═══════════════════════════════════════════════ */
    function initMagneticButtons() {
      document.querySelectorAll('.mag-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width  / 2;
          const y = e.clientY - r.top  - r.height / 2;
          btn.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = '';
          btn.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
          setTimeout(() => { btn.style.transition = ''; }, 520);
        });
      });
    }
    initMagneticButtons();

    /* ═══════════════════════════════════════════════
       PAGE TRANSITION
    ═══════════════════════════════════════════════ */
    const pt = document.getElementById('page-transition');
    if (pt) {
      // Fade in on load
      requestAnimationFrame(() => requestAnimationFrame(() => pt.classList.add('fade-out')));

      // Fade out → navigate when clicking case study links
      document.addEventListener('click', e => {
        const link = e.target.closest('a[href*="case-study"]');
        if (link) {
          e.preventDefault();
          pt.classList.remove('fade-out');
          setTimeout(() => { window.location.href = link.getAttribute('href'); }, 540);
        }
      });
    }

    /* ═══════════════════════════════════════════════
       CONTACT
    ═══════════════════════════════════════════════ */
    function handleSubmit(e) {
      e.preventDefault();
      alert('Message sent! Connect Formspree or Netlify Forms to receive emails.');
      e.target.reset();
    }

    renderCards();

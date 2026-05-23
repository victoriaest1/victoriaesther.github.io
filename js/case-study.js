    /* ══ ALL PROJECT DATA ══════════════════════════════════════════════ */
    const allProjects = [

      /* 0 — Product Dashboard Design */
      {
        cat: 'design', accent: '#D4537E', accentSoft: 'rgba(212,83,126,0.08)', accentBorder: 'rgba(212,83,126,0.20)',
        coverGradient: 'linear-gradient(135deg,rgba(212,83,126,0.10),rgba(244,192,209,0.22))',
        icon: '🎨', catLabel: 'Design', role: 'UX Designer', tools: 'Figma · User Research · Prototyping', timeline: '3 Weeks', platform: 'Web App',
        title: 'Product Dashboard Design',
        titleEmphasis: 'Dashboard',
        tagline: 'A complete UX redesign of a data-heavy analytics dashboard — turning an overwhelming interface into a clear, intuitive experience that reduced task completion time by 62%.',
        stats: [{ num: '62%', label: 'Faster task completion' }, { num: '4.7/5', label: 'User satisfaction' }, { num: '3wk', label: 'Brief to delivery' }],
        challenge: { title: 'A dashboard where everything competed for attention', body: ['The existing product had grown organically over two years. Every team had added their own metrics until the dashboard held 40+ data points with no visual hierarchy — everything the same size, the same weight, the same priority. Users were spending an average of 8 minutes per session just locating the three KPIs they actually cared about.', 'The brief was clear: redesign the experience so users can surface critical data within 90 seconds, while still preserving access to full data depth for power users.'], quote: '"I open this dashboard every morning and it stresses me out. I can never find what I need without clicking around."' },
        process: ['Discover','Define','Design','Test','Deliver'],
        processDetail: ['User interviews, heatmaps','Jobs-to-be-done, card sorting','Wireframes, hi-fi Figma','5 usability sessions','Dev handoff, specs'],
        processActive: 2,
        solution: { title: 'Progressive disclosure, at speed', body: ['The redesigned dashboard introduces a three-layer information architecture: a persistent top strip for the 3 pinned critical KPIs, a main area with colour-coded metric clusters, and a collapsible deep-dive panel for power users.', 'Each colour cluster maps to a job-to-be-done — not a product category. A new "Daily Digest" view shows only anomalies and alerts, reducing noise by 80%.'] },
        outcomes: [{ num: '62%', label: 'Faster task completion vs. baseline' }, { num: '4.7/5', label: 'Avg. user satisfaction (SUS)' }, { num: '80%', label: 'Reduction in alert noise' }],
        learnings: ['Involve engineers earlier — a filter component had a performance implication nobody caught until handoff.', 'Test at lower fidelity — I spent too long polishing hi-fi before testing. Core layout insights would have surfaced from wireframes.', 'Onboarding matters — users loved the layout but needed a tooltip system to discover the pinning feature.'],
        next: { idx: 1, title: 'Mobile App Concept' }
      },

      /* 1 — Mobile App Concept */
      {
        cat: 'design', accent: '#D4537E', accentSoft: 'rgba(212,83,126,0.08)', accentBorder: 'rgba(212,83,126,0.20)',
        coverGradient: 'linear-gradient(135deg,rgba(212,83,126,0.10),rgba(244,192,209,0.22))',
        icon: '📱', catLabel: 'Design', role: 'UX/UI Designer', tools: 'Figma · Motion Design · Design System', timeline: '4 Weeks', platform: 'iOS & Android',
        title: 'Mobile App Concept',
        titleEmphasis: 'App',
        tagline: 'End-to-end mobile design for a personal finance app — from first wireframe to a high-fidelity interactive prototype spanning 24 screens and a full design system.',
        stats: [{ num: '24', label: 'Screens designed' }, { num: '1', label: 'Full design system' }, { num: '0', label: 'Handoff issues' }],
        challenge: { title: 'Making finance feel human', body: ['Most finance apps feel clinical, intimidating, or outright boring. The brief was to design something people would actually want to open every day — an app that makes tracking money feel like a habit worth keeping, not a chore.', 'The core tension: data-dense enough to be useful, light enough to feel approachable.'], quote: '"I tried three budgeting apps and deleted them all. They made me feel judged."' },
        process: ['Research','Concept','Design','Prototype','Polish'],
        processDetail: ['Competitor audit, user interviews','Card concepts, tone exploration','24-screen user flow in Figma','Figma interactive prototype','Motion, micro-interactions'],
        processActive: 3,
        solution: { title: 'Warm cards, clear hierarchy, delightful motion', body: ['A card-based interface with a warm palette keeps data readable without feeling like a spreadsheet. Every interaction has a micro-animation — spend categories expand with a spring, monthly summaries slide in on scroll, and the onboarding flow uses a single-question-per-screen pattern to reduce cognitive load.', 'The design system was built mobile-first with 80+ components — every spacing value, colour, and text style tokenised so a developer could implement it without guesswork.'] },
        outcomes: [{ num: '24', label: 'Screens in final prototype' }, { num: '80+', label: 'Design system components' }, { num: '4.9/5', label: 'Prototype test rating' }],
        learnings: ['Motion design takes longer than expected — budget double the time.', 'Users wanted a quick-add gesture (swipe from edge) that wasn\'t in the original spec. Testing revealed it early enough to include.', 'Single source of truth in design tokens saved hours when the brand colour shifted slightly mid-project.'],
        next: { idx: 2, title: 'Brand Identity System' }
      },

      /* 2 — Brand Identity System */
      {
        cat: 'design', accent: '#D4537E', accentSoft: 'rgba(212,83,126,0.08)', accentBorder: 'rgba(212,83,126,0.20)',
        coverGradient: 'linear-gradient(135deg,rgba(212,83,126,0.08),rgba(244,192,209,0.20))',
        icon: '✏️', catLabel: 'Design', role: 'Brand Designer', tools: 'Figma · Illustrator · Design Tokens', timeline: '2 Weeks', platform: 'Multi-channel',
        title: 'Brand Identity System',
        titleEmphasis: 'Identity',
        tagline: 'A full visual identity built from scratch for a pre-seed startup — logo, colour system, typography, and a 120-component library, delivered in two weeks.',
        stats: [{ num: '120+', label: 'Components built' }, { num: '2wk', label: 'Delivery time' }, { num: '∞', label: 'Token scalability' }],
        challenge: { title: 'A full brand in 14 days', body: ['A pre-seed startup was approaching their first investor demo with no visual identity — just a product name and a deck. They needed logo, colour, type, and UI components in two weeks or the demo would look amateurish.', 'The challenge was not just speed, but longevity: the brand needed to feel considered and scalable, not like a rushed template.'], quote: '"We need to look like we belong in the room."' },
        process: ['Discovery','Concepts','Refine','Build','Deliver'],
        processDetail: ['Brand values, competitor landscape','3 visual directions','Client feedback, one selected','Component library, tokens','Brand guidelines PDF'],
        processActive: 4,
        solution: { title: 'Token-first, endlessly flexible', body: ['Every visual decision — colour, spacing, type scale, border radius — was built as a design token first, then applied to components. This means the entire brand can be recoloured or restyled in under an hour if the startup pivots.', 'The component library was built in Figma with auto-layout throughout, so every component resizes correctly regardless of content length.'] },
        outcomes: [{ num: '120+', label: 'Figma components' }, { num: '14d', label: 'Brand zero to delivery' }, { num: '3', label: 'Visual directions explored' }],
        learnings: ['Stakeholder alignment on the first concept direction is everything. Getting a clear "yes" or "no" on direction saves endless revision cycles.', 'Build the dark mode token set from the start, even if it\'s not needed immediately — retrofitting is painful.'],
        next: { idx: 3, title: 'Portfolio Website' }
      },

      /* 3 — Portfolio Website */
      {
        cat: 'dev', accent: '#3B6D11', accentSoft: 'rgba(59,109,17,0.07)', accentBorder: 'rgba(151,196,89,0.25)',
        coverGradient: 'linear-gradient(135deg,rgba(151,196,89,0.10),rgba(192,221,151,0.22))',
        icon: '⚡', catLabel: 'Development', role: 'Designer + Developer', tools: 'Framer · JavaScript · CSS', timeline: '2 Weeks', platform: 'Web',
        title: 'Portfolio Website',
        titleEmphasis: 'Portfolio',
        tagline: 'Designed and coded from scratch — glassmorphism cards, fluid clamp()-based typography, scroll-triggered animations, and a warm cream palette with drifting background blobs.',
        stats: [{ num: '100', label: 'Lighthouse performance' }, { num: '0', label: 'Templates used' }, { num: '1', label: 'Unique vibe' }],
        challenge: { title: 'A portfolio that proves the skills it claims', body: ['A portfolio for a UX/UI designer who also codes has to actually demonstrate both skills — not just claim them. A templated Squarespace site would undermine the entire message.', 'The goal: build something that makes a recruiter stop scrolling and think "this person knows what they\'re doing".'], quote: '"Show, don\'t tell. The portfolio itself is your first piece of work."' },
        process: ['Concept','Design','Code','Refine','Ship'],
        processDetail: ['Direction, palette, layout','Full Figma mockup','HTML/CSS/JS from scratch','Responsive passes, performance','Framer deployment'],
        processActive: 4,
        solution: { title: 'Glassmorphism + fluid type + micro-interactions', body: ['The warm cream (#F7F2EA) background with drifting colour blobs gives depth without darkness. Glassmorphism cards use real backdrop-filter blur. Typography scales fluidly with clamp() — no breakpoint jumps.', 'Three "wow" details that elevate it: a cycling word in the hero headline, a scrolling skills marquee, and stat counters that animate on scroll. Each one takes 30 seconds to notice and 3 seconds to delight.'] },
        outcomes: [{ num: '100', label: 'Lighthouse perf score' }, { num: '<1s', label: 'Initial paint time' }, { num: '8', label: 'Linked case studies' }],
        learnings: ['clamp() for fluid type is non-negotiable — pixel breakpoints always feel janky in comparison.', 'Glassmorphism looks great on light backgrounds only when there are coloured blobs beneath the glass — without them, it just looks like a white card.'],
        next: { idx: 4, title: 'Data-Driven Web App' }
      },

      /* 4 — Data-Driven Web App */
      {
        cat: 'dev', accent: '#3B6D11', accentSoft: 'rgba(59,109,17,0.07)', accentBorder: 'rgba(151,196,89,0.25)',
        coverGradient: 'linear-gradient(135deg,rgba(151,196,89,0.10),rgba(192,221,151,0.22))',
        icon: '🌐', catLabel: 'Development', role: 'Frontend Developer', tools: 'JavaScript · D3.js · Node.js', timeline: '5 Weeks', platform: 'Web App',
        title: 'Data-Driven Web App',
        titleEmphasis: 'Web App',
        tagline: 'An interactive browser-based tool that turns raw financial CSVs into live, explorable charts — no SQL, no Excel, no friction.',
        stats: [{ num: '10+', label: 'Chart types' }, { num: '<2s', label: 'CSV to chart' }, { num: '0', label: 'External dependencies' }],
        challenge: { title: 'Raw data is useless without a lens', body: ['Finance teams export CSVs constantly. Most of those files sit unopened because non-analysts can\'t make sense of them without pivot tables and SQL. The goal was to build something anyone could use to explore financial data instantly.', 'Constraint: no backend, no accounts, no servers. Everything runs in the browser for privacy.'], quote: '"Can you just make it so I can see my data without opening Excel?"' },
        process: ['Discovery','Architecture','Build','Test','Deploy'],
        processDetail: ['User needs, data formats','Client-side only plan','D3.js charts, CSV parser','Cross-browser, edge cases','Static hosting, zero deps'],
        processActive: 4,
        solution: { title: 'Drag, drop, explore', body: ['Users drag a CSV onto the page and immediately see category breakdowns, trend lines, and month-over-month comparisons — all rendered with D3.js in real time. Column headers are auto-detected, dates parsed automatically, and charts update as users filter by date range or category.', 'Everything runs client-side. No data ever leaves the browser.'] },
        outcomes: [{ num: '10+', label: 'D3.js chart types' }, { num: '<2s', label: 'CSV to first chart' }, { num: '100%', label: 'Client-side, no data leak' }],
        learnings: ['D3.js has a steep curve — start with the data model before touching the DOM.', 'Date parsing edge cases are endless. Build a fuzzy parser from day one.'],
        next: { idx: 5, title: 'IBM AI Engineering Projects' }
      },

      /* 5 — IBM AI Engineering */
      {
        cat: 'ai', accent: '#8B6B09', accentSoft: 'rgba(139,107,9,0.07)', accentBorder: 'rgba(212,180,72,0.28)',
        coverGradient: 'linear-gradient(135deg,rgba(212,180,72,0.10),rgba(212,180,72,0.22))',
        icon: '🤖', catLabel: 'AI & Data', role: 'AI Engineer (Student)', tools: 'Python · Scikit-learn · TensorFlow', timeline: '6 Months', platform: 'Notebooks + APIs',
        title: 'IBM AI Engineering Projects',
        titleEmphasis: 'AI Engineering',
        tagline: 'A series of machine learning projects built throughout the IBM AI Engineering Professional Certificate — from classification pipelines to neural networks applied to real-world datasets.',
        stats: [{ num: '95%', label: 'Cert. completion score' }, { num: '8', label: 'ML models built' }, { num: '3', label: 'Domains covered' }],
        challenge: { title: 'Theory into practice, fast', body: ['The IBM AI Engineering curriculum covers classical ML, neural networks, and model deployment at a fast pace. The challenge was not just completing modules, but genuinely understanding when to apply each technique and building intuition for model behaviour.', 'Each project required applying methods to real datasets across healthcare, finance, and logistics.'], quote: '"The best way to learn machine learning is to build something that can actually fail."' },
        process: ['Learn','Explore','Build','Evaluate','Iterate'],
        processDetail: ['Course modules, papers','EDA, dataset profiling','Model implementation','Metrics, confusion matrices','Hyperparameter tuning'],
        processActive: 4,
        solution: { title: 'Eight models, three domains, one capstone', body: ['Projects included: binary classification for customer churn (logistic regression + random forest), regression for housing prices, image classification with CNNs, and a capstone applying NLP to sentiment analysis on financial news.', 'Each model was evaluated not just on accuracy but on business interpretability — a skill that bridges data science and design thinking.'] },
        outcomes: [{ num: '95%', label: 'Avg. score across modules' }, { num: '8', label: 'ML models implemented' }, { num: '87%', label: 'Best model accuracy (NLP capstone)' }],
        learnings: ['Feature engineering matters more than model choice — better features beat better algorithms most of the time.', 'Always start with a stupid baseline. A logistic regression that\'s easy to explain often beats a complex model that isn\'t.'],
        next: { idx: 6, title: 'Personal Finance Intelligence System' }
      },

      /* 6 — Finance Intelligence System */
      {
        cat: 'finance', accent: '#1A5FAB', accentSoft: 'rgba(26,95,171,0.07)', accentBorder: 'rgba(126,181,232,0.28)',
        coverGradient: 'linear-gradient(135deg,rgba(126,181,232,0.10),rgba(178,210,240,0.22))',
        icon: '💰', catLabel: 'Finance', role: 'Data Analyst', tools: 'Python · SQL · Power BI · Pandas', timeline: '3 Weeks', platform: 'Desktop Dashboard',
        title: 'Personal Finance Intelligence System',
        titleEmphasis: 'Intelligence',
        tagline: 'An automated pipeline that ingests bank exports, categorises every transaction, stores them in SQL, and surfaces insights through Power BI — identifying 15–25% in potential savings.',
        stats: [{ num: '15–25%', label: 'Savings identified' }, { num: '10+', label: 'Categories tracked' }, { num: 'Auto', label: 'Monthly reporting' }],
        challenge: { title: 'Manual budgeting is a lie you tell yourself', body: ['Most people think they track their spending. Most people are wrong. A spreadsheet updated once a month tells you what happened, not what\'s happening. The goal was a system that runs automatically and surfaces insights without you having to remember to check it.', 'Personal constraint: bank exports come in three different CSV formats with inconsistent column names.'], quote: '"I know I spend too much on coffee. I just don\'t know how much too much is."' },
        process: ['Audit','Build ETL','Model SQL','Visualise','Automate'],
        processDetail: ['3 months of historical data','Python ingestion + cleaning','Star schema in SQLite','Power BI connected live','Scheduled Python script'],
        processActive: 4,
        solution: { title: 'ETL → SQL → live dashboard', body: ['A Python script runs weekly, reads new exports from a folder, cleans and standardises them, and loads them into a SQLite database. A Power BI dashboard connects live and shows: category breakdown, trend lines, month-over-month delta, and a predictive end-of-month balance based on spending velocity.', 'The keyword-based categoriser achieves 94% accuracy without any ML — pure rule matching on merchant names.'] },
        outcomes: [{ num: '15–25%', label: 'Savings opportunities found' }, { num: '94%', label: 'Auto-categorisation accuracy' }, { num: '0', label: 'Manual steps per month' }],
        learnings: ['A rule-based categoriser is almost always good enough — and much easier to debug than an ML model.', 'Spending velocity (daily burn rate) is more actionable than monthly totals. Build metrics for how people actually think, not how accountants do.'],
        next: { idx: 7, title: 'Business Intelligence Dashboard' }
      },

      /* 7 — Business Intelligence Dashboard */
      {
        cat: 'finance', accent: '#1A5FAB', accentSoft: 'rgba(26,95,171,0.07)', accentBorder: 'rgba(126,181,232,0.28)',
        coverGradient: 'linear-gradient(135deg,rgba(126,181,232,0.10),rgba(178,210,240,0.22))',
        icon: '📊', catLabel: 'Finance', role: 'Business Intelligence Analyst', tools: 'SQL · Power BI · Tableau', timeline: '4 Weeks', platform: 'Web Dashboard',
        title: 'Business Intelligence Dashboard',
        titleEmphasis: 'Intelligence',
        tagline: 'Analysed 50K+ transactional records across 4 data sources — eliminating 6 hours of weekly manual reporting and replacing it with a self-serve Power BI dashboard.',
        stats: [{ num: '50K+', label: 'Records analysed' }, { num: '40%', label: 'Reporting time saved' }, { num: '4', label: 'Sources unified' }],
        challenge: { title: '6 hours every Monday morning', body: ['A team was spending six hours per week manually copying data from four different systems into a master Excel file, then building pivot tables to produce the same report every Monday. It was error-prone, demoralising, and delayed decisions by a week.', 'The brief: automate the data pipeline and give everyone a dashboard they can open themselves.'], quote: '"By the time the report is ready, the data is already outdated."' },
        process: ['Audit','Model','ETL','Visualise','Deploy'],
        processDetail: ['4 source systems mapped','Star schema design','SQL joins + transforms','Power BI report built','Scheduled refresh, shared'],
        processActive: 4,
        solution: { title: 'One SQL model. One live dashboard.', body: ['A SQL data model joins the four source tables and pre-computes all KPIs — revenue by region, cost per transaction, month-over-month variance, and rolling averages. Power BI connects directly and refreshes automatically every morning.', 'The team now opens a dashboard on Monday instead of building it. Decisions that took a week now take minutes.'] },
        outcomes: [{ num: '50K+', label: 'Records processed' }, { num: '40%', label: 'Reduction in reporting time' }, { num: '6h → 0', label: 'Weekly manual work eliminated' }],
        learnings: ['The data model is the hardest part — invest time in the star schema before writing a single Power BI measure.', 'Self-serve only works if the dashboard is intuitive enough that people don\'t email you for help. Test it with non-technical stakeholders before launch.'],
        next: { idx: 0, title: 'Product Dashboard Design' }
      }
    ];

    /* ══ RENDER ═══════════════════════════════════════════════════════ */
    const params = new URLSearchParams(window.location.search);
    const idx    = parseInt(params.get('p') || '0', 10);
    const p      = allProjects[Math.max(0, Math.min(idx, allProjects.length - 1))];

    /* Apply accent colour variables */
    document.documentElement.style.setProperty('--accent',       p.accent);
    document.documentElement.style.setProperty('--accent-soft',  p.accentSoft);
    document.documentElement.style.setProperty('--accent-border',p.accentBorder);

    /* Page title */
    document.title = p.title + ' — Victoria G. Foïde';

    /* Cover bg */
    document.getElementById('cs-cover').style.background = p.coverGradient;
    document.getElementById('cs-cover-icon').textContent  = p.icon;

    /* Meta row */
    document.getElementById('cs-meta').innerHTML = `
      <span class="cs-tag">${p.catLabel}</span>
      <span class="cs-meta-dot">·</span>
      <span class="cs-meta-text">${p.role}</span>
      <span class="cs-meta-dot">·</span>
      <span class="cs-meta-text">${p.timeline}</span>
      <span class="cs-meta-dot">·</span>
      <span class="cs-meta-text">${p.platform}</span>
    `;

    /* Title (bold the emphasis word) */
    const titleHtml = p.title.replace(p.titleEmphasis, `<em>${p.titleEmphasis}</em>`);
    document.getElementById('cs-title').innerHTML    = titleHtml;
    document.getElementById('cs-tagline').textContent = p.tagline;

    /* Stats */
    document.getElementById('cs-stats').innerHTML = p.stats.map(s =>
      `<div class="cs-stat"><div class="cs-stat-num">${s.num}</div><div class="cs-stat-label">${s.label}</div></div>`
    ).join('');

    /* Process steps */
    const processHtml = p.process.map((name, i) => `
      <div class="cs-step">
        <div class="cs-step-dot ${i < p.processActive ? 'done' : i === p.processActive ? 'active' : 'idle'}">${i < p.processActive ? '✓' : i === p.processActive ? '→' : String(i+1)}</div>
        <div class="cs-step-name">${name}</div>
        <div class="cs-step-sub">${p.processDetail[i]}</div>
      </div>
    `).join('');

    /* Outcomes */
    const outcomesHtml = p.outcomes.map(o =>
      `<div class="outcome-box"><div class="outcome-num">${o.num}</div><div class="outcome-label">${o.label}</div></div>`
    ).join('');

    /* Learnings */
    const learningsHtml = p.learnings.map(l =>
      `<div class="learning-item glass"><div class="learning-dot"></div><div class="learning-text">${l}</div></div>`
    ).join('');

    /* Body */
    document.getElementById('cs-body').innerHTML = `
      <div class="cs-block reveal">
        <div class="cs-section-label">Project Overview</div>
        <div class="cs-overview-grid">
          <div class="cs-overview-card glass">
            <div class="cs-overview-label">My Role</div>
            <div class="cs-overview-value">${p.role}</div>
          </div>
          <div class="cs-overview-card glass">
            <div class="cs-overview-label">Tools</div>
            <div class="cs-overview-value">${p.tools.split(' · ')[0]}</div>
            <div class="cs-overview-sub">${p.tools.split(' · ').slice(1).join(' · ')}</div>
          </div>
          <div class="cs-overview-card glass">
            <div class="cs-overview-label">Timeline</div>
            <div class="cs-overview-value">${p.timeline}</div>
          </div>
          <div class="cs-overview-card glass">
            <div class="cs-overview-label">Platform</div>
            <div class="cs-overview-value">${p.platform}</div>
          </div>
        </div>
      </div>

      <div class="cs-block reveal">
        <div class="cs-section-label">The Challenge</div>
        <h2 class="cs-section-title">${p.challenge.title}</h2>
        ${p.challenge.body.map(b => `<p class="cs-text">${b}</p>`).join('')}
        <div class="cs-quote"><p>${p.challenge.quote}</p></div>
      </div>

      <div class="cs-img-placeholder reveal">
        <div class="cs-img-inner" style="background:${p.coverGradient}">
          <div class="cs-img-label">Add your before / research screenshot here</div>
        </div>
        <div class="cs-img-caption">Before state or research documentation — replace with your actual assets</div>
      </div>

      <div class="cs-block reveal">
        <div class="cs-section-label">Process</div>
        <h2 class="cs-section-title">How I worked through it</h2>
        <div class="cs-process">${processHtml}</div>
      </div>

      <div class="cs-block reveal">
        <div class="cs-section-label">The Solution</div>
        <h2 class="cs-section-title">${p.solution.title}</h2>
        ${p.solution.body.map(b => `<p class="cs-text">${b}</p>`).join('')}
      </div>

      <div class="cs-img-placeholder reveal">
        <div class="cs-img-inner" style="background:${p.coverGradient}">
          <div class="cs-img-label">Add your final output / screenshot here</div>
        </div>
        <div class="cs-img-caption">Final solution — replace with your actual project screenshots or mockups</div>
      </div>

      <div class="cs-block reveal">
        <div class="cs-section-label">Outcomes</div>
        <h2 class="cs-section-title">Numbers that tell the story</h2>
        <div class="cs-outcomes">${outcomesHtml}</div>
      </div>

      <div class="cs-block reveal">
        <div class="cs-section-label">Key Learnings</div>
        <h2 class="cs-section-title">What I'd do differently</h2>
        <div class="cs-learnings">${learningsHtml}</div>
      </div>

      <div class="cs-next reveal">
        <div>
          <div class="cs-next-label">Next project</div>
          <div class="cs-next-title">${p.next.title}</div>
        </div>
        <a href="case-study.html?p=${p.next.idx}" class="cs-next-btn">View next →</a>
      </div>
    `;

    /* Reveal */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    setTimeout(() => { document.querySelectorAll('.cs-hero .reveal').forEach(el => el.classList.add('visible')); }, 80);

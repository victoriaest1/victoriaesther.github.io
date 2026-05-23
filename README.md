# Victoria G. Foïde — Portfolio

Personal portfolio website for Victoria G. Foïde, UX/UI Designer & Frontend Developer based in Fribourg, Switzerland.

Live at: `https://yourusername.github.io/portfolio/victoria-portfolio-v2.html`

---

## About

Built from scratch with vanilla HTML, CSS, and JavaScript — no frameworks, no bundler, no build step. Designed in Figma first, then hand-coded with a focus on fluid animations, glassmorphism aesthetics, and clean responsive layout.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, clamp, grid, backdrop-filter) |
| Interactions | Vanilla JavaScript (IntersectionObserver, RAF, mousemove) |
| Fonts | Inter + Playfair Display via Google Fonts |
| Icons | Inline SVG (no icon library) |
| Hosting | GitHub Pages |

---

## File Structure

```
Portfolio/
├── victoria-portfolio-v2.html   # Main portfolio (start here)
├── case-study.html              # Universal case study template (all 8 projects via ?p=0–7)
├── case-study-uxui.html         # UX/UI design focused template
├── case-study-data.html         # Data / AI / ML focused template
├── case-study-finance.html      # Finance & BI focused template
├── case-study-dev.html          # Frontend development focused template
├── css/
│   ├── portfolio.css            # Main portfolio styles
│   ├── case-study.css           # Universal case study styles
│   ├── case-study-uxui.css      # UX/UI template styles (pink accent)
│   ├── case-study-data.css      # Data/AI template styles (gold accent)
│   ├── case-study-finance.css   # Finance/BI template styles (blue accent)
│   └── case-study-dev.css       # Frontend dev template styles (green accent)
├── js/
│   ├── portfolio.js             # Main portfolio interactions & data
│   ├── case-study.js            # Universal case study logic
│   ├── case-study-dev.js        # Lighthouse animation + dev-specific JS
│   └── transitions.js           # Shared page transitions (used by uxui, data, finance)
└── README.md                    # You are here
```

---

## Running Locally

1. Open this folder in **VS Code**
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `victoria-portfolio-v2.html` → **Open with Live Server**
4. Your browser opens at `http://127.0.0.1:5500` and auto-refreshes on every save

No npm, no install, no setup. It just works.

---

## Deploying to GitHub Pages

**First time:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git push -u origin main
```

Then go to your repo → **Settings → Pages → Source: main / root** → Save.

Your site will be live at `https://yourusername.github.io/portfolio/` in 1–2 minutes.

**Every update after that:**

```bash
git add .
git commit -m "what you changed"
git push
```

GitHub Pages auto-redeploys. Live in ~1–2 minutes.

---

## Features

- Glassmorphism cards with `backdrop-filter: blur()`
- Drifting background blobs (CSS keyframe animations)
- Cycling hero text animation
- Scroll-triggered reveal (IntersectionObserver)
- Animated stat counters (requestAnimationFrame ease-out)
- Scrolling skills marquee with inline SVG brand logos
- 3D tilt on hero card and project cards (mousemove + CSS perspective)
- Magnetic hover effect on buttons
- Cinematic page transitions (fade in/out)
- "Now" strip showing current focus
- Fluid responsive layout using `clamp()` throughout
- Project filter grid (Design / Dev / AI & Data / Finance)
- 4 specialized case study templates with distinct layouts

---

## Case Study Templates

Each template has its own visual identity while sharing the same design system:

| Template | Accent | Best for |
|----------|--------|----------|
| `case-study-uxui.html` | Pink `#D4537E` | UX research, wireframes, usability testing |
| `case-study-data.html` | Gold `#8B6B09` | ML models, Python pipelines, data analysis |
| `case-study-finance.html` | Blue `#1A5FAB` | BI dashboards, SQL, financial reporting |
| `case-study-dev.html` | Green `#3B6D11` | Web apps, React, performance optimization |

---

## Customizing

**To add your real links**, search for `href="#"` and replace with your actual URLs:
- LinkedIn, GitHub, Dribbble in the Contact section
- CV download button in the hero
- Live site / GitHub links in `case-study-dev.html`

**To add a real photo**, find `.about-avatar` in the About section and replace the `VF` initials with an `<img>` tag.

**To connect the contact form**, sign up at [formspree.io](https://formspree.io) (free) and replace the `<form>` `action` attribute with your Formspree endpoint.

---

## Design System

```css
--bg:       #F7F2EA   /* Warm Cream */
--pink:     #D4537E   /* Primary accent */
--green:    #3B6D11   /* Secondary accent */
--gold:     #8B6B09   /* AI / Data accent */
--blue:     #1A5FAB   /* Finance accent */
--font:     'Inter'
--font-display: 'Playfair Display'
```

---

## Author

**Victoria G. Foïde**
Business Informatics · University of Fribourg, Switzerland
UX/UI Design · Frontend Development · Data Science

[LinkedIn](#) · [GitHub](#) · [Dribbble](#) · victoria.esther1@outlook.com

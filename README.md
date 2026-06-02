# Personal Portfolio — Dhana Karthikeya Ventrapragada

A calm, editorial personal portfolio for a UC Berkeley student in Data Science &
Applied Mathematics. Built as plain **HTML + CSS + vanilla JavaScript** — no
framework, no build step — so it can be hosted on GitHub Pages exactly as-is.

**Live site:** _add your GitHub Pages URL here_

---

## Highlights

- **Zero build step.** Three files plus this README. Clone, edit, push.
- **Single source of content.** Every word, project, and role lives in one
  `siteData` object at the top of `script.js`. Render functions build the DOM
  from it — nothing is hardcoded into the HTML.
- **Layered structure.** A curated homepage plus full-depth subpages
  (`#all-projects`, `#all-experience`, `#all-courses`) via a lightweight
  hash-based router, with a "← Back to home" link on each.
- **Dark / light theme.** Follows the system preference, with a manual toggle
  persisted in `localStorage`, applied before paint to avoid a flash.
- **Accessible & motion-aware.** Scroll-reveal animations use
  `IntersectionObserver` and respect `prefers-reduced-motion`; subpages reveal
  instantly when routed to.
- **Responsive.** Fully responsive down to ~390px, with a mobile hamburger nav
  and a consistent, token-driven vertical rhythm between sections.

---

## Tech stack

| Layer       | Choice                                                        |
| ----------- | ------------------------------------------------------------- |
| Markup      | Static HTML5 (`index.html`)                                   |
| Styling     | Hand-written CSS with custom properties (`styles.css`)        |
| Behavior    | Vanilla JavaScript, no dependencies (`script.js`)             |
| Fonts       | [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) + [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) (body), via Google Fonts |
| Hosting     | GitHub Pages (any static host works)                          |

---

## File structure

```
.
├── index.html      # Page shell: header/nav, section containers, subpage views, footer
├── styles.css      # Theme tokens, layout, components, responsive rules
├── script.js       # siteData (all content) + render functions + router + theme/reveal logic
├── README.md       # This file
├── profile.jpeg    # Your profile photo (optional — a "DV" monogram shows if missing)
└── resume.pdf       # Your résumé (linked from the hero, contact, and footer)
```

`profile.jpeg` and `resume.pdf` are not included in the repo by default — add
your own.

---

## Running locally

No tooling required. Either open `index.html` directly, or serve the folder so
the hash router and fonts behave like production:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploying to GitHub Pages

1. Push these files to the repository root (the `main` branch).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose `main` and `/ (root)`, and save.
4. Your site publishes at `https://<username>.github.io/<repo>/`.

> **Asset paths:** All assets use **relative** paths (`profile.jpeg`,
> `resume.pdf`, `styles.css`), which is what keeps the site working on a project
> page served from a subpath. If you ever host at a domain root (a custom domain
> or `<username>.github.io`), you can switch to root-absolute paths like
> `/profile.jpeg` if you prefer.

---

## Editing content

All editable content lives in the `siteData` object at the **top of
`script.js`**. Change the data, not the HTML — the render functions handle the
markup. Keep this pattern.

```js
const siteData = {
  links: { email, github, linkedin, resume },
  hero:  { eyebrow, name, headline, subheadline, identity },
  about: [ /* paragraph strings (inline HTML allowed) */ ],
  education: [ { school, date, degree, sub, location, gpa, coursesLink? } ],
  experience: [ { home?, visible?, role, org, dates, loc, bullets[] } ],
  projects: [ { title, home?, desc, bullets[], tags[], link } ],
  courses: [ { term, rows: [ { code, title, status, planned?, topics, project } ] } ],
  skills: [ { group, interests?, items[] } ],
  journey: { title, quote, body[] },
  recentlyWatched: { title, lead, entries: [ { title, type, status, rating, review, date, poster, genre, tags[] } ] },
  contact: { lead },
};
```

### Field notes

- **`experience[].home`** — a rank (1–4) sets the order on the homepage. Roles
  *without* a `home` value still appear on the full Experience page but not on
  the homepage. The homepage currently shows three: Guang Labs, IDX Exchange,
  Fung Fellow.
- **`experience[].visible: false`** — hides a role everywhere while keeping it in
  the data, so it's easy to restore.
- **`projects[].home`** — same idea: rank 1–4 promotes a project to the curated
  homepage; the full Projects page shows all of them.
- **`projects[].link`** — a public repo URL. If present, a **View Repository**
  button renders on the card; if empty, no button appears (no disabled state,
  no "private repo" label). Applies to both the homepage and full Projects page.
- **`education[].coursesLink`** — optional `{ href, text }`. When present (the
  Berkeley card), it renders a **View Courses** link to the Courses page.
- **`courses[].rows[]`** — the Courses page shows **letter-graded courses only**.
  Rows marked `planned: true` or with a pass/no-pass `status` of `"P"` are kept
  in the data but hidden from the table; a term with no letter grades is skipped.

### Common edits

- **Profile photo** — drop a square image (600×600+) named `profile.jpeg` in the
  root. Missing image → clean "DV" monogram fallback.
- **Résumé** — replace `resume.pdf` in the root.
- **Links** — update `siteData.links`.

---

## Homepage layout

The homepage is intentionally selective, numbered `01`–`08`:

1. **About** — short, current-facing intro
2. **Education** — UC Berkeley + De Anza, presented as equals
3. **Projects** — a curated few, with *View All Projects →*
4. **Experiences** — three selected roles, with *View All Experiences →*
5. **Technical Toolkit** — compact, skimmable grouped skills
6. **The Path Here** — the transfer / international story (kept here, not in the hero)
7. **Recently Watched** — a small personal touch
8. **Contact**

Full depth lives on the subpages: **All Projects** (with topic filters), **All
Experiences**, and **Courses** (accordion by term).

---

## Design system

- **Palette (light):** warm off-white paper `#f7f6f1`, white surfaces, warm
  charcoal ink `#26261f`, muted sage accent `#4f6d5c`.
- **Palette (dark):** warm near-black `#16150f`, sage accent `#8fb39d`.
- Defined as CSS custom properties under `[data-theme]`, so re-theming is a
  matter of editing tokens at the top of `styles.css`.
- **Section rhythm** is token-driven (`--section-pad-y`, `--section-head-gap`)
  and scales responsively (88px desktop → 80px tablet → 72px phone) for a calm,
  consistent vertical cadence.

---

## Content & accuracy conventions

This portfolio follows a few self-imposed rules — worth keeping if you fork it:

- Never invent roles, awards, grades, metrics, or dates. If something isn't final,
  mark it `planned` / "in progress" or omit it.
- No private information in public (phone number, student ID, transcript images,
  private course code).
- Frame course-origin projects as real technical work.
- Accuracy source hierarchy: **transcript → résumé → LinkedIn → GitHub**.

---

## License

Personal project. Content (text, résumé, photo) is © Dhana Karthikeya
Ventrapragada. Feel free to take inspiration from the structure and code; please
don't republish the personal content as your own.

# Dinos Constantinou — portfolio

Single-page portfolio. Static HTML/CSS/JS — no build step, no dependencies.

Built from a Claude Design canvas: warm light palette, Instrument Serif
display type, a 720px column, and one screenshot per project in either a
browser frame (web) or a phone frame (apps).

## Preview

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Pushing to `claude/portfolio-build-design-2xvw6y` deploys to GitHub Pages via
`.github/workflows/pages.yml`. Live at https://ziffos.github.io/portfolio/

## Structure

- `index.html` — header, hero, four projects, websites, footer
- `styles.css` — design tokens at the top; narrow-screen rules at the bottom
- `main.js` — click a screenshot to open it full size (the frames crop hard)
- `assets/fonts/` — Instrument Serif, self-hosted (no external font request)
- `assets/shots/` — screenshots; see the README there

## Placeholders still to fill

- `[LinkedIn]` and `CV` links in the header nav — both point at `#`
- Vigor has no screenshot yet, so its frame reads "Screenshot coming"
- `admin.bettys.internal` and `mosaik.app` in the browser frames came from
  the design; swap them if the real addresses differ

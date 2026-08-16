# ziffos — portfolio

Single-page portfolio. Static HTML/CSS/JS — no build step, no dependencies.

## Preview

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Any static host works as-is (GitHub Pages, Cloudflare Pages, Vercel, Netlify).
For GitHub Pages: Settings → Pages → deploy from branch, root folder.

## Features

- **Dark/light theme** — toggle top-right, persisted in `localStorage`
  (`ziffos-theme`), dark by default, applied before first paint (no flash).
- **Accent color** — amber by default. Set `data-accent="moss"` or
  `data-accent="blue"` on `<html>` in `index.html` to switch.
- **Screens grid** — tiles show a dashed placeholder until a matching image
  exists. Drop screenshots into `assets/shots/` (see the README there for
  expected filenames) and they appear automatically.

## Placeholders still to fill

Search `index.html` for these and replace with real values:

- `[years]` — Nordnet and Betty's Crispy Chicken date ranges (Experience)
- `[url]` — project links for Betty's, Virelio, Stockwatch (Projects)
- `[LinkedIn]` — LinkedIn profile URL and label (contact line)
- `View CV` — link a CV file (contact line)

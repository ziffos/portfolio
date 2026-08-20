Drop project screenshots here, named after the tile ids in index.html:

Betty's Crispy Chicken — done, WebP:
  shot-bettys-sales.webp      (Sales Overview)
  shot-bettys-marketing.webp  (Marketing)
  shot-bettys-menu.webp       (Menu list)
  shot-bettys-tv.webp         (TV Displays)

Vigor — app, portrait phone screenshots:
  shot-vigor-workout.png
  shot-vigor-coach.png
  shot-vigor-stats.png

Mosaik — web app on mobile (phone frame + browser bar) — done, WebP:
  shot-mosaik-home.webp
  shot-mosaik-company.webp
  shot-mosaik-mosaic.webp
  shot-mosaik-verdict.webp
  shot-mosaik-company-mcd.webp

Plouma — app, portrait phone screenshots (7 slots):
  shot-plouma-welcome.webp
  shot-plouma-home.webp
  shot-plouma-directory.webp
  shot-plouma-results.webp
  shot-plouma-listing.webp
  shot-plouma-chat-offer.webp
  shot-plouma-profile.webp

n8n Workflows (one image per workflow):
  wf-delivery-sync.png
  wf-reporting.png

Send full-resolution exports in any format; they get converted to WebP at
1600px wide (quality 0.82) and the data-src in index.html points at the .webp.
That took Betty's four screens from 4.4 MB to 360 KB.
Tiles show the dashed placeholder until the file exists. To add or remove a
tile, copy or delete a <figure> block inside the project's .proj-shots grid.

Each <figure> may carry a <p class="shot-desc"> line. The gallery shows it
under the image and swaps it when you switch thumbnails — used by the n8n card
so every workflow gets its own description.

Vigor, Mosaik and Plouma are apps: their grids carry data-shape="phone" in
index.html, so their screens show in a centred phone frame (9:19.5, nothing
cropped) instead of the wide frame used for dashboards. Send phone screenshots
at full resolution — any aspect close to 9:19.5 fits without letterboxing.

Frame types are set per project with data-shape on .proj-shots in index.html:
  (none)      wide frame — Betty's dashboards
  phone       phone frame — Plouma, Vigor (native apps)
  phone-web   phone frame with a browser bar — Mosaik (web app on mobile).
              Add data-url="example.com" to show a domain in the bar.

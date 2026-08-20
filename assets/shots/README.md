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

Mosaik — app, portrait phone screenshots:
  shot-mosaik-overview.png
  shot-mosaik-analysis.png
  shot-mosaik-watchlist.png

Plouma — app, portrait phone screenshots:
  shot-plouma-feed.png
  shot-plouma-listing.png
  shot-plouma-profile.png

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

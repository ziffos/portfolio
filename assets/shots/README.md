Drop project screenshots here, named after the tile ids in index.html:

Betty's Crispy Chicken:
  shot-bettys-admin.png
  shot-bettys-tv.png
  shot-bettys-payouts.png

Vigor:
  shot-vigor-workout.png
  shot-vigor-coach.png
  shot-vigor-stats.png

Mosaik:
  shot-mosaik-overview.png
  shot-mosaik-analysis.png
  shot-mosaik-watchlist.png

Plouma:
  shot-plouma-feed.png
  shot-plouma-listing.png
  shot-plouma-profile.png

n8n Workflows (one image per workflow):
  wf-delivery-sync.png
  wf-reporting.png

PNG is wired up by default; to use .webp/.jpg, change the data-src in index.html.
Tiles show the dashed placeholder until the file exists. To add or remove a
tile, copy or delete a <figure> block inside the project's .proj-shots grid.

Each <figure> may carry a <p class="shot-desc"> line. The gallery shows it
under the image and swaps it when you switch thumbnails — used by the n8n card
so every workflow gets its own description.

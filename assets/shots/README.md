Screenshots, all WebP. Every file here is on the page — each project row is
a strip you drag sideways, in the order the <figure> elements appear in
index.html.

  Betty's  4  sales · marketing · menu · tv          (browser frame, landscape)
  Plouma   7  welcome · home · directory · results
              listing · chat-offer · profile          (phone frame)
  Vigor    5  today · plan · progress · chat · memory (phone frame)
  Mosaik   5  home · company · mosaic · verdict
              company-mcd                             (phone frame + address bar)

Frames never crop: the image is contained, so a screenshot whose aspect
differs a little from the frame gets thin bars in the panel colour, which
blend into the frame.

To reorder, move a <figure> inside its .track. To drop one, delete the
<figure> — the counter follows automatically.

Adding new ones: send full-resolution exports in any format and they get
converted to WebP — 1600px wide for desktop screens, 1000px for phone
screens, quality 0.82.

The Plouma and Vigor files came from design mockups with a phone bezel drawn
in. That bezel is trimmed and the corners filled with the frame's panel
colour (#fffdf9) so the frame on the page is the only frame you see. Any new
Plouma or Vigor export needs the same treatment; raw phone screenshots do not.

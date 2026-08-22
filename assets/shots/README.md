Screenshots, all WebP. Every file here is on the page. Betty's is a feature image with clickable
thumbnails under it; the other three are strips you drag sideways, in the
order the <figure> elements appear in index.html.

  Betty's  4  sales · marketing · menu · tv          (browser window + thumbnails)
  Plouma   7  welcome · home · directory · results
              listing · chat-offer · profile          (phone frame)
  Vigor    5  today · plan · progress · chat · memory (phone frame)
  Mosaik   5  home · company · mosaic · verdict
              company-mcd                             (browser window, phone-sized)

Frames never crop: the image is contained, so a screenshot whose aspect
differs a little from the frame gets thin bars in the panel colour, which
blend into the frame.

To reorder, move a <figure> inside its .track (or a <button> inside
.thumbs for Betty's). To drop one, delete it — the counter follows
automatically.

Adding new ones: send full-resolution exports in any format and they get
converted to WebP — 1600px wide for desktop screens, 1000px for phone
screens, quality 0.82.

Plouma and Vigor screenshots are clipped to a rounded rect at 15% of their
width, with the corners left transparent, so the dark bezel drawn on the page
sits flush against them. A new export needs the same treatment — the mockup's
own bezel trimmed off first, if it has one.

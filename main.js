// Theme toggle with persistence (default: dark).
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function current() {
    return root.dataset.theme === 'light' ? 'light' : 'dark';
  }

  function render() {
    btn.textContent = current() === 'dark' ? 'light mode' : 'dark mode';
  }

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('ziffos-theme', next); } catch (e) {}
    render();
  });

  render();
})();

// Project screens: transform each .proj-shots placeholder grid into a
// feature-image + thumbnails gallery with a lightbox. Images referenced by
// data-src load if the file exists (drop them into assets/shots/); missing
// ones show the dashed placeholder. Without JS the plain grid remains.
(function () {
  var ICON = '<svg width="__S__" height="__S__" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use href="#icon-img"></use></svg>';

  // One lightbox for the whole page.
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-label', 'Screenshot, full size');
  var lbImg = document.createElement('img');
  lb.appendChild(lbImg);
  document.body.appendChild(lb);
  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
  lb.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  document.querySelectorAll('.proj-shots').forEach(function (grid) {
    var shots = Array.from(grid.querySelectorAll('figure')).map(function (fig) {
      return {
        src: fig.querySelector('.shot').dataset.src,
        label: fig.querySelector('figcaption').textContent,
        img: null,
      };
    });
    if (!shots.length) return;

    var gallery = document.createElement('div');
    gallery.className = 'gallery';

    var hero = document.createElement('div');
    hero.className = 'g-hero';
    var heroImg = document.createElement('img');
    heroImg.style.display = 'none';
    heroImg.tabIndex = 0;
    heroImg.setAttribute('role', 'button');
    heroImg.setAttribute('aria-label', 'View full size');
    var empty = document.createElement('div');
    empty.className = 'g-empty';
    empty.innerHTML = ICON.replace(/__S__/g, '28') + '<div class="cap"></div>';
    var ring = document.createElement('div');
    ring.className = 'ring';
    ring.setAttribute('aria-hidden', 'true');
    hero.appendChild(heroImg);
    hero.appendChild(empty);
    hero.appendChild(ring);

    var thumbs = document.createElement('div');
    thumbs.className = 'g-thumbs';
    var cap = document.createElement('p');
    cap.className = 'g-cap';

    var active = 0;
    function show(i) {
      active = i;
      var s = shots[i];
      cap.textContent = s.label;
      Array.from(thumbs.children).forEach(function (b, j) {
        b.classList.toggle('on', j === i);
      });
      if (s.img) {
        heroImg.src = s.src;
        heroImg.alt = s.label;
        heroImg.classList.toggle('portrait', s.img.naturalHeight > s.img.naturalWidth);
        heroImg.style.display = '';
        empty.style.display = 'none';
        ring.style.display = 'none';
        heroImg.style.cursor = 'zoom-in';
      } else {
        heroImg.style.display = 'none';
        empty.style.display = '';
        empty.querySelector('.cap').textContent = s.label;
        ring.style.display = '';
      }
    }

    shots.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ph';
      b.innerHTML = ICON.replace(/__S__/g, '18');
      b.setAttribute('aria-label', s.label);
      b.addEventListener('click', function () { show(i); });
      thumbs.appendChild(b);

      var probe = new Image();
      probe.onload = function () {
        s.img = probe;
        b.className = '';
        b.innerHTML = '';
        var t = document.createElement('img');
        t.src = s.src;
        t.alt = s.label;
        b.appendChild(t);
        if (i === active) show(active);
      };
      probe.src = s.src;
    });

    function enlarge() {
      var s = shots[active];
      if (s.img) openLightbox(s.src, s.label);
    }
    heroImg.addEventListener('click', enlarge);
    heroImg.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); enlarge(); }
    });

    gallery.appendChild(hero);
    gallery.appendChild(thumbs);
    gallery.appendChild(cap);
    if (shots.length === 1) thumbs.style.display = 'none';
    grid.replaceWith(gallery);
    show(0);
  });
})();

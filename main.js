// Feature image with thumbnails under it — click one to swap the big image.
(function () {
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    var hero = gallery.querySelector('.frame img');
    var buttons = Array.prototype.slice.call(gallery.querySelectorAll('.thumbs button'));
    if (!hero || !buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        hero.src = btn.dataset.src;
        hero.alt = btn.dataset.alt || '';
        buttons.forEach(function (b) { b.classList.toggle('on', b === btn); });
      });
    });
  });
})();

// Screen strips: drag or swipe sideways through a project's screenshots,
// with a counter showing where you are. Touch and trackpads scroll the
// track natively; this adds mouse dragging on top.
(function () {
  var strips = document.querySelectorAll('.strip');
  if (!strips.length) return;

  var pad = function (n) { return n < 10 ? '0' + n : String(n); };

  strips.forEach(function (strip) {
    var track = strip.querySelector('.track');
    var slides = Array.prototype.slice.call(track.children);
    if (slides.length < 1) return;

    var counter = document.createElement('p');
    counter.className = 'counter';
    counter.setAttribute('aria-live', 'polite');
    strip.appendChild(counter);

    function step() {
      // Slide width plus the flex gap, measured rather than assumed.
      if (slides.length < 2) return slides[0].offsetWidth;
      return slides[1].offsetLeft - slides[0].offsetLeft;
    }

    var current = -1;
    function update() {
      var i = Math.round(track.scrollLeft / step());
      i = Math.max(0, Math.min(i, slides.length - 1));
      if (i === current) return;
      current = i;
      counter.textContent = pad(i + 1) + ' / ' + pad(slides.length);
    }

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });

    update();
    window.addEventListener('resize', function () { current = -1; update(); });

    // Mouse dragging. Touch is left to the browser, which already does it
    // better than any script would.
    var down = false, startX = 0, startScroll = 0, moved = 0;

    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'touch' || e.button !== 0) return;
      down = true;
      moved = 0;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.classList.add('dragging');
    });

    track.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > moved) moved = Math.abs(dx);
      if (moved > 3 && !track.hasPointerCapture(e.pointerId)) {
        track.setPointerCapture(e.pointerId);
      }
      track.scrollLeft = startScroll - dx;
    });

    function release() {
      if (!down) return;
      down = false;
      track.classList.remove('dragging');   // restores scroll-snap, which settles the track
    }

    track.addEventListener('pointerup', release);
    track.addEventListener('pointercancel', release);
    track.addEventListener('lostpointercapture', release);

    // A drag that ends on an image must not also open the lightbox.
    track.addEventListener('click', function (e) {
      if (moved > 4) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  });
})();

// Click a screenshot to view it full size.
(function () {
  var shots = document.querySelectorAll('.frame img');
  if (!shots.length) return;

  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-label', 'Screenshot, full size');
  var lbImg = document.createElement('img');
  lb.appendChild(lbImg);
  document.body.appendChild(lb);

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  lb.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  shots.forEach(function (img) {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    function open() {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    img.addEventListener('click', open);
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
})();

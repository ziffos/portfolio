// Click a screenshot to view it full size. The frames crop hard — a
// dashboard at 420px tall is unreadable otherwise.
(function () {
  var shots = document.querySelectorAll('.screen img');
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

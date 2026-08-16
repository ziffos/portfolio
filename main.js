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

// Screens: swap a placeholder tile for a real screenshot when the file
// referenced by data-src exists (drop images into assets/shots/).
(function () {
  document.querySelectorAll('.shot[data-src]').forEach(function (tile) {
    var img = new Image();
    img.alt = tile.parentElement.querySelector('figcaption').textContent;
    img.onload = function () {
      tile.appendChild(img);
      tile.classList.add('filled');
    };
    img.src = tile.dataset.src;
  });
})();

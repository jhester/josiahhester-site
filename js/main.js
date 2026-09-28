(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = root.getAttribute('data-theme') ||
          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        var next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }

    // Click-to-play video facades: swap the poster for the real player on demand
    var facades = document.querySelectorAll('.video-facade[data-embed]');
    Array.prototype.forEach.call(facades, function (facade) {
      facade.addEventListener('click', function (e) {
        e.preventDefault();
        var iframe = document.createElement('iframe');
        iframe.src = facade.getAttribute('data-embed');
        iframe.title = facade.getAttribute('aria-label') || 'Video';
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share');
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        iframe.setAttribute('allowfullscreen', '');
        facade.innerHTML = '';
        facade.appendChild(iframe);
        facade.removeAttribute('href');
        facade.removeAttribute('data-embed');
      });
    });

    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
    }
  });
})();

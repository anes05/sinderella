(function () {
  'use strict';

  /* --------------------------------------------------
     1. Smooth page-exit transition before navigation
     -------------------------------------------------- */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');

    // Skip anything that should not trigger a full navigation
    if (
      !href ||
      href === '#' ||
      href.charAt(0) === '#' ||
      href.indexOf('mailto:') === 0 ||
      href.indexOf('tel:') === 0 ||
      href.indexOf('javascript:') === 0 ||
      link.target === '_blank' ||
      link.hasAttribute('data-toggle') ||
      link.hasAttribute('data-dismiss') ||
      link.classList.contains('dropdown-toggle') ||
      link.classList.contains('image-popup') ||
      link.classList.contains('popup-vimeo') ||
      link.classList.contains('popup-youtube') ||
      link.classList.contains('smoothscroll')
    ) {
      return;
    }

    e.preventDefault();

    // Fade out via the existing full-screen loader overlay
    var loader = document.getElementById('ftco-loader');
    if (loader) {
      loader.classList.add('show');
    } else {
      document.body.classList.add('page-leaving');
    }

    setTimeout(function () {
      window.location.href = href;
    }, 220);
  });

  /* --------------------------------------------------
     2. Image fade-in on load
     -------------------------------------------------- */
  function applyFadeIn(img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('img-loaded');
    } else {
      img.classList.add('img-pending');
      img.addEventListener('load', function () {
        img.classList.remove('img-pending');
        img.classList.add('img-loaded');
      });
      img.addEventListener('error', function () {
        img.classList.remove('img-pending');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('img');
    images.forEach(applyFadeIn);
  });

})();

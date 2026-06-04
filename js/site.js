/* Duraxia Industries — shared site behaviour */
(function () {
  // Sticky nav background on scroll
  var header = document.querySelector('header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var hamb = document.querySelector('.hamb');
  var mnav = document.querySelector('.mnav');
  if (hamb && mnav) {
    var toggle = function () {
      var open = mnav.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
    };
    hamb.addEventListener('click', toggle);
    mnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mnav.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }
})();

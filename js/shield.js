/* -- Content Protection Shield -- */
(function() {
  'use strict';

  // -- Disable right-click context menu --
  document.addEventListener('contextmenu', function(e) { e.preventDefault(); });

  // -- Disable text selection via CSS --
  document.documentElement.style.userSelect = 'none';
  document.documentElement.style.webkitUserSelect = 'none';
  document.documentElement.style.msUserSelect = 'none';

  // -- Block keyboard shortcuts --
  document.addEventListener('keydown', function(e) {
    // Ctrl+U (view source), Ctrl+S (save), Ctrl+P (print)
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
      e.preventDefault(); return false;
    }
    // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspector)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
      e.preventDefault(); return false;
    }
    // F12 (DevTools)
    if (e.key === 'F12') { e.preventDefault(); return false; }
    // Ctrl+A (select all)
    if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) { e.preventDefault(); return false; }
  });

  // -- Disable drag --
  document.addEventListener('dragstart', function(e) { e.preventDefault(); });

  // -- Disable copy --
  document.addEventListener('copy', function(e) { e.preventDefault(); });

  // -- Disable print --
  var style = document.createElement('style');
  style.textContent = '@media print { body { display: none !important; } }';
  document.head.appendChild(style);

  // -- DevTools detection --
  var _dc = 0;
  setInterval(function() {
    var t0 = performance.now();
    debugger;
    var t1 = performance.now();
    if (t1 - t0 > 100) {
      _dc++;
      if (_dc > 2) {
        document.querySelectorAll('.scenario-text, .option-btn, .explanation-text, .mission-card').forEach(function(el) {
          el.textContent = '[Protected Content]';
        });
      }
    } else {
      _dc = Math.max(0, _dc - 1);
    }
  }, 2000);

  // -- Detect iframe embedding (anti-scrape) --
  if (window.top !== window.self) {
    document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:40vh">Access Denied</h1>';
  }

  // -- Console warning --
  console.log('%cSTOP!', 'color:red;font-size:40px;font-weight:bold');
  console.log('%cThis is protected content. Unauthorized copying or redistribution is prohibited.', 'color:red;font-size:14px');

})();

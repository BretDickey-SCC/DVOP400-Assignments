(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored) {
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      // Default to light mode on first run
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) {
    /* ignore */
  }
})();

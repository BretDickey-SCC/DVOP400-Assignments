(function () {
  function updateButton(theme) {
    var btn = document.getElementById("theme-toggle");
    var label = document.getElementById("theme-label");
    if (!btn || !label) return;
    // Show the action the button will perform (target theme), not the current theme.
    // Do not change the button color/class here so the navbar style remains consistent.
    if (theme === "dark") {
      // Currently in dark mode — button should indicate switching to Light
      btn.innerHTML = '☀️ <span id="theme-label">Light</span>';
      btn.setAttribute("aria-pressed", "true");
    } else {
      // Currently in light mode — button should indicate switching to Dark
      btn.innerHTML = '🌙 <span id="theme-label">Dark</span>';
      btn.setAttribute("aria-pressed", "false");
    }
  }

  function setTheme(next) {
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    document.documentElement.setAttribute("data-theme", next);
    updateButton(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var el = document.documentElement;
    var current =
      el.getAttribute("data-theme") ||
      localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    el.setAttribute("data-theme", current);
    updateButton(current);

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next =
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";
        setTheme(next);
      });
    }

    // Listen for storage changes (other tabs) and update theme in this page
    window.addEventListener("storage", function (e) {
      if (e.key === "theme") {
        var newTheme = e.newValue || "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        updateButton(newTheme);
      }
    });
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const menus = Array.from(document.querySelectorAll("details.mk-dropdown"));

  menus.forEach(function (menu) {
    menu.addEventListener("toggle", function () {
      if (!menu.open) return;
      menus.forEach(function (other) {
        if (other !== menu) other.open = false;
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest("details.mk-dropdown")) return;
    menus.forEach(function (menu) { menu.open = false; });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menus.forEach(function (menu) { menu.open = false; });
    }
  });
});

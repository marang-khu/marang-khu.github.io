document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-button, .dropdown-submenu-button");

  navButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const item = button.closest(".nav-item, .dropdown-submenu");
      const isOpen = item.classList.contains("open");

      if (item.classList.contains("nav-item")) {
        document.querySelectorAll(".nav-item.open").forEach((el) => {
          if (el !== item) el.classList.remove("open");
        });
      } else {
        item.parentElement.querySelectorAll(":scope > .dropdown-submenu.open").forEach((el) => {
          if (el !== item) el.classList.remove("open");
        });
      }

      item.classList.toggle("open", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".nav-item.open, .dropdown-submenu.open").forEach((el) => {
      el.classList.remove("open");
      const btn = el.querySelector(":scope > button");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".nav-item.open, .dropdown-submenu.open").forEach((el) => {
        el.classList.remove("open");
        const btn = el.querySelector(":scope > button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  });
});

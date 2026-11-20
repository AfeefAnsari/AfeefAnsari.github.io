document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const filters = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll("[data-category]");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const selected = button.dataset.filter;
      projects.forEach((project) => {
        const categories = project.dataset.category.split(" ");
        project.hidden = selected !== "all" && !categories.includes(selected);
      });
    });
  });
});
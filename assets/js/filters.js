export function initFilters() {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-filter]");
    const list = group.nextElementSibling;
    const items = list?.querySelectorAll("[data-filter-item]") || [];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        items.forEach((item) => {
          item.hidden = filter !== "all" && item.dataset.filterItem !== filter;
        });
      });
    });
  });
}


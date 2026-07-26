// Filters job listings on the careers page by category.

document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".job-filter");
  const jobRows = document.querySelectorAll(".job-row");
  const noResults = document.getElementById("noResults");

  if (filters.length === 0) return;

  filters.forEach((filterBtn) => {
    filterBtn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      filterBtn.classList.add("active");

      const category = filterBtn.dataset.filter;
      let visibleCount = 0;

      jobRows.forEach((row) => {
        const match = category === "all" || row.dataset.category === category;
        row.classList.toggle("hidden", !match);
        if (match) visibleCount++;
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  });
});

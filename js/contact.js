// Handles the static contact form: prevents real submission, shows a
// success message instead. No backend — this is a static site.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (success) {
      success.classList.add("show");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    form.reset();
  });
});

// Lightweight scroll-reveal animation for cards and sections.

document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".product-card, .feature-item, .app-detail, .team-card, .value-card"
  );

  if (!("IntersectionObserver" in window) || revealTargets.length === 0) {
    return;
  }

  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => observer.observe(el));
});

// Handles navbar scroll state, mobile menu toggle, and active-link highlighting.

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 12) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  // Highlight the current page in the nav.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const pageMap = {
    "index.html": "home",
    "": "home",
    "apps.html": "apps",
    "about.html": "about",
    "careers.html": "careers",
    "investors.html": "investors",
    "contact.html": "contact",
  };
  const activeKey = pageMap[currentPage];
  if (activeKey) {
    document.querySelectorAll(`[data-nav="${activeKey}"]`).forEach((el) => {
      el.classList.add("active");
    });
  }
});

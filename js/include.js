// Injects shared nav and footer markup into every page.
// Using template strings instead of fetch() so the site still works
// when opened directly from the file system (no local server needed).

const ZC_NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="brand">
      <svg class="brand-mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#085041"/>
            <stop offset="50%" stop-color="#1D9E75"/>
            <stop offset="100%" stop-color="#97C459"/>
          </linearGradient>
        </defs>
        <circle cx="50" cy="28" r="20" fill="url(#navGrad)" opacity="0.95"/>
        <circle cx="28" cy="66" r="20" fill="url(#navGrad)" opacity="0.8"/>
        <circle cx="72" cy="66" r="20" fill="url(#navGrad)" opacity="0.6"/>
        <circle cx="50" cy="52" r="10" fill="#0A0F0D"/>
      </svg>
      Zareph Core
    </a>

    <div class="nav-links">
      <a href="index.html" data-nav="home">Home</a>
      <a href="apps.html" data-nav="apps">Apps</a>
      <a href="about.html" data-nav="about">About</a>
      <a href="careers.html" data-nav="careers">Careers</a>
      <a href="investors.html" data-nav="investors">Investors</a>
      <a href="contact.html" data-nav="contact">Contact</a>
    </div>

    <div class="nav-actions">
      <a href="apps.html" class="btn btn-outline btn-sm">Explore apps</a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="apps.html">Apps</a>
  <a href="about.html">About</a>
  <a href="careers.html">Careers</a>
  <a href="investors.html">Investors</a>
  <a href="contact.html">Contact</a>
  <a href="apps.html" class="btn btn-primary">Explore apps</a>
</div>
`;

const ZC_FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="brand">
          <svg class="brand-mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="28" r="20" fill="#1D9E75" opacity="0.95"/>
            <circle cx="28" cy="66" r="20" fill="#1D9E75" opacity="0.8"/>
            <circle cx="72" cy="66" r="20" fill="#1D9E75" opacity="0.6"/>
            <circle cx="50" cy="52" r="10" fill="#0A0A0A"/>
          </svg>
          Zareph Core
        </a>
        <p>Building the technologies behind how people share, talk, and connect — one app at a time.</p>
        <p style="font-size:13px; color: var(--text-muted); margin-top:-8px;">GTC Tower, Westlands<br>Nairobi, Kenya</p>
        <div class="footer-social">
          <a href="#" aria-label="X / Twitter">𝕏</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Apps</h5>
        <a href="apps.html#dailies">Dailies</a>
        <a href="apps.html#roadmap">What's next</a>
        <a href="investors.html">Investors</a>
      </div>

      <div class="footer-col">
        <h5>Company</h5>
        <a href="about.html">About us</a>
        <a href="careers.html">Careers</a>
        <a href="investors.html">Investors</a>
        <a href="contact.html#press">Press</a>
        <a href="contact.html">Contact</a>
      </div>

      <div class="footer-col">
        <h5>Resources</h5>
        <a href="help-center.html">Help center</a>
        <a href="safety-center.html">Safety center</a>
        <a href="developers.html">Developers</a>
        <a href="brand-guidelines.html">Brand guidelines</a>
      </div>

      <div class="footer-col">
        <h5>Legal</h5>
        <a href="privacy-policy.html">Privacy policy</a>
        <a href="terms-of-service.html">Terms of service</a>
        <a href="cookie-policy.html">Cookie policy</a>
        <a href="security.html">Security</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2026 Zareph Core Ltd. Nairobi, Kenya. All rights reserved.</span>
      <div class="legal-links">
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms-of-service.html">Terms</a>
        <a href="cookie-policy.html">Cookies</a>
      </div>
    </div>
  </div>
</footer>
`;

document.getElementById("nav-placeholder").innerHTML = ZC_NAV_HTML;
document.getElementById("footer-placeholder").innerHTML = ZC_FOOTER_HTML;

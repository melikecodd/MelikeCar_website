// ─── SMOOTH SCROLL ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ─── ACTIVE NAV LINK ─────────────────────────────────────────
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// ─── SKILL BAR ANIMATION ─────────────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const target = fill.getAttribute('data-width');
      setTimeout(() => { fill.style.width = target; }, 200);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ─── CONTACT FORM (mailto) ───────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const subject = `Portfolio İletişim - ${name}`;
    const body = encodeURIComponent(message);
    window.location.href = `mailto:melike.car@kun.edu.tr?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

// ─── NAVBAR SCROLL SHADOW ────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.boxShadow = window.scrollY > 40
    ? '0 4px 24px rgba(212,130,138,0.12)'
    : 'none';
});

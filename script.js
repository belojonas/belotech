document.addEventListener("DOMContentLoaded", () => {
  // MOBILE MENU
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // SCROLL REVEAL
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if(top < window.innerHeight - 100){ el.classList.add("active"); }
    });
  });

  // FORM SUBMISSION (UI only)
  const form = document.querySelector(".contact-form");
  const message = document.getElementById("form-message");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "✅ Message sent successfully!";
    form.reset();
  });

  // FOOTER YEAR
  document.getElementById("year").textContent = new Date().getFullYear();
});
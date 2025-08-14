// Typing animations with gradient color fix
const welcomeTyped = new Typed("#visitor-welcome", {
  strings: [
    "Welcome to my portfolio!",
    "Glad you're here 😊",
    "Explore my work below 👇"
  ],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
  onStringTyped: function () {
    // Apply gradient styling each time text changes
    const el = document.getElementById("visitor-welcome");
    el.style.background = "linear-gradient(90deg, #0077ff, #00ff7f)";
    el.style.backgroundClip = "text";
    el.style.webkitBackgroundClip = "text"; // For Chrome/Safari
    el.style.color = "transparent";
  }
});

// Second typing animation for role titles
new Typed('#element', {
  strings: [
    '<i>Web Developer</i>',
    '<i>UI Designer</i>',
    '<i>Programmer</i>'
  ],
  typeSpeed: 50,
  loop: true
});

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.style.position = "fixed";
toggle.style.top = "15px";
toggle.style.right = "15px";
toggle.style.zIndex = "9999";

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
  document.body.style.transition = "background-color 0.3s, color 0.3s";
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

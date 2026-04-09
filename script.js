// typing effect
const text = "Hi, I'm Ruhana";
let i = 0;

function typing() {
  if (document.getElementById("typing-text")) {
    if (i < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
}
typing();

// dark mode
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    darkBtn.textContent =
      document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
  });
}

// contact form
document.addEventListener("submit", (e) => {
  if (e.target.classList.contains("contact-form")) {
    e.preventDefault();
    const msg = document.getElementById("success-msg");
    if (msg) msg.style.display = "block";
    e.target.reset();
  }
});

// back to top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (topBtn) {
    topBtn.style.display =
      document.documentElement.scrollTop > 100 ? "block" : "none";
  }
});

if (topBtn) {
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}
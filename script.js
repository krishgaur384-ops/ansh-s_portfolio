// Dark / Light mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Animate skill bars on load
window.onload = () => {
  document.querySelectorAll(".progress").forEach(bar => {
    bar.style.width = bar.classList.contains("html") ? "90%" :
                      bar.classList.contains("css") ? "80%" : "50%";
  });
};

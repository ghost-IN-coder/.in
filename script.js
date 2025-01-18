// Typing Effect
const text = "Breaking Systems, Building Futures...";
let i = 0;
const heroText = document.querySelector(".hero-text");
function typeEffect() {
  if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50); // Adjust speed as needed
  }
}

// Loading Screen Logic
let load = 0;
const loadingScreen = document.getElementById("loading");
const progress = document.querySelector(".loading-progress");
function updateLoading() {
  if (load < 100) {
    load++;
    progress.style.width = `${load}%`;
    setTimeout(updateLoading, 30); // Adjust speed of progress bar
  } else {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      typeEffect(); // Start typing effect after loading
    }, 500); // Delay hiding the screen for smooth fade-out
  }
}

// Run the loading screen logic on page load
window.onload = updateLoading;

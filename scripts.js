// Typing Effect for Hero Section
const text = "Breaking Systems, Building Futures...";
let i = 0;
const heroText = document.querySelector(".hero-text");
function typeEffect() {
  if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
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
    setTimeout(updateLoading, 30);
  } else {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      typeEffect();
    }, 500);
  }
}

// Run the loading screen logic on page load
window.onload = updateLoading;

// Terminal Simulation (for the Live Terminal)
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");

const commands = [
  "Accessing files...",
  "Decrypting data...",
  "Connection established...",
  "Login successful...",
  "Running diagnostics..."
];

let currentCommand = 0;

function typeTerminalCommand() {
  if (currentCommand < commands.length) {
    terminalOutput.textContent += commands[currentCommand] + "\n";
    currentCommand++;
    setTimeout(typeTerminalCommand, 1500);
  }
}

terminalInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    terminalOutput.textContent += `$ ${terminalInput.value}\n`;
    terminalInput.value = "";
    if (currentCommand === commands.length) {
      typeTerminalCommand();
    }
  }
});

// Dynamic Theme Switching
const darkModeBtn = document.getElementById("dark-mode");
const lightModeBtn = document.getElementById("light-mode");

darkModeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#00ff00";
});

lightModeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
});

// Live Terminal
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");
const commands = [
  "Accessing files...",
  "Decrypting data...",
  "Connection established...",
];

terminalInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    terminalOutput.textContent += `> ${terminalInput.value}\n`;
    terminalInput.value = "";
  }
});

// User Greeting
const greetingElement = document.getElementById("user-greeting");
const hours = new Date().getHours();
if (hours < 12) {
  greetingElement.textContent = "Good Morning, Hacker!";
} else if (hours < 18) {
  greetingElement.textContent = "Good Afternoon, Hacker!";
} else {
  greetingElement.textContent = "Good Evening, Hacker!";
}

// Skills Chart (using Chart.js)
const ctx = document.getElementById("skills-chart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["JavaScript", "Python", "HTML", "CSS", "PHP"],
    datasets: [
      {
        label: "Skill Level",
        data: [85, 90, 80, 75, 70],
        backgroundColor: "#00ff00",
      },
    ],
  },
});

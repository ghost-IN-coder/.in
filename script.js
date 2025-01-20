// Typing Effect for Hero Section
const heroTitle = document.getElementById('hero-title');
const titleText = "Breaking Systems, Building Futures...";

let i = 0;

function typeEffect() {
  if (i < titleText.length) {
    heroTitle.textContent += titleText.charAt(i);
    i++;
    setTimeout(typeEffect, 100); // Adjust speed here
  }
}

// Loading Screen Logic
window.onload = function () {
  // Hide the loading screen after the page is loaded
  const loadingScreen = document.getElementById("loading");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => (loadingScreen.style.display = "none"), 500);
  }, 3000); // Wait for 3 seconds

  // Run the typing effect after the loading screen disappears
  setTimeout(typeEffect, 500);  // Run after a slight delay to ensure loading is complete
};
// Scroll Animation Trigger
const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');

function checkVisibility() {
  animatedElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Listen for scroll events (debounce to prevent multiple triggers)
window.addEventListener('scroll', debounce(checkVisibility, 100));

// Initial check to trigger animations if elements are already visible
window.onload = () => {
  // Hide the loading screen after the page is fully loaded
  const loadingScreen = document.getElementById("loading");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => loadingScreen.style.display = "none", 500);  // Fade-out effect
  }, 3000); // Keep loading screen for 3 seconds to simulate loading

  checkVisibility();  // Check for visibility immediately after loading
};

// Debounce function to optimize scroll event listener
function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}
// Matrix Rain Effect
const matrixBg = document.createElement("div");
matrixBg.classList.add("matrix-bg");
document.body.appendChild(matrixBg);

const columns = Math.floor(window.innerWidth / 20);

for (let i = 0; i < columns; i++) {
  const span = document.createElement("span");
  span.style.left = `${i * 20}px`;
  span.textContent = String.fromCharCode(
    0x30A0 + Math.floor(Math.random() * 96)
  );
  span.style.animationDelay = `${Math.random() * 5}s`;
  matrixBg.appendChild(span);
}

// Regenerate rain on resize
window.addEventListener("resize", () => {
  document.querySelector(".matrix-bg").remove();
  location.reload();
});

// Get the modal and the open/close buttons
const modal = document.getElementById('project-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const closeModalBtnAlt = document.getElementById('close-modal-btn');

// When the user clicks the button, open the modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// When the user clicks on <span> (x) or close button, close the modal
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

closeModalBtnAlt.addEventListener('click', function() {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
// Terminal Command Handling
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const runCommandBtn = document.getElementById('run-command');

const commands = {
  help: "Available commands: \n'help' - Show available commands\n'about' - Information about Ghost-IN-Coder\n'clear' - Clear the terminal",
  about: "Ghost-IN-Coder is an AI enthusiast and a hacker, exploring the future of technology and cybersecurity.",
  clear: () => {
    terminalOutput.innerHTML = '';  // Clear the terminal output
  },
};

function executeCommand() {
  const input = terminalInput.value.trim();

  if (input) {
    // Display the typed command in the terminal output
    terminalOutput.innerHTML += `> ${input}\n`;

    // Handle the command execution
    if (commands[input]) {
      terminalOutput.innerHTML += `${commands[input]}\n`;
    } else {
      terminalOutput.innerHTML += "Command not recognized. Type 'help' for a list of commands.\n";
    }

    // Scroll to the bottom
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Clear the input field for the next command
  terminalInput.value = '';
}

// Run the command when the button is clicked
runCommandBtn.addEventListener('click', executeCommand);

// Optional: Execute the command when 'Enter' is pressed
terminalInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    executeCommand();
  }
});
// Chatbot Logic
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotSend = document.getElementById("chatbot-send");

// Predefined responses
const responses = {
  hello: "Hi there! How can I assist you?",
  help: "You can ask me about the website or type 'bye' to end our chat.",
  bye: "Goodbye! Have a great day!",
};

// Handle user input
function handleChatbot() {
  const userInput = chatbotInput.value.trim();
  if (!userInput) return;

  // Display user message
  const userMessage = `<p><strong>User:</strong> ${userInput}</p>`;
  chatbotMessages.innerHTML += userMessage;

  // Generate bot response
  const response = responses[userInput.toLowerCase()] || "I'm sorry, I didn't understand that.";
  const botMessage = `<p><strong>Bot:</strong> ${response}</p>`;
  chatbotMessages.innerHTML += botMessage;

  // Scroll to the bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  // Clear input field
  chatbotInput.value = "";
}

// Event listeners for button and Enter key
chatbotSend.addEventListener("click", handleChatbot);
chatbotInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleChatbot();
});
// Highlight active section in navigation bar
const navLinks = document.querySelectorAll('.nav a');

function highlightActiveLink() {
  let scrollPosition = window.scrollY + 100; // Adjust for offset
  
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Listen for scroll events to update active link
window.addEventListener('scroll', highlightActiveLink);
// Highlight visible sections (scroll animation already added earlier)
window.addEventListener('scroll', debounce(checkVisibility, 100));
 
// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 400);
document.getElementById("vr-container").appendChild(renderer.domElement);

// Add a cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// Resize the renderer on window resize
window.addEventListener("resize", () => {
  const container = document.getElementById("vr-container");
  const aspect = container.clientWidth / container.clientHeight;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

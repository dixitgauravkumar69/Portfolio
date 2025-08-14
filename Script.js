// Typing effect with color + blinking cursor
function typeText(elementId, texts, typingSpeed = 100, backSpeed = 50, pauseTime = 1500) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const element = document.getElementById(elementId);

  // Create span for text & cursor
  element.innerHTML = `<span class="typing-text"></span><span class="cursor"></span>`;
  const textSpan = element.querySelector(".typing-text");

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    textSpan.textContent = currentText.substring(0, charIndex);

    let delay = isDeleting ? backSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, delay);
  }

  type();
}

// Run typing animations
typeText("visitor-welcome", [
  "Welcome to my portfolio!",
  "Glad you're here 😊",
  "Explore my work below 👇"
]);

typeText("element", [
  "Web Developer",
  "UI Designer",
  "Programmer"
]);



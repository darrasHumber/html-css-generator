import { getElementControls } from "./getElementContols.js";
import {
  generateButton,
  generateHeader,
  generateNavbar,
  generateFooter,
  generateForm,
  generateCard,
  generateFlexContainer,
  generateInputField,
} from "./elementsGenerators.js";
// Copy to clipboard functionality
function setupCopyButtons() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".html-copy-button, .css-copy-button")) {
      const targetId = e.target.getAttribute("data-target");
      const codeElement = document.getElementById(targetId);

      if (codeElement) {
        navigator.clipboard
          .writeText(codeElement.textContent)
          .then(() => {
            // Visual feedback
            const originalText = e.target.textContent;
            e.target.textContent = "Copied!";
            e.target.style.backgroundColor = "#28a745"; // @Hashim Update color for what you like

            // Reset button after 2 seconds
            setTimeout(() => {
              e.target.textContent = originalText;
              e.target.style.backgroundColor = "";
            }, 2000);
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
            alert("Failed to copy code. Please try again.");
          });
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupCopyButtons();
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Function to toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      themeIcon.classList.remove("fa-toggle-off");
      themeIcon.classList.add("fa-toggle-on");
    } else {
      themeIcon.classList.remove("fa-toggle-on");
      themeIcon.classList.add("fa-toggle-off");
    }
  }

  // Event listener for theme toggle button
  themeToggle.addEventListener("click", toggleDarkMode);

  // Get all element cards
  const headerCard = document.getElementById("headerCard");
  const navbarCard = document.getElementById("navbarCard");
  const buttonCard = document.getElementById("buttonCard");
  const cardCard = document.getElementById("cardCard");
  const formCard = document.getElementById("formCard");
  const footerCard = document.getElementById("footerCard");
  const flexCard = document.getElementById("flexCard");
  const inputCard = document.getElementById("inputCard");

  // Get customization page elements
  const welcomePage = document.getElementById("welcomePage");
  const customizationPage = document.getElementById("customizationPage");
  const backButton = document.getElementById("backButton");
  const elementTitle = document.getElementById("elementTitle");
  const elementControls = document.getElementById("elementControls");
  const elementOutput = document.getElementById("elementOutput");
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  // Function to show a warning message
  function showWarning() {
    alert("Coming Soon!");
  }

  // Function to show the customization page
  function showCustomizationPage(element) {
    welcomePage.style.display = "none";
    customizationPage.classList.add("visible");
    elementTitle.textContent = `Generate ${
      element.charAt(0).toUpperCase() + element.slice(1)
    }`;
    elementControls.innerHTML = getElementControls(element);
    elementOutput.innerHTML = "";
    htmlCode.textContent = "";
    cssCode.textContent = "";
  }

  // Function to show the welcome page
  function showWelcomePage() {
    welcomePage.style.display = "block";
    customizationPage.classList.remove("visible");
  }

  // Function to generate the element based on user input
  function generateElement() {
    const element = elementTitle.textContent
      .toLowerCase()
      .replace("generate ", "");
    switch (element) {
      case "header":
        generateHeader();
        break;
      case "navbar":
        generateNavbar();
        break;
      case "button":
        generateButton();
        break;
      case "footer":
        generateFooter();
        break;
      case "form":
        generateForm();
        break;
      case "card":
        generateCard();
        break;
      case "flex":
        generateFlexContainer();
        break;
      case "input-field":
        generateInputField();
        break;
    }
  }

  // Event listeners for card clicks
  headerCard.addEventListener("click", () => showCustomizationPage("header"));
  navbarCard.addEventListener("click", () => showCustomizationPage("navbar"));
  buttonCard.addEventListener("click", () => showCustomizationPage("button"));
  cardCard.addEventListener("click", () => showCustomizationPage("card"));
  formCard.addEventListener("click", () => showCustomizationPage("form"));
  footerCard.addEventListener("click", () => showCustomizationPage("footer"));
  flexCard.addEventListener("click", () => showCustomizationPage("flex"));
  inputCard.addEventListener("click", () =>
    showCustomizationPage("input-field")
  );

  // Event listener for back button
  backButton.addEventListener("click", showWelcomePage);

  // Event listener for input changes
  elementControls.addEventListener("input", generateElement);
  elementControls.addEventListener("change", generateElement);

  const typed = new Typed("header p", {
    strings: [
      "Craft your perfect web elements with ease!",
      "Create beautiful UI components in seconds",
      "Generate and customize with a click",
    ],
    typeSpeed: 80,
    backSpeed: 60,
    startDelay: 1500,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    fadeOut: false,
    fadeOutClass: "",
    fadeOutDelay: 0,
    smartBackspace: true,
  });

  // Add animation classes to cards with delay
  const cards = document.querySelectorAll(".element-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.3}s`;
    card.classList.add("animate__animated", "animate__fadeInUp");
  });
});

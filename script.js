import { getElementControls } from "./getElementContols.js";
import {
  generateButton,
  generateHeader,
  generateNavbar,
  generateFooter,
  generateForm,
} from "./elementsGenerators.js";
function copyCode(elementId) {
  const codeElement = document.getElementById(elementId);
  if (codeElement) {
    navigator.clipboard
      .writeText(codeElement.textContent)
      .then(() => alert("Code copied to clipboard!"))
      .catch(() => alert("Failed to copy code."));
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}
document.addEventListener("DOMContentLoaded", () => {
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
  const more1Card = document.getElementById("more1Card");
  const more2Card = document.getElementById("more2Card");

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
    }
  }

  // Event listeners for card clicks
  headerCard.addEventListener("click", () => showCustomizationPage("header"));
  navbarCard.addEventListener("click", () => showCustomizationPage("navbar"));
  buttonCard.addEventListener("click", () => showCustomizationPage("button"));
  cardCard.addEventListener("click", showWarning);
  formCard.addEventListener("click", () => showCustomizationPage("form"));
  footerCard.addEventListener("click", () => showCustomizationPage("footer"));
  more1Card.addEventListener("click", showWarning);
  more2Card.addEventListener("click", showWarning);

  // Event listener for back button
  backButton.addEventListener("click", showWelcomePage);

  // Event listener for input changes
  elementControls.addEventListener("input", generateElement);
  elementControls.addEventListener("change", generateElement);
});

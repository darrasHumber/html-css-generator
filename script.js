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

  // Function to get controls for the selected element
  function getElementControls(element) {
    const defaultClassName = `generated-${element}`;

    switch (element) {
      case "header":
        return `
          <div class="form-group">
            <label for="className">Class Name:</label>
            <input type="text" id="className" value="${defaultClassName}">
          </div>
          <div class="form-group">
            <label for="headerText">Header Text:</label>
            <input type="text" id="headerText" placeholder="Enter header text">
          </div>
          <div class="form-group">
            <label for="fontSize">Font Size (px):</label>
            <input type="number" id="fontSize" placeholder="e.g., 24">
          </div>
          <div class="form-group">
            <label for="textColor">Text Color:</label>
            <input type="color" id="textColor" value="#000000">
          </div>
          <div class="form-group">
            <label for="backgroundColor">Background Color:</label>
            <input type="color" id="backgroundColor" value="#ffffff">
          </div>
          <div class="form-group">
            <label for="headerAlignment">Alignment:</label>
            <select id="headerAlignment">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div class="form-group">
            <label for="headerPadding">Padding (px):</label>
            <input type="number" id="headerPadding" placeholder="e.g., 10">
          </div>
          <div class="form-group">
            <label for="headerMargin">Margin (px):</label>
            <input type="number" id="headerMargin" placeholder="e.g., 10">
          </div>
        `;
      case "navbar":
        return `
          <div class="form-group">
            <label for="className">Class Name:</label>
            <input type="text" id="className" value="${defaultClassName}">
          </div>
          <div class="form-group">
            <label for="navbarItems">Navbar Items (comma-separated):</label>
            <input type="text" id="navbarItems" placeholder="e.g., Home, About, Contact">
          </div>
          <div class="form-group">
            <label for="navbarAlignment">Alignment:</label>
            <select id="navbarAlignment">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div class="form-group">
            <label for="navbarBgColor">Background Color:</label>
            <input type="color" id="navbarBgColor" value="#333333">
          </div>
          <div class="form-group">
            <label for="navbarTextColor">Text Color:</label>
            <input type="color" id="navbarTextColor" value="#ffffff">
          </div>
        `;
      case "button":
        return `
              <div class="form-group">
                <label for="className">Class Name:</label>
                <input type="text" id="className" value="${defaultClassName}">
              </div>

              <div class="form-group">
              <label for="buttonText">Button Text:</label>
              <input type="text" id="buttonText" placeholder="e.g., Click Me">
            </div>
            <div class="form-group">
              <label for="buttonBgColor">Button Background Color:</label>
              <input type="color" id="buttonBgColor" value="#007bff">
            </div>
            <div class="form-group">
              <label for="buttonTextColor">Button Text Color:</label>
              <input type="color" id="buttonTextColor" value="#ffffff">
            </div>
            <div class="form-group">
              <label for="buttonPadding">Button Padding (px):</label>
              <input type="number" id="buttonPadding" placeholder="e.g., 10">
            </div>
            `;
      default:
        return "";
    }
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
    }
  }

  // Function to generate the header
  function generateHeader() {
    const className =
      document.getElementById("className").value || "generated-header";
    const headerText = document.getElementById("headerText").value;
    const fontSize = document.getElementById("fontSize").value || "24"; // Default value if empty
    const textColor = document.getElementById("textColor").value || "#000000"; // Default value if empty
    const backgroundColor =
      document.getElementById("backgroundColor").value || "#ffffff"; // Default value if empty
    const alignment =
      document.getElementById("headerAlignment").value || "left"; // Default value if empty
    const padding = document.getElementById("headerPadding").value || "10"; // Default value if empty
    const margin = document.getElementById("headerMargin").value || "10"; // Default value if empty

    // Inject Dynamic CSS
    const dynamicStyles = `
      .${className} {
        font-size: ${fontSize}px;
        color: ${textColor};
        background-color: ${backgroundColor};
        padding: ${padding}px;
        margin: ${margin}px;
        text-align: ${alignment};
        border-radius: 4px;
      }
    `;
    document.getElementById("dynamicStyles").textContent = dynamicStyles;
    //console.log(dynamicStyles);

    // Create Header Element
    const header = document.createElement("header");
    header.textContent = headerText;
    header.classList.add(className);

    //console.log("Header Element:", header); // Debugging: Log the header element

    // Display Header
    const elementOutput = document.getElementById("elementOutput");
    elementOutput.innerHTML = "";
    elementOutput.appendChild(header);

    // Generate HTML and CSS Code
    const htmlCode = document.getElementById("htmlCode");
    const cssCode = document.getElementById("cssCode");
    htmlCode.textContent = `
  <header class="${className}">
    ${headerText}
  </header>
    `;
    cssCode.textContent = dynamicStyles;
  }

  // Function to generate the navbar
  function generateNavbar() {
    const className =
      document.getElementById("className").value || "generated-navbar";
    const navbarItems = document
      .getElementById("navbarItems")
      .value.split(",")
      .map((item) => item.trim());
    const alignment = document.getElementById("navbarAlignment").value;
    const bgColor = document.getElementById("navbarBgColor").value;
    const textColor = document.getElementById("navbarTextColor").value;

    const navLinkClass = `${className}-link`;

    // Inject Dynamic CSS
    const dynamicStyles = `
      .${className} {
        display: flex;
        gap: 10px;
        background-color: ${bgColor};
        padding: 10px;
        border-radius: 4px;
        justify-content: ${alignment};
      }
  
      .${navLinkClass} {
        color: ${textColor};
        text-decoration: none;
        padding: 5px 10px;
      }
  
      .${navLinkClass}:hover {
        background-color: #555;
      }
    `;
    document.getElementById("dynamicStyles").textContent = dynamicStyles;

    // Create Navbar Element
    const navbar = document.createElement("nav");
    navbar.classList.add(className);

    navbarItems.forEach((item) => {
      const link = document.createElement("a");
      link.textContent = item;
      link.classList.add(navLinkClass);
      link.href = "#";
      navbar.appendChild(link);
    });

    // Display Navbar
    const elementOutput = document.getElementById("elementOutput");
    elementOutput.innerHTML = "";
    elementOutput.appendChild(navbar);

    // Generate HTML and CSS Code
    const htmlCode = document.getElementById("htmlCode");
    const cssCode = document.getElementById("cssCode");
    htmlCode.textContent = `
  <nav class="${className}">
    ${navbarItems
      .map((item) => `<a href="#" class="${navLinkClass}">${item}</a>`)
      .join("\n  ")}
  </nav>
    `;
    cssCode.textContent = dynamicStyles;
  }

  // Generate Button
  function generateButton() {
    const className =
      document.getElementById("className").value || "generated-button";
    const buttonText = document.getElementById("buttonText").value;
    const buttonBgColor =
      document.getElementById("buttonBgColor").value || "#007bff";
    const buttonTextColor =
      document.getElementById("buttonTextColor").value || "#ffffff";
    const buttonPadding =
      document.getElementById("buttonPadding").value || "10";

    // Inject Dynamic CSS
    const dynamicStyles = `
      .${className} {
        background-color: ${buttonBgColor};
        color: ${buttonTextColor};
        padding: ${buttonPadding}px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
  
      .${className}:hover {
        opacity: 0.9;
      }
  
      .${className}:active {
        transform: scale(0.98);
      }
    `;
    document.getElementById("dynamicStyles").textContent = dynamicStyles;

    // Create Button Element
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.add(className);

    // Display Button (clear previous content first)
    const elementOutput = document.getElementById("elementOutput");
    elementOutput.innerHTML = "";
    elementOutput.appendChild(button);

    // Generate HTML and CSS Code
    const htmlCode = document.getElementById("htmlCode");
    const cssCode = document.getElementById("cssCode");
    htmlCode.textContent = `
  <button class="${className}">
    ${buttonText}
  </button>
    `;
    cssCode.textContent = dynamicStyles;
  }

  // Event listeners for card clicks
  headerCard.addEventListener("click", () => showCustomizationPage("header"));
  navbarCard.addEventListener("click", () => showCustomizationPage("navbar"));
  buttonCard.addEventListener("click", () => showCustomizationPage("button"));
  cardCard.addEventListener("click", showWarning);
  formCard.addEventListener("click", showWarning);
  footerCard.addEventListener("click", showWarning);
  more1Card.addEventListener("click", showWarning);
  more2Card.addEventListener("click", showWarning);

  // Event listener for back button
  backButton.addEventListener("click", showWelcomePage);

  // Event listener for input changes
  elementControls.addEventListener("input", generateElement);
  elementControls.addEventListener("change", generateElement);
});

// Function to generate the header
function generateHeader() {
  const className =
    document.getElementById("className").value || "generated-header";
  const headerText = document.getElementById("headerText").value;
  const fontSize = document.getElementById("fontSize").value || "24"; // Default value if empty
  const textColor = document.getElementById("textColor").value || "#000000"; // Default value if empty
  const backgroundColor =
    document.getElementById("backgroundColor").value || "#ffffff"; // Default value if empty
  const alignment = document.getElementById("headerAlignment").value || "left"; // Default value if empty
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
  const buttonPadding = document.getElementById("buttonPadding").value || "10";

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

function generateFooter() {
  // Gather inputs with fallback default values
  const className = document.getElementById("className").value || "generated-footer";
  const footerText = document.getElementById("footerText").value;
  const bgColor = document.getElementById("footerBgColor").value || "#333333";
  const textColor = document.getElementById("footerTextColor").value || "#ffffff";
  const padding = document.getElementById("footerPadding").value || "10";
  const margin = document.getElementById("footerMargin").value || "10";
  const alignment = document.getElementById("footerAlignment").value || "center";

  // Build dynamic CSS for the footer
  const dynamicStyles = `
    .${className} {
      background-color: ${bgColor};
      color: ${textColor};
      padding: ${padding}px;
      margin: ${margin}px;
      text-align: ${alignment};
      border-radius: 4px;
    }
  `;
  // Inject the dynamic styles into the page
  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create the footer element
  const footer = document.createElement("footer");
  footer.textContent = footerText;
  footer.classList.add(className);

  // Display the footer element in the output area
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(footer);

  // Generate HTML and CSS code snippets for display
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");
  htmlCode.textContent = `
<footer class="${className}">
  ${footerText}
</footer>
  `;
  cssCode.textContent = dynamicStyles;
}

export { generateHeader, generateNavbar, generateButton, generateFooter };

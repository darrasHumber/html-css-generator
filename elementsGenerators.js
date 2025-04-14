// Function to generate the header
function generateHeader() {
  const className =
    document.getElementById("className").value || "generated-header";
  const headerText =
    document.getElementById("headerText").value || "Your Header Text";
  const fontSize = document.getElementById("fontSize").value || "32";
  const textColor = document.getElementById("textColor").value || "#000000";
  const backgroundColor =
    document.getElementById("backgroundColor").value || "#ffffff";
  const alignment =
    document.getElementById("headerAlignment").value || "center";
  const padding = document.getElementById("headerPadding").value || "20";
  const margin = document.getElementById("headerMargin").value || "0";

  // New header options
  const headerType = document.getElementById("headerType")?.value || "h1";
  const fontFamily =
    document.getElementById("headerFont")?.value || "Arial, sans-serif";
  const fontWeight = document.getElementById("headerWeight")?.value || "normal";
  const textShadow = document.getElementById("textShadow")?.checked
    ? "2px 2px 4px rgba(0,0,0,0.3)"
    : "none";
  const borderBottom = document.getElementById("headerBorder")?.checked
    ? `3px solid ${textColor}`
    : "none";
  const hoverEffect = document.getElementById("hoverEffect")?.checked
    ? "scale(1.02)"
    : "none";

  // Dynamic CSS
  const dynamicStyles = `
    .${className} {
      /*font-size: ${fontSize}px;*/
      color: ${textColor};
      background-color: ${backgroundColor};
      padding: ${padding}px;
      margin: ${margin}px;
      text-align: ${alignment};
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      text-shadow: ${textShadow};
      border-bottom: ${borderBottom};
      transition: all 0.3s ease;
    }
    
    .${className}:hover {
      transform: ${hoverEffect};
    }
  `;
  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create Header Element
  const header = document.createElement(headerType); // Now supports h1-h6
  header.textContent = headerText;
  header.classList.add(className);

  // Display Header
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(header);

  // Generate HTML and CSS Code
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  htmlCode.textContent = `<${headerType} class="${className}">\n  ${headerText}\n</${headerType}>`;
  cssCode.textContent = dynamicStyles;
}
// Function to generate the navbar
function generateNavbar() {
  const className =
    document.getElementById("className").value || "generated-navbar";
  const navbarItems = document
    .getElementById("navbarItems")
    .value.split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const navbarType = document.getElementById("navbarType").value || "left";
  const navbarStyle = document.getElementById("navbarStyle").value || "basic";
  const bgColor = document.getElementById("navbarBgColor").value || "#333333";
  const textColor =
    document.getElementById("navbarTextColor").value || "#ffffff";
  const hoverColor =
    document.getElementById("navbarHoverColor").value || "#555555";
  const isSticky = document.getElementById("navbarSticky").checked;
  const navPadding = document.getElementById("navPadding").value || "1rem";
  const navMargin = document.getElementById("navMargin").value || "0";
  const itemPadding =
    document.getElementById("itemPadding").value || "0.5rem 1rem";

  const navLinkClass = `${className}-link`;

  let dynamicStyles = `
    .${className} {
      background-color: ${bgColor};
      padding: ${navPadding};
      margin: ${navMargin};
      ${isSticky ? "position: sticky; top: 0; z-index: 1000;" : ""}
      ${navbarType === "vertical" ? "width: 200px; height: 100vh;" : ""}
    }
    
    .${className}-container {
      display: flex;
      ${navbarType === "vertical" ? "flex-direction: column;" : ""}
      ${navbarType === "center" ? "justify-content: center;" : ""}
      ${navbarType === "right" ? "justify-content: flex-end;" : ""}
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 1rem;
    }
    
    .${navLinkClass} {
      color: ${textColor};
      text-decoration: none;
      padding: ${itemPadding};
      border-radius: ${navbarStyle === "pill" ? "50px" : "0"};
      transition: all 0.3s ease;
      ${
        navbarStyle === "underline"
          ? "border-bottom: 2px solid transparent;"
          : ""
      }
    }
    
    .${navLinkClass}:hover {
      color: ${textColor};
      ${navbarStyle === "basic" ? `background-color: ${hoverColor};` : ""}
      ${
        navbarStyle === "pill"
          ? `background-color: ${hoverColor}; transform: translateY(-2px);`
          : ""
      }
      ${
        navbarStyle === "underline" ? `border-bottom-color: ${hoverColor};` : ""
      }
    }
  `;

  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  const navbar = document.createElement("nav");
  navbar.classList.add(className);

  const navContainer = document.createElement("ul");
  navContainer.classList.add(`${className}-container`);

  navbarItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = item;
    link.href = "#";
    link.classList.add(navLinkClass);
    listItem.appendChild(link);
    navContainer.appendChild(listItem);
  });

  navbar.appendChild(navContainer);

  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(navbar);

  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  let html = `<nav class="${className}">
  <ul class="${className}-container">\n\t`;
  html += navbarItems
    .map(
      (item) => `<li>
          <a href="#" class="${navLinkClass}">${item}</a>
       </li>`
    )
    .join("\n\t");
  html += `\n  </ul>
  </nav>`;

  htmlCode.textContent = html;
  cssCode.textContent = dynamicStyles;
}
// Generate Button
function generateButton() {
  const className =
    document.getElementById("className").value || "generated-button";
  const buttonText = document.getElementById("buttonText").value || "Click Me";
  const buttonType = document.getElementById("buttonType").value || "solid";
  const buttonSize = document.getElementById("buttonSize").value || "medium";
  const bgColor = document.getElementById("buttonBgColor").value || "#3a86ff";
  const textColor =
    document.getElementById("buttonTextColor").value || "#ffffff";
  const hoverColor =
    document.getElementById("buttonHoverColor").value || "#2667cc";
  const borderRadius =
    document.getElementById("buttonBorderRadius").value || "4";
  const widthType = document.getElementById("buttonWidth").value || "auto";
  const customWidth =
    document.getElementById("buttonCustomWidth")?.value || "200";
  const hasShadow = document.getElementById("buttonShadow").checked;
  const hasIcon = document.getElementById("buttonIcon").checked;
  const iconClass =
    document.getElementById("buttonIconSelect")?.value || "fa-download";

  let dynamicStyles = `.${className}{\n`;
  dynamicStyles += `display:inline-flex;\n`;
  dynamicStyles += `align-items:center;\n`;
  dynamicStyles += `justify-content:center;\n`;
  dynamicStyles += `border:none;\n`;
  dynamicStyles += `cursor:pointer;\n`;
  dynamicStyles += `transition:all 0.3s ease;\n`;
  dynamicStyles += `font-family:'Poppins',sans-serif;\n`;
  dynamicStyles += `font-weight:500;\n`;
  dynamicStyles += `gap:8px;\n`;

  // Button Type
  if (buttonType === "solid") {
    dynamicStyles += `background-color:${bgColor};\n`;
    dynamicStyles += `color:${textColor};\n`;
    dynamicStyles += `border:1px solid ${bgColor};\n`;
  } else if (buttonType === "outline") {
    dynamicStyles += `background-color:transparent;\n`;
    dynamicStyles += `color:${bgColor};\n`;
    dynamicStyles += `border:1px solid ${bgColor};\n`;
  } else if (buttonType === "ghost") {
    dynamicStyles += `background-color:transparent;\n`;
    dynamicStyles += `color:${bgColor};\n`;
    dynamicStyles += `border:1px solid transparent;\n`;
  } else if (buttonType === "link") {
    dynamicStyles += `background-color:transparent;\n`;
    dynamicStyles += `color:${bgColor};\n`;
    dynamicStyles += `border:none;\n`;
    dynamicStyles += `text-decoration:underline;\n`;
  }

  // Button Size
  if (buttonSize === "small") {
    dynamicStyles += `padding:6px 12px;\n`;
    dynamicStyles += `font-size:12px;\n`;
  } else if (buttonSize === "medium") {
    dynamicStyles += `padding:10px 20px;\n`;
    dynamicStyles += `font-size:14px;\n`;
  } else if (buttonSize === "large") {
    dynamicStyles += `padding:14px 28px;\n`;
    dynamicStyles += `font-size:16px;\n`;
  }

  // Additional Styles
  dynamicStyles += `border-radius:${borderRadius}px;\n`;
  if (widthType === "full") dynamicStyles += `width:100%;\n`;
  if (widthType === "custom") dynamicStyles += `width:${customWidth}px;\n`;
  if (hasShadow) dynamicStyles += `box-shadow:0 4px 6px rgba(0,0,0,0.1);\n`;
  dynamicStyles += `}\n`;

  // Hover States
  dynamicStyles += `.${className}:hover{\n`;
  if (buttonType === "solid")
    dynamicStyles += `background-color:${hoverColor};\n`;
  if (buttonType === "outline") {
    dynamicStyles += `background-color:${bgColor};\n`;
    dynamicStyles += `color:${textColor};\n`;
  }
  if (buttonType === "ghost")
    dynamicStyles += `background-color:rgba(58,134,255,0.1);\n`;
  if (buttonType === "link") dynamicStyles += `opacity:0.8;\n`;
  if (hasShadow) dynamicStyles += `box-shadow:0 6px 8px rgba(0,0,0,0.15);\n`;
  if (hasShadow || buttonType === "link")
    dynamicStyles += `transform:translateY(-1px);\n`;
  dynamicStyles += `}\n`;

  // Active State
  dynamicStyles += `.${className}:active{\n`;
  dynamicStyles += `transform:scale(0.98);\n`;
  dynamicStyles += `}\n`;

  // Icon Style
  if (hasIcon) {
    dynamicStyles += `.${className}-icon{\n`;
    dynamicStyles += `font-size:${
      buttonSize === "small"
        ? "12px"
        : buttonSize === "medium"
        ? "14px"
        : "16px"
    };\n`;
    dynamicStyles += `}\n`;
  }

  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create Button Element
  const button = document.createElement("button");
  button.textContent = buttonText;
  button.classList.add(className);

  if (hasIcon) {
    const icon = document.createElement("i");
    icon.className = `fas ${iconClass} ${className}-icon`;
    button.prepend(icon);
  }

  // Display and generate code
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(button);

  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  let html = `<button class="${className}">\n`;
  if (hasIcon) html += `\t<i class="fas ${iconClass} ${className}-icon"></i>`;
  html += `\n\t${buttonText}\n</button>`;

  htmlCode.textContent = html;
  cssCode.textContent = dynamicStyles;
}

function generateFooter() {
  // Gather inputs with fallback default values
  const className =
    document.getElementById("className").value || "generated-footer";
  const footerStyle = document.getElementById("footerStyle").value || "simple";
  const footerText =
    document.getElementById("footerText").value ||
    "© 2025 Your Company. All rights reserved.";
  const includeLinks = document.getElementById("includeLinks").checked;
  const footerLinks = document
    .getElementById("footerLinks")
    .value.split(",")
    .map((link) => link.trim());
  const bgColor = document.getElementById("footerBgColor").value || "#333333";
  const textColor =
    document.getElementById("footerTextColor").value || "#ffffff";
  const linkColor =
    document.getElementById("footerLinkColor").value || "#aaaaaa";
  const padding = document.getElementById("footerPadding").value || "30";
  const alignment =
    document.getElementById("footerAlignment").value || "center";

  // Build dynamic CSS for the footer
  let dynamicStyles = `
    .${className} {
      background-color: ${bgColor};
      color: ${textColor};
      padding: ${padding}px;
      text-align: ${alignment};
    }
    
    .${className} a {
      color: ${linkColor};
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .${className} a:hover {
      color: ${textColor};
    }
    
    .${className}-container {
      max-width: 1200px;
      margin: 0 auto;
    }
  `;

  if (footerStyle === "two-column") {
    dynamicStyles += `
      .${className}-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .${className}-links {
        display: flex;
        gap: 20px;
      }
      
      @media (max-width: 768px) {
        .${className}-container {
          flex-direction: column;
        }
        
        .${className}-links {
          margin-bottom: 15px;
        }
      }
    `;
  } else {
    dynamicStyles += `
      .${className}-links {
        margin-bottom: 15px;
      }
      
      .${className}-links a {
        margin: 0 10px;
      }
    `;
  }

  // Inject the dynamic styles into the page
  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create the footer element
  const footer = document.createElement("footer");
  footer.classList.add(className);

  const footerContainer = document.createElement("div");
  footerContainer.classList.add(`${className}-container`);

  // Build footer based on style selection
  if (footerStyle === "simple") {
    // Simple footer
    if (includeLinks) {
      const linksDiv = document.createElement("div");
      linksDiv.classList.add(`${className}-links`);

      footerLinks.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = "#";
        anchor.textContent = link;
        linksDiv.appendChild(anchor);
      });

      footerContainer.appendChild(linksDiv);
    }

    const copyright = document.createElement("p");
    copyright.textContent = footerText;
    footerContainer.appendChild(copyright);
  } else if (footerStyle === "two-column") {
    // Two-column footer
    if (includeLinks) {
      const linksDiv = document.createElement("div");
      linksDiv.classList.add(`${className}-links`);

      footerLinks.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = "#";
        anchor.textContent = link;
        linksDiv.appendChild(anchor);
      });

      footerContainer.appendChild(linksDiv);
    }

    const copyright = document.createElement("p");
    copyright.textContent = footerText;
    footerContainer.appendChild(copyright);
  }

  footer.appendChild(footerContainer);

  // Display the footer element in the output area
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(footer);

  // Generate HTML and CSS code snippets for display
  let htmlCode = "";

  if (footerStyle === "simple") {
    htmlCode = `<footer class="${className}">
  <div class="${className}-container">
    ${
      includeLinks
        ? `<div class="${className}-links">
      ${footerLinks.map((link) => `<a href="#">${link}</a>`).join("\n      ")}
    </div>`
        : ""
    }
    <p>${footerText}</p>
  </div>
</footer>`;
  } else if (footerStyle === "two-column") {
    htmlCode = `<footer class="${className}">
  <div class="${className}-container">
    ${
      includeLinks
        ? `<div class="${className}-links">
      ${footerLinks.map((link) => `<a href="#">${link}</a>`).join("\n      ")}
    </div>`
        : ""
    }
    <p>${footerText}</p>
  </div>
</footer>`;
  }

  document.getElementById("htmlCode").textContent = htmlCode;
  document.getElementById("cssCode").textContent = dynamicStyles;

  // Add event listener for links toggle
  document
    .getElementById("includeLinks")
    .addEventListener("change", function () {
      document.getElementById("linksGroup").style.display = this.checked
        ? "block"
        : "none";
    });
}

function generateForm() {
  // Default values
  const className =
    document.getElementById("className").value || "generated-form";
  const formTitle = document.getElementById("formTitle").value || "Form";
  const formFieldsInput =
    document.getElementById("formFields").value || "Name, Email, Message";
  const fieldTypesInput =
    document.getElementById("fieldTypes").value || "text, email, textarea";
  const submitText = document.getElementById("submitText").value || "Submit";

  // Styling values
  const bgColor = document.getElementById("formBgColor").value || "#ffffff";
  const textColor = document.getElementById("formTextColor").value || "#333333";
  const padding = document.getElementById("formPadding").value || "20";
  const width = document.getElementById("formWidth").value || "400";

  // Parse fields and types
  const formFields = parseFieldsWithCommas(formFieldsInput);
  let fieldTypes = parseFieldsWithCommas(fieldTypesInput);

  // Ensure matching number of field types
  while (fieldTypes.length < formFields.length) {
    fieldTypes.push("text");
  }

  // Generate CSS
  const dynamicStyles = `
    .${className} {
      background-color: ${bgColor};
      color: ${textColor};
      padding: ${padding}px;
      width: ${width}%;
      margin: 20px auto;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .${className} h3 {
      margin-top: 0;
      margin-bottom: 20px;
    }
    
    .${className}-field {
      margin-bottom: 15px;
    }
    
    .${className}-field label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    
    .${className}-field input,
    .${className}-field textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }
    
    .${className}-field textarea {
      min-height: 100px;
      resize: vertical;
    }
    
    .${className}-submit {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create form element
  const form = document.createElement("form");
  form.classList.add(className);

  // Add title
  if (formTitle) {
    const title = document.createElement("h3");
    title.textContent = formTitle;
    form.appendChild(title);
  }

  // Add form fields
  formFields.forEach((field, index) => {
    const fieldType = fieldTypes[index].toLowerCase();
    const fieldGroup = document.createElement("div");
    fieldGroup.classList.add(`${className}-field`);

    const label = document.createElement("label");
    label.textContent = field;
    const fieldId = `${className}-${field.toLowerCase().replace(/\s+/g, "-")}`;
    label.htmlFor = fieldId;
    fieldGroup.appendChild(label);

    let input;
    if (fieldType === "textarea") {
      input = document.createElement("textarea");
      input.rows = 4;
    } else {
      input = document.createElement("input");
      input.type = fieldType;
    }

    input.id = fieldId;
    input.name = field.toLowerCase().replace(/\s+/g, "_");
    fieldGroup.appendChild(input);
    form.appendChild(fieldGroup);
  });

  // Add submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add(`${className}-submit`);
  submitButton.textContent = submitText;
  form.appendChild(submitButton);

  // Display form
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(form);

  // Generate code output
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  let html = `<form class="${className}">\n`;
  if (formTitle) {
    html += `  <h3>${formTitle}</h3>\n`;
  }

  formFields.forEach((field, index) => {
    const fieldType = fieldTypes[index].toLowerCase();
    const fieldId = `${className}-${field.toLowerCase().replace(/\s+/g, "-")}`;
    const fieldName = field.toLowerCase().replace(/\s+/g, "_");

    html += `  <div class="${className}-field">\n`;
    html += `    <label for="${fieldId}">${field}</label>\n`;

    if (fieldType === "textarea") {
      html += `    <textarea id="${fieldId}" name="${fieldName}" rows="4"></textarea>\n`;
    } else {
      html += `    <input type="${fieldType}" id="${fieldId}" name="${fieldName}">\n`;
    }

    html += `  </div>\n`;
  });

  html += `  <button type="submit" class="${className}-submit">${submitText}</button>\n`;
  html += `</form>`;

  htmlCode.textContent = html;
  cssCode.textContent = dynamicStyles;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted");
  });
}

function parseFieldsWithCommas(input) {
  if (!input) return [];
  return input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function generateCard() {
  const className =
    document.getElementById("className").value || "generated-card";
  const cardTitle = document.getElementById("cardTitle").value || "Card Title";
  const cardText = document.getElementById("cardText").value || "Card content";
  const cardStyle = document.getElementById("cardStyle").value || "basic";
  const bgColor = document.getElementById("cardBgColor").value || "#ffffff";
  const textColor = document.getElementById("cardTextColor").value || "#333333";
  const borderRadius = document.getElementById("cardBorderRadius").value || "8";
  const padding = document.getElementById("cardPadding").value || "20";
  const margin = document.getElementById("cardMargin").value || "10"; // New margin control
  const hasButton = document.getElementById("cardButton").checked;
  const buttonText =
    document.getElementById("cardButtonText").value || "Learn More";

  // Generate dynamic CSS with improved spacing
  let dynamicStyles = `.${className}{
display:block;
overflow:hidden;
background-color:${bgColor};
color:${textColor};
border-radius:${borderRadius}px;
padding:${padding}px;
margin:${margin}px;
transition:all 0.3s ease;
${cardStyle === "border" ? "border:1px solid #e0e0e0;" : ""}
${cardStyle === "shadow" ? "box-shadow:0 2px 8px rgba(0,0,0,0.1);" : ""}
}
.${className}-title{
font-size:1.25rem;
font-weight:600;
margin:0 0 15px 0;
padding:0;
}
.${className}-text{
font-size:0.9rem;
line-height:1.5;
margin:0 0 20px 0;
padding:0;
}
.${className}-button{
display:inline-block;
padding:10px 20px;
margin-top:15px;
background-color:#3a86ff;
color:white;
border-radius:4px;
text-decoration:none;
font-size:0.9rem;
cursor:pointer;
border:none;
}`;

  if (cardStyle === "hover") {
    dynamicStyles += `.${className}:hover{
transform:translateY(-4px);
box-shadow:0 8px 16px rgba(0,0,0,0.1);
}`;
  }

  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create Card Element
  const card = document.createElement("div");
  card.classList.add(className);

  // Add title
  const title = document.createElement("h3");
  title.textContent = cardTitle;
  title.classList.add(`${className}-title`);
  card.appendChild(title);

  // Add text
  const text = document.createElement("p");
  text.textContent = cardText;
  text.classList.add(`${className}-text`);
  card.appendChild(text);

  // Add button if enabled
  if (hasButton) {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.add(`${className}-button`);

    button.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Card button clicked");
    });

    card.appendChild(button);
  }

  // Display Card
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(card);

  // Generate HTML and CSS Code
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  let html = `<div class="${className}">\n`;
  html += `   <h3 class="${className}-title">\n    ${cardTitle}\n   </h3>\n`;
  html += `   <p class="${className}-text">
      ${cardText}
  </p>`;
  if (hasButton)
    html += `\n  <button class="${className}-button">
        ${buttonText}
  </button>`;
  html += `\n</div>`;

  htmlCode.textContent = html;
  cssCode.textContent = dynamicStyles;
}
function generateFlexContainer() {
  const className =
    document.getElementById("flexClassName").value || "flex-container";
  const direction = document.getElementById("flexDirection").value || "row";
  const justify = document.getElementById("flexJustify").value || "flex-start";
  const align = document.getElementById("flexAlign").value || "stretch";
  const wrap = document.getElementById("flexWrap").value || "nowrap";
  const gap = document.getElementById("flexGap").value || "10";
  const itemCount = document.getElementById("flexItems").value || 3;
  const showBorders = document.getElementById("flexBorder").checked;

  // Generate dynamic CSS
  let dynamicStyles = `
    .${className} {
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      flex-wrap: ${wrap};
      gap: ${gap}px;
      padding: 20px;
      min-height: 200px;
      background-color: #f8f9fa;
      ${showBorders ? "border: 1px dashed #ccc;" : ""}
    }
    
    .${className}-item {
      padding: 15px;
      background-color: #3a86ff;
      color: white;
      ${showBorders ? "border: 1px solid #2667cc;" : ""}
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create Flex Container
  const container = document.createElement("div");
  container.className = className;

  // Create Flex Items
  for (let i = 1; i <= itemCount; i++) {
    const item = document.createElement("div");
    item.className = `${className}-item`;
    item.textContent = `Item ${i}`;
    container.appendChild(item);
  }

  // Display Container
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(container);

  // Generate HTML and CSS Code
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  let html = `<div class="${className}">\n`;
  for (let i = 1; i <= itemCount; i++) {
    html += `  <div class="${className}-item">Item ${i}</div>\n`;
  }
  html += `</div>`;

  htmlCode.textContent = html;
  cssCode.textContent = dynamicStyles;
}
function generateInputField() {
  // Get class names
  const containerClass =
    document.getElementById("inputClassName").value || "generated-input-group";
  const labelClass = `${containerClass}-label`;
  const inputClass = `${containerClass}-input`;
  const helpClass = `${containerClass}-helptext`;

  // Get content values
  const labelText = document.getElementById("labelText").value || "Label";
  const inputType = document.getElementById("inputType").value || "text";
  const placeholder = document.getElementById("placeholderText").value || "";
  const showHelp = document.getElementById("showHelpText").checked;
  const helpText = document.getElementById("helpText").value || "";

  // Get style values
  const labelColor = document.getElementById("labelColor").value || "#333333";
  const textColor =
    document.getElementById("inputTextColor").value || "#333333";
  const bgColor = document.getElementById("inputBgColor").value || "#ffffff";
  const borderColor = document.getElementById("borderColor").value || "#cccccc";
  const focusColor = document.getElementById("focusColor").value || "#3a86ff";
  const borderRadius = document.getElementById("borderRadius").value || "4";
  const width = document.getElementById("inputWidth").value || "100";

  // Generate CSS
  const dynamicStyles = `
    .${containerClass} {
      margin-bottom: 1.5rem;
      font-family: 'Poppins', sans-serif;
      width: ${width}%;
    }
    
    .${labelClass} {
      display: block;
      margin-bottom: 0.5rem;
      color: ${labelColor};
      font-weight: 500;
      font-size: 14px;
    }
    
    .${inputClass} {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid ${borderColor};
      border-radius: ${borderRadius}px;
      background-color: ${bgColor};
      color: ${textColor};
      font-size: 14px;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }
    
    .${inputClass}:focus {
      outline: none;
      border-color: ${focusColor};
      box-shadow: 0 0 0 2px ${hexToRgba(focusColor, 0.2)};
    }
    
    .${helpClass} {
      display: ${showHelp ? "block" : "none"};
      margin-top: 0.5rem;
      font-size: 12px;
      color: #666;
    }
    
    textarea.${inputClass} {
      min-height: 100px;
      resize: vertical;
    }
  `;

  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create elements
  const container = document.createElement("div");
  container.className = containerClass;

  const label = document.createElement("label");
  label.className = labelClass;
  label.textContent = labelText;

  const input =
    inputType === "textarea"
      ? document.createElement("textarea")
      : document.createElement("input");

  input.className = inputClass;
  if (inputType !== "textarea") input.type = inputType;
  input.placeholder = placeholder;

  container.appendChild(label);
  container.appendChild(input);

  if (helpText) {
    const help = document.createElement("small");
    help.className = helpClass;
    help.textContent = helpText;
    container.appendChild(help);
  }

  // Display output
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(container);

  // Generate code
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");

  let html = `<div class="${containerClass}">\n`;
  html += `  <label class="${labelClass}">${labelText}</label>\n`;
  html +=
    inputType === "textarea"
      ? `  <textarea class="${inputClass}" placeholder="${placeholder}" rows="4"></textarea>\n`
      : `  <input type="${inputType}" class="${inputClass}" 
             placeholder="${placeholder}">\n`;

  if (helpText) {
    html += `  <small class="${helpClass}">
      ${helpText}
  </small>\n`;
  }
  html += `</div>`;

  htmlCode.textContent = html;
  cssCode.textContent = dynamicStyles;
}

// Helper function
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function generateHero() {
  const className =
    document.getElementById("className").value || "generated-hero";
  const heroTitle =
    document.getElementById("heroTitle").value || "Welcome to Our Website";
  const heroSubtitle =
    document.getElementById("heroSubtitle").value ||
    "Discover amazing features and services";
  const heroLayout = document.getElementById("heroLayout").value || "centered";
  const bgColor = document.getElementById("heroBgColor").value || "#4a6bff";
  const textColor = document.getElementById("heroTextColor").value || "#ffffff";
  const heroHeight = document.getElementById("heroHeight").value || "medium";
  const heroPadding = document.getElementById("heroPadding").value || "40";
  const includeButton = document.getElementById("includeButton").checked;
  const buttonText =
    document.getElementById("heroButtonText")?.value || "Get Started";
  const useGradient = document.getElementById("heroGradient").checked;
  const gradientColor =
    document.getElementById("heroGradientColor")?.value || "#8a2be2";
  const useOverlay = document.getElementById("heroOverlay").checked;
  const useAnimation = document.getElementById("heroAnimation").checked;

  // Define height based on selection
  let heightValue;
  switch (heroHeight) {
    case "small":
      heightValue = "300px";
      break;
    case "medium":
      heightValue = "500px";
      break;
    case "large":
      heightValue = "700px";
      break;
    case "fullscreen":
      heightValue = "100vh";
      break;
    default:
      heightValue = "500px";
  }

  // Create CSS
  let dynamicStyles = `.${className} {
    position: relative;
    width: 100%;
    height: ${heightValue};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${heroPadding}px;
    overflow: hidden;
    ${
      useGradient
        ? `background: linear-gradient(135deg, ${bgColor}, ${gradientColor});`
        : `background-color: ${bgColor};`
    }
  }\n
  
  ${
    useOverlay
      ? `.${className}::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }\n`
      : ""
  }
  
  .${className}-content {
    ${
      heroLayout === "centered"
        ? "text-align: center;"
        : heroLayout === "left-aligned"
        ? "text-align: left;"
        : heroLayout === "right-aligned"
        ? "text-align: right;"
        : ""
    }
    max-width: 1200px;
    color: ${textColor};
    position: relative;
    z-index: 2;
    ${
      heroLayout === "split"
        ? "display: flex; justify-content: space-between; align-items: center; width: 100%;"
        : ""
    }
  }\n
  
  .${className}-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    ${useAnimation ? "animation: fadeInDown 1s ease-out;" : ""}
  }\n
  
  .${className}-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    ${
      useAnimation
        ? "animation: fadeInUp 1s ease-out 0.3s forwards; opacity: 0;"
        : ""
    }
  }\n
  
  .${className}-button {
    display: inline-block;
    background-color: #ffffff;
    color: ${bgColor};
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    ${
      useAnimation
        ? "animation: fadeIn 1s ease-out 0.6s forwards; opacity: 0;"
        : ""
    }
  }\n
  
  .${className}-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }\n
  
  ${
    useAnimation
      ? `@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }\n`
      : ""
  }`;

  document.getElementById("dynamicStyles").textContent = dynamicStyles;

  // Create HTML
  const heroSection = document.createElement("section");
  heroSection.classList.add(className);

  const heroContent = document.createElement("div");
  heroContent.classList.add(`${className}-content`);

  // For split layout, create two containers
  if (heroLayout === "split") {
    const leftSide = document.createElement("div");
    leftSide.classList.add(`${className}-text`);
    leftSide.style.width = "50%";

    const heading = document.createElement("h1");
    heading.classList.add(`${className}-title`);
    heading.textContent = heroTitle;

    const subtitle = document.createElement("p");
    subtitle.classList.add(`${className}-subtitle`);
    subtitle.textContent = heroSubtitle;

    leftSide.appendChild(heading);
    leftSide.appendChild(subtitle);

    if (includeButton) {
      const button = document.createElement("a");
      button.classList.add(`${className}-button`);
      button.href = "#";
      button.textContent = buttonText;
      leftSide.appendChild(button);
    }

    const rightSide = document.createElement("div");
    rightSide.classList.add(`${className}-image`);
    rightSide.style.width = "40%";
    rightSide.style.height = "300px";
    rightSide.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    rightSide.style.borderRadius = "10px";

    heroContent.appendChild(leftSide);
    heroContent.appendChild(rightSide);
  } else {
    // Standard layout
    const heading = document.createElement("h1");
    heading.classList.add(`${className}-title`);
    heading.textContent = heroTitle;

    const subtitle = document.createElement("p");
    subtitle.classList.add(`${className}-subtitle`);
    subtitle.textContent = heroSubtitle;

    heroContent.appendChild(heading);
    heroContent.appendChild(subtitle);

    if (includeButton) {
      const button = document.createElement("a");
      button.classList.add(`${className}-button`);
      button.href = "#";
      button.textContent = buttonText;
      heroContent.appendChild(button);
    }
  }

  heroSection.appendChild(heroContent);

  // Output HTML and CSS
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = "";
  elementOutput.appendChild(heroSection);

  // Generate code for display
  let htmlCode = "";

  if (heroLayout === "split") {
    htmlCode = `<section class="${className}">
  <div class="${className}-content">
    <div class="${className}-text">
      <h1 class="${className}-title">${heroTitle}</h1>
      <p class="${className}-subtitle">${heroSubtitle}</p>
      ${
        includeButton
          ? `<a href="#" class="${className}-button">${buttonText}</a>`
          : ""
      }
    </div>
    <div class="${className}-image">
      <!-- Your image or content here -->
    </div>
  </div>
</section>`;
  } else {
    htmlCode = `<section class="${className}">
  <div class="${className}-content">
    <h1 class="${className}-title">${heroTitle}</h1>
    <p class="${className}-subtitle">${heroSubtitle}</p>
    ${
      includeButton
        ? `<a href="#" class="${className}-button">${buttonText}</a>`
        : ""
    }
  </div>
</section>`;
  }

  document.getElementById("htmlCode").textContent = htmlCode;
  document.getElementById("cssCode").textContent = dynamicStyles;

  // Add event listeners for toggled options
  document
    .getElementById("heroGradient")
    .addEventListener("change", function () {
      document.getElementById("heroGradientColorGroup").style.display = this
        .checked
        ? "block"
        : "none";
    });

  document
    .getElementById("includeButton")
    .addEventListener("change", function () {
      document.getElementById("buttonTextGroup").style.display = this.checked
        ? "block"
        : "none";
    });
}

function generateModalPopup() {
  // Retrieve basic content controls
  const openButtonText = document.getElementById("openButtonText")?.value || "Open Modal";
  const modalContent = document.getElementById("modalContent")?.value || "This is a modal popup! You can place any content here.";
  
  // Retrieve open button styling controls
  const openButtonBgColor = document.getElementById("modalOpenButtonBgColor")?.value || "var(--primary-color)";
  const openButtonFontColor = document.getElementById("modalOpenButtonFontColor")?.value || "#ffffff";
  const openButtonFontSize = document.getElementById("modalOpenButtonFontSize")?.value || "1rem";
  
  // Retrieve modal overlay styling
  const useGradientOverlay = document.getElementById("modalGradient")?.checked;
  // If gradient is enabled, use gradient colors; otherwise, use flat color
  const modalBgColor = useGradientOverlay 
    ? `linear-gradient(135deg, ${document.getElementById("modalGradientStart")?.value || "#000000"}, ${document.getElementById("modalGradientEnd")?.value || "#333333"})`
    : (document.getElementById("modalBgColor")?.value || "rgba(0,0,0,0.5)");
  
  // Retrieve modal content styling controls
  const modalContentBgColor = document.getElementById("modalContentBgColor")?.value || "#fefefe";
  const modalContentFont = document.getElementById("modalContentFont")?.value || "'Poppins', sans-serif";
  const modalContentFontColor = document.getElementById("modalContentFontColor")?.value || "#333333";

  // Build the HTML snippet with a button and a modal container.
  // Note: Adding a div with class "modal-inner-content" inside the modal-content for the text.
  const htmlSnippet = `
<button id="openModal" class="generated-modal-button">${openButtonText}</button>
<div id="modal" class="generated-modal">
  <div class="generated-modal-content">
    <span id="closeModal" class="generated-modal-close">&times;</span>
    <div class="modal-inner-content">${modalContent}</div>
  </div>
</div>
  `.trim();
  
  // Build the CSS snippet.
  const cssSnippet = `
/* Modal Overlay */
.generated-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${modalBgColor};
  animation: fadeIn 0.3s ease;
}

/* Modal Content Container */
.generated-modal-content {
  background-color: ${modalContentBgColor};
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  position: relative;
}

/* Modal Close Button */
.generated-modal-close {
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
.generated-modal-close:hover,
.generated-modal-close:focus {
  color: #000;
  text-decoration: none;
}

/* Open Button Styling */
.generated-modal-button {
  padding: 10px 20px;
  background-color: ${openButtonBgColor};
  color: ${openButtonFontColor};
  font-size: ${openButtonFontSize};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px 0;
}
.generated-modal-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* Modal Inner Content Styling */
.modal-inner-content {
  font-family: ${modalContentFont};
  color: ${modalContentFontColor};
  font-size: 1rem;
}

/* Fade In Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
  `.trim();
  
  // Build the JS snippet to attach events with a slight delay.
  const jsSnippet = `
setTimeout(function(){
  const openBtn = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");
  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", function() {
      modal.style.display = "block";
    });
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}, 50);
  `.trim();
  
  // Inject the CSS into the dynamic style tag.
  document.getElementById("dynamicStyles").textContent = cssSnippet;
  
  // Update the live view with the generated HTML.
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = htmlSnippet;
  
  // Execute the JavaScript to attach event listeners.
  new Function(jsSnippet)();
  
  // Update the code output areas for copy functionality.
  document.getElementById("htmlCode").textContent = htmlSnippet;
  document.getElementById("cssCode").textContent = cssSnippet;
  const jsCodeBlock = document.getElementById("jsCode");
  if (jsCodeBlock) {
    jsCodeBlock.textContent = jsSnippet;
  }
}



function generateProgressBar() {
  // Read common styling controls
  const progressBarHeight = document.getElementById("progressBarHeight")
    ? document.getElementById("progressBarHeight").value
    : "25px";
  const progressBarFont = document.getElementById("progressBarFont")
    ? document.getElementById("progressBarFont").value
    : "'Poppins', sans-serif";
  const progressBarFontSize = document.getElementById("progressBarFontSize")
    ? document.getElementById("progressBarFontSize").value
    : "1rem";
  const progressBarFontColor = document.getElementById("progressBarFontColor")
    ? document.getElementById("progressBarFontColor").value
    : "#ffffff";

  // Success progress bar controls
  const successPercent = document.getElementById("progressBarSuccessPercent")
    ? document.getElementById("progressBarSuccessPercent").value
    : 40;
  const successText = document.getElementById("progressBarSuccessText")
    ? document.getElementById("progressBarSuccessText").value
    : "40% Complete (success)";
  const successColor = document.getElementById("progressBarSuccessColor")
    ? document.getElementById("progressBarSuccessColor").value
    : "#5cb85c";

  // Info progress bar controls
  const infoPercent = document.getElementById("progressBarInfoPercent")
    ? document.getElementById("progressBarInfoPercent").value
    : 50;
  const infoText = document.getElementById("progressBarInfoText")
    ? document.getElementById("progressBarInfoText").value
    : "50% Complete (info)";
  const infoColor = document.getElementById("progressBarInfoColor")
    ? document.getElementById("progressBarInfoColor").value
    : "#5bc0de";

  // Warning progress bar controls
  const warningPercent = document.getElementById("progressBarWarningPercent")
    ? document.getElementById("progressBarWarningPercent").value
    : 60;
  const warningText = document.getElementById("progressBarWarningText")
    ? document.getElementById("progressBarWarningText").value
    : "60% Complete (warning)";
  const warningColor = document.getElementById("progressBarWarningColor")
    ? document.getElementById("progressBarWarningColor").value
    : "#f0ad4e";

  // Danger progress bar controls
  const dangerPercent = document.getElementById("progressBarDangerPercent")
    ? document.getElementById("progressBarDangerPercent").value
    : 70;
  const dangerText = document.getElementById("progressBarDangerText")
    ? document.getElementById("progressBarDangerText").value
    : "70% Complete (danger)";
  const dangerColor = document.getElementById("progressBarDangerColor")
    ? document.getElementById("progressBarDangerColor").value
    : "#d9534f";

  // Build the HTML snippet for four progress bars.
  // For animation purposes, we set the width initially to 0%.
  let htmlSnippet = `
<div class="progress">
  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" data-target="${successPercent}" style="width: 0%;">
    ${successText}
  </div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" data-target="${infoPercent}" style="width: 0%;">
    ${infoText}
  </div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" data-target="${warningPercent}" style="width: 0%;">
    ${warningText}
  </div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" data-target="${dangerPercent}" style="width: 0%;">
    ${dangerText}
  </div>
</div>
`;

  // Build the CSS snippet.
  let cssSnippet = `
.progress {
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}
.progress-bar {
  height: ${progressBarHeight};
  line-height: ${progressBarHeight};
  font-family: ${progressBarFont};
  font-size: ${progressBarFontSize};
  color: ${progressBarFontColor};
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
}
.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}
/* Custom colors */
.progress-bar-success { background-color: ${successColor}; }
.progress-bar-info { background-color: ${infoColor}; }
.progress-bar-warning { background-color: ${warningColor}; }
.progress-bar-danger { background-color: ${dangerColor}; }
`;

  // Build the JavaScript snippet to animate the progress bars.
  // This snippet iterates each progress bar, increases the width from 0% to its target.
  let jsSnippet = `(function(){
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const target = parseInt(bar.getAttribute('data-target'));
    let width = 0;
    const animate = () => {
      if(width < target) {
        width++;
        bar.style.width = width + '%';
        setTimeout(animate, 10);
      } else {
        bar.textContent = target + '% Complete';
      }
    };
    animate();
  });
})();`;

  // Inject the CSS into your dynamic style tag.
  document.getElementById("dynamicStyles").textContent = cssSnippet;

  // Update the live view with the generated HTML snippet.
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = htmlSnippet;

  // Execute the JavaScript snippet so the progress bars animate.
  new Function(jsSnippet)();

  // Update the code output areas for copy functionality.
  document.getElementById("htmlCode").textContent = htmlSnippet;
  document.getElementById("cssCode").textContent = cssSnippet;
  const jsCodeBlock = document.getElementById("jsCode");
  if (jsCodeBlock) {
    jsCodeBlock.textContent = jsSnippet;
  }
}


function generateCounter() {
  // Read the number of counters to display (default to 3)
  const countControl = document.getElementById("counterCount");
  const numCounters = countControl ? parseInt(countControl.value) : 3;

  // Create an array of counter objects
  const counters = [];
  for (let i = 1; i <= numCounters; i++) {
    // Get target count with defaults: 300, 100, 39
    const counttoInput = document.getElementById(`state${i}Count`);
    const countto = counttoInput
      ? parseInt(counttoInput.value)
      : (i === 1 ? 300 : i === 2 ? 100 : 39);

    // Get title text with defaults
    const titleInput = document.getElementById(`state${i}Title`);
    const title = titleInput
      ? titleInput.value
      : (i === 1 ? "Coded Elements" : i === 2 ? "Design Blocks" : "Pages");

    // Get description text with defaults
    const descInput = document.getElementById(`state${i}Desc`);
    const desc = descInput
      ? descInput.value
      : (i === 1
          ? "From buttons, to inputs, navbars, alerts or cards, you are covered"
          : i === 2
          ? "Mix the sections, change the colors and unleash your creativity"
          : "Save 3-4 weeks of work when you use our pre-made pages for your website");
    counters.push({ countto, title, desc });
  }

  // Read the counter number color (ensure this control exists)
  const counterColorInput = document.getElementById("counterColor");
  const counterColor = counterColorInput ? counterColorInput.value : "#4361ee";

  // Read title styling controls
  const titleFont = document.getElementById("counterTitleFont")
    ? document.getElementById("counterTitleFont").value
    : "'Poppins', sans-serif";
  const titleFontSize = document.getElementById("counterTitleFontSize")
    ? document.getElementById("counterTitleFontSize").value
    : "2.5";
  const titleColor = document.getElementById("counterTitleColor")
    ? document.getElementById("counterTitleColor").value
    : "#000000";

  // Read description styling controls
  const descFont = document.getElementById("counterDescFont")
    ? document.getElementById("counterDescFont").value
    : "'Poppins', sans-serif";
  const descFontSize = document.getElementById("counterDescFontSize")
    ? document.getElementById("counterDescFontSize").value
    : "1";
  const descColor = document.getElementById("counterDescColor")
    ? document.getElementById("counterDescColor").value
    : "#666666";

  // Determine the appropriate column class based on the number of counters.
  let colClass = "col-33"; // default for 3 counters
  if (numCounters === 1) colClass = "col-100";
  else if (numCounters === 2) colClass = "col-50";

  // Build the HTML snippet for the counters section.
  let htmlSnippet = `<section id="count-stats">
    <div class="container">
      <div class="stats-row">`;
  counters.forEach((counter, index) => {
    const spanId = `state${index + 1}`;
    htmlSnippet += `
        <div class="${colClass} stat-column">
          <h1 class="text-gradient text-primary">
            <span id="${spanId}" countto="${counter.countto}">0</span>+
          </h1>
          <h5>${counter.title}</h5>
          <p class="text-sm">${counter.desc}</p>
        </div>`;
  });
  htmlSnippet += `
      </div>
    </div>
</section>`;

  // Build the CSS snippet.
  let cssSnippet = `
#count-stats {
  padding: 60px 0;
  background-color: var(--bg-color);
}
#count-stats .container {
  max-width: 1200px;
  margin: 0 auto;
}
.stats-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.stat-column {
  text-align: center;
  padding: 20px;
}
.col-33 { width: 33.33%; }
.col-50 { width: 50%; }
.col-100 { width: 100%; }
.text-gradient {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-primary { color: var(--primary-color); }
.text-sm { font-size: 0.9rem; color: #666; }

/* Override counter number color */
#count-stats .stat-column h1 span {
  color: ${counterColor} !important;
  /* Remove gradient settings from parent classes */
  background: none !important;
  -webkit-background-clip: initial !important;
  -webkit-text-fill-color: ${counterColor} !important;
}

/* Title styling for counter titles */
#count-stats .stat-column h5 {
  font-family: ${titleFont};
  font-size: ${titleFontSize}rem;
  color: ${titleColor};
  margin: 10px 0 5px;
}

/* Description styling for counter descriptions */
#count-stats .stat-column p.text-sm {
  font-family: ${descFont};
  font-size: ${descFontSize}rem;
  color: ${descColor};
}
`;

  // Build the JavaScript snippet to animate the counters.
  const jsSnippet = `(function(){
  const counters = document.querySelectorAll("#count-stats [countto]");
  counters.forEach(counter => {
    const target = +counter.getAttribute("countto");
    let count = 0;
    const increment = Math.ceil(target / 100);
    const updateCount = () => {
      count += increment;
      if(count > target) count = target;
      counter.textContent = count;
      if(count < target) {
        setTimeout(updateCount, 50);
      }
    };
    updateCount();
  });
})();`;

  // Inject the CSS into the dynamicStyles tag.
  document.getElementById("dynamicStyles").textContent = cssSnippet;

  // Update the live view with the generated HTML snippet.
  const elementOutput = document.getElementById("elementOutput");
  elementOutput.innerHTML = htmlSnippet;

  // Execute the generated JavaScript so that the counters animate.
  new Function(jsSnippet)();

  // Update the code output areas.
  document.getElementById("htmlCode").textContent = htmlSnippet;
  document.getElementById("cssCode").textContent = cssSnippet;
  const jsCodeBlock = document.getElementById("jsCode");
  if (jsCodeBlock) {
    jsCodeBlock.textContent = jsSnippet;
  }
}





export {
  generateHeader,
  generateNavbar,
  generateButton,
  generateFooter,
  generateForm,
  generateCard,
  generateFlexContainer,
  generateInputField,
  generateHero,
  generateModalPopup,
  generateProgressBar,
  generateCounter,
};

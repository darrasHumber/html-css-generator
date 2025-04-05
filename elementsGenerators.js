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
      font-size: ${fontSize}px;
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

  htmlCode.textContent = `<${headerType} class="${className}">${headerText}</${headerType}>`;
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

  let html = `<nav class="${className}"><ul class="${className}-container">`;
  html += navbarItems
    .map((item) => `<li><a href="#" class="${navLinkClass}">${item}</a></li>`)
    .join("");
  html += `</ul></nav>`;

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

  let html = `<button class="${className}">`;
  if (hasIcon) html += `<i class="fas ${iconClass} ${className}-icon"></i>`;
  html += `${buttonText}</button>`;

  htmlCode.textContent = html;
  cssCode.textContent = dynamicStyles;
}

function generateFooter() {
  // Gather inputs with fallback default values
  const className =
    document.getElementById("className").value || "generated-footer";
  const footerText = document.getElementById("footerText").value;
  const bgColor = document.getElementById("footerBgColor").value || "#333333";
  const textColor =
    document.getElementById("footerTextColor").value || "#ffffff";
  const padding = document.getElementById("footerPadding").value || "10";
  const margin = document.getElementById("footerMargin").value || "10";
  const alignment =
    document.getElementById("footerAlignment").value || "center";

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

  let html = `<div class="${className}">`;
  html += `<h3 class="${className}-title">${cardTitle}</h3>`;
  html += `<p class="${className}-text">${cardText}</p>`;
  if (hasButton)
    html += `<button class="${className}-button">${buttonText}</button>`;
  html += `</div>`;

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

export {
  generateHeader,
  generateNavbar,
  generateButton,
  generateFooter,
  generateForm,
  generateCard,
  generateFlexContainer,
};

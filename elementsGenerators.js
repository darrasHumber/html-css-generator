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

export {
  generateHeader,
  generateNavbar,
  generateButton,
  generateFooter,
  generateForm,
};

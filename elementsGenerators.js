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
// Don't forget to export the new function
export {
  generateHeader,
  generateNavbar,
  generateButton,
  generateFooter,
  generateForm,
};

// Function to get controls for the selected element
export function getElementControls(element) {
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
          <input type="text" id="headerText" placeholder="Enter header text" value="Welcome Header">
        </div>
        <div class="form-group">
          <label for="headerType">Header Level:</label>
          <select id="headerType">
            <option value="h1">H1 (Most Important)</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
            <option value="h4">H4</option>
            <option value="h5">H5</option>
            <option value="h6">H6 (Least Important)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="fontSize">Font Size (px):</label>
          <input type="number" id="fontSize" value="32" min="10" max="100">
        </div>
        <div class="form-group">
          <label for="headerFont">Font Family:</label>
          <select id="headerFont">
            <option value="Arial, sans-serif">Arial</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="'Courier New', monospace">Courier New</option>
            <option value="'Poppins', sans-serif">Poppins</option>
            <option value="'Roboto', sans-serif">Roboto</option>
          </select>
        </div>
        <div class="form-group">
          <label for="headerWeight">Font Weight:</label>
          <select id="headerWeight">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Light</option>
            <option value="700">700 (Bold)</option>
            <option value="900">900 (Black)</option>
          </select>
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
            <option value="center" selected>Center</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div class="form-group">
          <label for="headerPadding">Padding (px):</label>
          <input type="number" id="headerPadding" value="20" min="0" max="100">
        </div>
        <div class="form-group">
          <label for="headerMargin">Margin (px):</label>
          <input type="number" id="headerMargin" value="0" min="0" max="100">
        </div>
        <div class="form-group checkbox">
          <input type="checkbox" id="textShadow">
          <label for="textShadow">Add Text Shadow</label>
        </div>
        <div class="form-group checkbox">
          <input type="checkbox" id="headerBorder">
          <label for="headerBorder">Add Bottom Border</label>
        </div>
        <div class="form-group checkbox">
          <input type="checkbox" id="hoverEffect">
          <label for="hoverEffect">Add Hover Effect</label>
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

    case "footer":
      return `
        <div class="form-group">
          <label for="className">Class Name:</label>
          <input type="text" id="className" value="${defaultClassName}">
        </div>
        <div class="form-group">
          <label for="footerText">Footer Text:</label>
          <input type="text" id="footerText" placeholder="Enter footer text">
        </div>
        <div class="form-group">
          <label for="footerBgColor">Background Color:</label>
          <input type="color" id="footerBgColor" value="#333333">
        </div>
        <div class="form-group">
          <label for="footerTextColor">Text Color:</label>
          <input type="color" id="footerTextColor" value="#ffffff">
        </div>
        <div class="form-group">
          <label for="footerPadding">Padding (px):</label>
          <input type="number" id="footerPadding" placeholder="e.g., 10">
        </div>
        <div class="form-group">
          <label for="footerMargin">Margin (px):</label>
          <input type="number" id="footerMargin" placeholder="e.g., 10">
        </div>
        <div class="form-group">
          <label for="footerAlignment">Alignment:</label>
          <select id="footerAlignment">
            <option value="left">Left</option>
            <option value="center" selected>Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      `;
    case "form":
      return `
    <div class="form-group">
      <label for="className">Class Name:</label>
      <input type="text" id="className" value="${defaultClassName}">
    </div>
    <div class="form-group">
      <label for="formTitle">Form Title:</label>
      <input type="text" id="formTitle" placeholder="Enter form title">
    </div>
    <div class="form-group">
      <label for="formFields">Form Fields (comma-separated):</label>
      <input type="text" id="formFields" placeholder="e.g., Name,Email,Message">
    </div>
    <div class="form-group">
      <label for="fieldTypes">Field Types (comma-separated):</label>
      <input type="text" id="fieldTypes" placeholder="e.g., text,email,textarea">
    </div>
    <div class="form-group">
      <label for="submitText">Submit Button Text:</label>
      <input type="text" id="submitText" value="Submit">
    </div>
    <div class="form-group">
      <label for="formBgColor">Background Color:</label>
      <input type="color" id="formBgColor" value="#ffffff">
    </div>
    <div class="form-group">
      <label for="formTextColor">Text Color:</label>
      <input type="color" id="formTextColor" value="#333333">
    </div>
    <div class="form-group">
      <label for="formPadding">Padding (px):</label>
      <input type="number" id="formPadding" value="20">
    </div>
    <div class="form-group">
      <label for="formWidth">Width (%):</label>
      <input type="number" id="formWidth" value="80" min="10" max="100">
    </div>
  `;
    default:
      return "";
  }
}

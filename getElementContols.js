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

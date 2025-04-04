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
            <label for="navbarItems">Navbar Items (comma separated):</label>
            <input type="text" id="navbarItems" placeholder="Home, About, Services, Contact">
          </div>
          
          <div class="form-group">
            <label for="navbarType">Layout:</label>
            <select id="navbarType">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="navbarStyle">Style:</label>
            <select id="navbarStyle">
              <option value="basic">Basic</option>
              <option value="pill">Pill</option>
              <option value="underline">Underline</option>
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
          
          <div class="form-group">
            <label for="navbarHoverColor">Hover Color:</label>
            <input type="color" id="navbarHoverColor" value="#555555">
          </div>
          
          <div class="form-group checkbox">
            <input type="checkbox" id="navbarSticky" checked>
            <label for="navbarSticky">Sticky Navbar</label>
          </div>
          
          <div class="form-group">
            <label for="navPadding">Navbar Padding:</label>
            <input type="text" id="navPadding" value="1rem" placeholder="e.g., 1rem or 10px 20px">
          </div>
          
          <div class="form-group">
            <label for="navMargin">Navbar Margin:</label>
            <input type="text" id="navMargin" value="0" placeholder="e.g., 0 or 10px 20px">
          </div>
          
          <div class="form-group">
            <label for="itemPadding">Item Padding:</label>
            <input type="text" id="itemPadding" value="0.5rem 1rem" placeholder="e.g., 0.5rem 1rem">
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
              <input type="text" id="buttonText" value="Click Me">
            </div>
        
            <div class="form-group">
              <label for="buttonType">Button Type:</label>
              <select id="buttonType">
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
                <option value="link">Link Style</option>
              </select>
            </div>
        
            <div class="form-group">
              <label for="buttonSize">Size:</label>
              <select id="buttonSize">
                <option value="small">Small</option>
                <option value="medium" selected>Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
        
            <div class="form-group">
              <label for="buttonBgColor">Background Color:</label>
              <input type="color" id="buttonBgColor" value="#3a86ff">
            </div>
        
            <div class="form-group">
              <label for="buttonTextColor">Text Color:</label>
              <input type="color" id="buttonTextColor" value="#ffffff">
            </div>
        
            <div class="form-group">
              <label for="buttonHoverColor">Hover Color:</label>
              <input type="color" id="buttonHoverColor" value="#2667cc">
            </div>
        
            <div class="form-group">
              <label for="buttonBorderRadius">Border Radius (px):</label>
              <input type="number" id="buttonBorderRadius" value="4" min="0" max="50">
            </div>
        
            <div class="form-group">
              <label for="buttonWidth">Width:</label>
              <select id="buttonWidth">
                <option value="auto">Auto</option>
                <option value="full">Full Width</option>
                <option value="custom">Custom</option>
              </select>
            </div>
        
            <div class="form-group" id="customWidthGroup" style="display:none;">
              <label for="buttonCustomWidth">Custom Width (px):</label>
              <input type="number" id="buttonCustomWidth" value="200" min="50" max="1000">
            </div>
        
            <div class="form-group checkbox">
              <input type="checkbox" id="buttonShadow" checked>
              <label for="buttonShadow">Add Shadow</label>
            </div>
        
            <div class="form-group checkbox">
              <input type="checkbox" id="buttonIcon">
              <label for="buttonIcon">Add Icon</label>
            </div>
        
            <div class="form-group" id="iconSelectGroup" style="display:none;">
              <label for="buttonIconSelect">Choose Icon:</label>
              <select id="buttonIconSelect">
                <option value="fa-download">Download</option>
                <option value="fa-arrow-right">Arrow</option>
                <option value="fa-heart">Heart</option>
                <option value="fa-star">Star</option>
              </select>
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
    case "card":
      return `
      <div class="form-group">
        <label for="className">Class Name:</label>
        <input type="text" id="className" value="${defaultClassName}">
      </div>
  
      <div class="form-group">
        <label for="cardTitle">Card Title:</label>
        <input type="text" id="cardTitle" value="Card Title">
      </div>
  
      <div class="form-group">
        <label for="cardText">Card Text:</label>
        <textarea id="cardText" rows="3">This is a sample card text content.</textarea>
      </div>
  
      <div class="form-group">
        <label for="cardStyle">Card Style:</label>
        <select id="cardStyle">
          <option value="basic">Basic</option>
          <option value="border">Bordered</option>
          <option value="shadow">Shadowed</option>
          <option value="hover">Hoverable</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="cardBgColor">Background Color:</label>
        <input type="color" id="cardBgColor" value="#ffffff">
      </div>
  
      <div class="form-group">
        <label for="cardTextColor">Text Color:</label>
        <input type="color" id="cardTextColor" value="#333333">
      </div>
  
      <div class="form-group">
        <label for="cardBorderRadius">Border Radius (px):</label>
        <input type="number" id="cardBorderRadius" value="8" min="0" max="50">
      </div>
  
      <div class="form-group">
        <label for="cardPadding">Padding (px):</label>
        <input type="number" id="cardPadding" value="20" min="0" max="50">
      </div>
  
      <div class="form-group">
        <label for="cardMargin">Margin (px):</label>
        <input type="number" id="cardMargin" value="10" min="0" max="50">
      </div>
  
      <div class="form-group checkbox">
        <input type="checkbox" id="cardButton">
        <label for="cardButton">Include Button</label>
      </div>
  
      <div class="form-group" id="buttonTextGroup" style="display:none;">
        <label for="cardButtonText">Button Text:</label>
        <input type="text" id="cardButtonText" value="Learn More">
      </div>
    `;
    case "flex":
      return `
    <div class="form-group">
      <label for="flexClassName">Class Name:</label>
      <input type="text" id="flexClassName" value="flex-container">
    </div>

    <div class="form-group">
      <label for="flexDirection">Direction:</label>
      <select id="flexDirection">
        <option value="row">Row (horizontal)</option>
        <option value="column">Column (vertical)</option>
        <option value="row-reverse">Row Reverse</option>
        <option value="column-reverse">Column Reverse</option>
      </select>
    </div>

    <div class="form-group">
      <label for="flexJustify">Justify Content:</label>
      <select id="flexJustify">
        <option value="flex-start">Start</option>
        <option value="flex-end">End</option>
        <option value="center">Center</option>
        <option value="space-between">Space Between</option>
        <option value="space-around">Space Around</option>
        <option value="space-evenly">Space Evenly</option>
      </select>
    </div>

    <div class="form-group">
      <label for="flexAlign">Align Items:</label>
      <select id="flexAlign">
        <option value="stretch">Stretch</option>
        <option value="flex-start">Start</option>
        <option value="flex-end">End</option>
        <option value="center">Center</option>
        <option value="baseline">Baseline</option>
      </select>
    </div>

    <div class="form-group">
      <label for="flexWrap">Wrap:</label>
      <select id="flexWrap">
        <option value="nowrap">No Wrap</option>
        <option value="wrap">Wrap</option>
        <option value="wrap-reverse">Wrap Reverse</option>
      </select>
    </div>

    <div class="form-group">
      <label for="flexGap">Gap (px):</label>
      <input type="number" id="flexGap" value="10" min="0" max="50">
    </div>

    <div class="form-group">
      <label for="flexItems">Number of Items:</label>
      <input type="number" id="flexItems" value="3" min="1" max="12">
    </div>

    <div class="form-group checkbox">
      <input type="checkbox" id="flexBorder" checked>
      <label for="flexBorder">Show Item Borders</label>
    </div>
  `;
    default:
      return "";
  }
}

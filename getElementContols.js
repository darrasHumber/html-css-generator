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
                <label for="footerStyle">Footer Style:</label>
                <select id="footerStyle">
                  <option value="simple">Simple</option>
                  <option value="two-column">Two Column</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="footerText">Copyright Text:</label>
                <input type="text" id="footerText" value="© 2025 Your Company. All rights reserved." placeholder="Enter footer text">
              </div>
              
              <div class="form-group checkbox">
                <input type="checkbox" id="includeLinks" checked>
                <label for="includeLinks">Include Links</label>
              </div>
              
              <div class="form-group" id="linksGroup">
                <label for="footerLinks">Links (comma separated):</label>
                <input type="text" id="footerLinks" value="Home, About, Contact" placeholder="Home, About, Contact">
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
                <label for="footerLinkColor">Link Color:</label>
                <input type="color" id="footerLinkColor" value="#aaaaaa">
              </div>
              
              <div class="form-group">
                <label for="footerPadding">Padding (px):</label>
                <input type="number" id="footerPadding" value="30" min="0" max="100">
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
    case "input-field":
      return `
    <!-- Class Name Controls -->
    <div class="form-group">
      <label for="inputClassName">Class Name</label>
      <input type="text" id="inputClassName" value="generated-input-group">
    </div>

    <!-- Content Controls -->
    <div class="form-group">
      <label for="labelText">Label Text:</label>
      <input type="text" id="labelText" value="Username">
    </div>
    <div class="form-group">
      <label for="inputType">Input Type:</label>
      <select id="inputType">
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="password">Password</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        <option value="textarea">Textarea</option>
      </select>
    </div>
    <div class="form-group">
      <label for="placeholderText">Placeholder:</label>
      <input type="text" id="placeholderText" value="Enter your username">
    </div>
    <div class="form-group checkbox">
      <input type="checkbox" id="showHelpText" checked>
      <label for="showHelpText">Show Help Text</label>
    </div>
    <div class="form-group">
      <label for="helpText">Help Text:</label>
      <input type="text" id="helpText" value="Must be 5-15 characters">
    </div>

    <!-- Style Controls -->
    <div class="form-group">
      <label for="labelColor">Label Color:</label>
      <input type="color" id="labelColor" value="#333333">
    </div>
    <div class="form-group">
      <label for="inputTextColor">Text Color:</label>
      <input type="color" id="inputTextColor" value="#333333">
    </div>
    <div class="form-group">
      <label for="inputBgColor">Background:</label>
      <input type="color" id="inputBgColor" value="#ffffff">
    </div>
    <div class="form-group">
      <label for="borderColor">Border Color:</label>
      <input type="color" id="borderColor" value="#cccccc">
    </div>
    <div class="form-group">
      <label for="focusColor">Focus Color:</label>
      <input type="color" id="focusColor" value="#3a86ff">
    </div>
    <div class="form-group">
      <label for="borderRadius">Border Radius (px):</label>
      <input type="number" id="borderRadius" value="4" min="0" max="50">
    </div>
    <div class="form-group">
      <label for="inputWidth">Width (%):</label>
      <input type="number" id="inputWidth" value="100" min="10" max="100">
    </div>
  `;
    case "hero":
      return `
    <div class="form-group">
      <label for="className">Class Name:</label>
      <input type="text" id="className" value="${defaultClassName}">
    </div>
    
    <div class="form-group">
      <label for="heroTitle">Main Heading:</label>
      <input type="text" id="heroTitle" value="Welcome to Our Website">
    </div>
    
    <div class="form-group">
      <label for="heroSubtitle">Subtitle:</label>
      <input type="text" id="heroSubtitle" value="Discover amazing features and services">
    </div>
    
    <div class="form-group">
      <label for="heroLayout">Layout Style:</label>
      <select id="heroLayout">
        <option value="centered">Centered</option>
        <option value="left-aligned">Left Aligned</option>
        <option value="right-aligned">Right Aligned</option>
        <option value="split">Split Content</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="heroBgColor">Background Color:</label>
      <input type="color" id="heroBgColor" value="#4a6bff">
    </div>
    
    <div class="form-group checkbox">
      <input type="checkbox" id="heroGradient">
      <label for="heroGradient">Use Gradient Background</label>
    </div>
    
    <div class="form-group" id="heroGradientColorGroup" style="display:none;">
      <label for="heroGradientColor">Secondary Color:</label>
      <input type="color" id="heroGradientColor" value="#8a2be2">
    </div>
    
    <div class="form-group">
      <label for="heroTextColor">Text Color:</label>
      <input type="color" id="heroTextColor" value="#ffffff">
    </div>
    
    <div class="form-group">
      <label for="heroHeight">Height:</label>
      <select id="heroHeight">
        <option value="small">Small (300px)</option>
        <option value="medium" selected>Medium (500px)</option>
        <option value="large">Large (700px)</option>
        <option value="fullscreen">Fullscreen</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="heroPadding">Padding (px):</label>
      <input type="number" id="heroPadding" value="40" min="0" max="200">
    </div>
    
    <div class="form-group checkbox">
      <input type="checkbox" id="includeButton" checked>
      <label for="includeButton">Include Call-to-Action Button</label>
    </div>
    
    <div class="form-group" id="buttonTextGroup">
      <label for="heroButtonText">Button Text:</label>
      <input type="text" id="heroButtonText" value="Get Started">
    </div>
    
    <div class="form-group checkbox">
      <input type="checkbox" id="heroOverlay">
      <label for="heroOverlay">Add Dark Overlay</label>
    </div>
    
    <div class="form-group checkbox">
      <input type="checkbox" id="heroAnimation">
      <label for="heroAnimation">Add Animation Effect</label>
    </div>
  `;
    case "modalpopup":
      return `
    <!-- Basic Modal Content Controls -->
    <div class="form-group">
      <label for="openButtonText">Open Button Text:</label>
      <input type="text" id="openButtonText" value="Open Modal">
    </div>
    <div class="form-group">
      <label for="modalContent">Modal Content:</label>
      <textarea id="modalContent" rows="4" placeholder="Enter modal content">This is a modal popup! You can place any content here.</textarea>
    </div>
    <hr>
    <!-- Open Button Styling -->
    <div class="form-group">
      <label for="modalOpenButtonBgColor">Open Button Background Color:</label>
      <input type="color" id="modalOpenButtonBgColor" value="#4361ee">
    </div>
    <div class="form-group">
      <label for="modalOpenButtonFontColor">Open Button Font Color:</label>
      <input type="color" id="modalOpenButtonFontColor" value="#ffffff">
    </div>
    <div class="form-group">
      <label for="modalOpenButtonFontSize">Open Button Font Size (e.g., 1rem):</label>
      <input type="text" id="modalOpenButtonFontSize" value="1rem">
    </div>
    <hr>
    <!-- Modal Overlay Styling -->
    <div class="form-group checkbox">
      <input type="checkbox" id="modalGradient">
      <label for="modalGradient">Use Gradient Overlay</label>
    </div>
    <div class="form-group" id="modalGradientGroup" style="display:none;">
      <label for="modalGradientStart">Gradient Start Color:</label>
      <input type="color" id="modalGradientStart" value="#000000">
      <label for="modalGradientEnd">Gradient End Color:</label>
      <input type="color" id="modalGradientEnd" value="#333333">
    </div>
    <div class="form-group" id="modalBgGroup" style="display:none;">
      <label for="modalBgColor">Modal Background Color:</label>
      <input type="color" id="modalBgColor" value="rgba(0,0,0,0.5)">
    </div>
    <hr>
    <!-- Modal Content Styling -->
    <div class="form-group">
      <label for="modalContentBgColor">Modal Content Background Color:</label>
      <input type="color" id="modalContentBgColor" value="#fefefe">
    </div>
    <div class="form-group">
      <label for="modalContentFont">Modal Content Font:</label>
      <select id="modalContentFont">
        <option value="'Poppins', sans-serif" selected>Poppins</option>
        <option value="Arial, sans-serif">Arial</option>
        <option value="'Times New Roman', serif">Times New Roman</option>
        <option value="'Courier New', monospace">Courier New</option>
        <option value="'Roboto', sans-serif">Roboto</option>
      </select>
    </div>
    <div class="form-group">
      <label for="modalContentFontColor">Modal Content Font Color:</label>
      <input type="color" id="modalContentFontColor" value="#333333">
    </div>
  `;

    case "progressbar":
      return `
    <div class="form-group">
      <label for="progressBarHeight">Progress Bar Height (e.g., 25px):</label>
      <input type="text" id="progressBarHeight" value="25px">
    </div>
    <div class="form-group">
      <label for="progressBarFont">Progress Bar Font:</label>
      <select id="progressBarFont">
        <option value="'Poppins', sans-serif" selected>Poppins</option>
        <option value="Arial, sans-serif">Arial</option>
        <option value="'Times New Roman', serif">Times New Roman</option>
        <option value="'Courier New', monospace">Courier New</option>
        <option value="'Roboto', sans-serif">Roboto</option>
      </select>
    </div>
    <div class="form-group">
      <label for="progressBarFontSize">Progress Bar Font Size (rem):</label>
      <input type="number" id="progressBarFontSize" value="1" step="0.1" min="0.5" max="3">
    </div>
    <div class="form-group">
      <label for="progressBarFontColor">Progress Bar Font Color:</label>
      <input type="color" id="progressBarFontColor" value="#ffffff">
    </div>
    <hr>
    <h3>Success Bar</h3>
    <div class="form-group">
      <label for="progressBarSuccessPercent">Success Percentage:</label>
      <input type="number" id="progressBarSuccessPercent" value="40" min="0" max="100">
    </div>
    <div class="form-group">
      <label for="progressBarSuccessText">Success Text:</label>
      <input type="text" id="progressBarSuccessText" value="40% Complete (success)">
    </div>
    <div class="form-group">
      <label for="progressBarSuccessColor">Success Color:</label>
      <input type="color" id="progressBarSuccessColor" value="#5cb85c">
    </div>
    <hr>
    <h3>Info Bar</h3>
    <div class="form-group">
      <label for="progressBarInfoPercent">Info Percentage:</label>
      <input type="number" id="progressBarInfoPercent" value="50" min="0" max="100">
    </div>
    <div class="form-group">
      <label for="progressBarInfoText">Info Text:</label>
      <input type="text" id="progressBarInfoText" value="50% Complete (info)">
    </div>
    <div class="form-group">
      <label for="progressBarInfoColor">Info Color:</label>
      <input type="color" id="progressBarInfoColor" value="#5bc0de">
    </div>
    <hr>
    <h3>Warning Bar</h3>
    <div class="form-group">
      <label for="progressBarWarningPercent">Warning Percentage:</label>
      <input type="number" id="progressBarWarningPercent" value="60" min="0" max="100">
    </div>
    <div class="form-group">
      <label for="progressBarWarningText">Warning Text:</label>
      <input type="text" id="progressBarWarningText" value="60% Complete (warning)">
    </div>
    <div class="form-group">
      <label for="progressBarWarningColor">Warning Color:</label>
      <input type="color" id="progressBarWarningColor" value="#f0ad4e">
    </div>
    <hr>
    <h3>Danger Bar</h3>
    <div class="form-group">
      <label for="progressBarDangerPercent">Danger Percentage:</label>
      <input type="number" id="progressBarDangerPercent" value="70" min="0" max="100">
    </div>
    <div class="form-group">
      <label for="progressBarDangerText">Danger Text:</label>
      <input type="text" id="progressBarDangerText" value="70% Complete (danger)">
    </div>
    <div class="form-group">
      <label for="progressBarDangerColor">Danger Color:</label>
      <input type="color" id="progressBarDangerColor" value="#d9534f">
    </div>
  `;

    case "counter":
      return `
  <div class="form-group">
    <label for="counterCount">Number of Counters:</label>
    <select id="counterCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3" selected>3</option>
    </select>
  </div>
  <div class="form-group">
    <label for="counterColor">Counter Number Color:</label>
    <input type="color" id="counterColor" value="#4361ee">
  </div>
  <hr>
  <h3>Counter 1</h3>
  <div class="form-group">
    <label for="state1Count">Counter 1 (Count To):</label>
    <input type="number" id="state1Count" value="300">
  </div>
  <div class="form-group">
    <label for="state1Title">Counter 1 Title:</label>
    <input type="text" id="state1Title" value="Coded Elements">
  </div>
  <div class="form-group">
    <label for="state1Desc">Counter 1 Description:</label>
    <textarea id="state1Desc" rows="2">From buttons, to inputs, navbars, alerts or cards, you are covered</textarea>
  </div>
  <hr>
  <h3>Counter 2</h3>
  <div class="form-group">
    <label for="state2Count">Counter 2 (Count To):</label>
    <input type="number" id="state2Count" value="100">
  </div>
  <div class="form-group">
    <label for="state2Title">Counter 2 Title:</label>
    <input type="text" id="state2Title" value="Design Blocks">
  </div>
  <div class="form-group">
    <label for="state2Desc">Counter 2 Description:</label>
    <textarea id="state2Desc" rows="2">Mix the sections, change the colors and unleash your creativity</textarea>
  </div>
  <hr>
  <h3>Counter 3</h3>
  <div class="form-group">
    <label for="state3Count">Counter 3 (Count To):</label>
    <input type="number" id="state3Count" value="39">
  </div>
  <div class="form-group">
    <label for="state3Title">Counter 3 Title:</label>
    <input type="text" id="state3Title" value="Pages">
  </div>
  <div class="form-group">
    <label for="state3Desc">Counter 3 Description:</label>
    <textarea id="state3Desc" rows="2">Save 3-4 weeks of work when you use our pre-made pages for your website</textarea>
  </div>
  <hr>
  <h3>Title &amp; Description Styling</h3>
  <div class="form-group">
    <label for="counterTitleFont">Title Font:</label>
    <select id="counterTitleFont">
      <option value="'Poppins', sans-serif" selected>Poppins</option>
      <option value="Arial, sans-serif">Arial</option>
      <option value="'Times New Roman', serif">Times New Roman</option>
      <option value="'Courier New', monospace">Courier New</option>
      <option value="'Roboto', sans-serif">Roboto</option>
    </select>
  </div>
  <div class="form-group">
    <label for="counterTitleFontSize">Title Font Size (rem):</label>
    <input type="number" id="counterTitleFontSize" value="2.5" step="0.1" min="1" max="5">
  </div>
  <div class="form-group">
    <label for="counterTitleColor">Title Color:</label>
    <input type="color" id="counterTitleColor" value="#000000">
  </div>
  <div class="form-group">
    <label for="counterDescFont">Description Font:</label>
    <select id="counterDescFont">
      <option value="'Poppins', sans-serif" selected>Poppins</option>
      <option value="Arial, sans-serif">Arial</option>
      <option value="'Times New Roman', serif">Times New Roman</option>
      <option value="'Courier New', monospace">Courier New</option>
      <option value="'Roboto', sans-serif">Roboto</option>
    </select>
  </div>
  <div class="form-group">
    <label for="counterDescFontSize">Description Font Size (rem):</label>
    <input type="number" id="counterDescFontSize" value="1" step="0.1" min="0.5" max="3">
  </div>
  <div class="form-group">
    <label for="counterDescColor">Description Color:</label>
    <input type="color" id="counterDescColor" value="#666666">
  </div>
    `;

    default:
      return "";
  }
}

//Completed

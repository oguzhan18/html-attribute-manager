 # HTML Attribute Manager
`HtmlAttributeManager` is a JavaScript class for managing HTML elements with specific attributes.

## Installation
````bash
npm install html-attribute-manager
````
## Usage
First, import `HtmlAttributeManager` into your JavaScript file:

`````bash
const HtmlAttributeManager = require('html-attribute-manager');
`````
Then, create an instance of HtmlAttributeManager by providing an object containing attribute-function pairs:

````bash
const attributeManager = new HtmlAttributeManager({
    "toggle-visibility": "toggleVisibility",
    "change-color": "changeColor"
});
````
## Constructor
HtmlAttributeManager(attributeName, functionName)
Creates an instance of HtmlAttributeManager.

* attributeName (`string`): The name of the HTML attribute to search for.
  
* functionName (`string`): The name of the function to call for each matching element.

## Methods
`handleEvent()`
Finds HTML elements with the specified attribute and calls the corresponding function.
`destroy()`
Removes the event listener when the instance is no longer needed.
## Example
````javascript
// Define functions
window.toggleVisibility = function(element, value) {
    if (value === 'true') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
};

window.changeColor = function(element, color) {
    element.style.color = color;
};

// Create an instance of HtmlAttributeManager
const attributeManager = new HtmlAttributeManager({
    "toggle-visibility": "toggleVisibility",
    "change-color": "changeColor"
});
````
## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests on <a href="https://github.com/oguzhan18/html-attribute-manager" target="_blank">Github</a>.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
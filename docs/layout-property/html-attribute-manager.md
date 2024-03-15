# How to use the HTML Attribute Manager?

First, import HtmlAttributeManager into your JavaScript file:

```javascript
const HtmlAttributeManager = require('html-attribute-manager');
````
<p> Then, create an instance of HtmlAttributeManager by providing an object containing attribute-function pairs: </p>

````javascript
const attributeManager = new HtmlAttributeManager({
    "toggle-visibility": "toggleVisibility",
    "change-color": "changeColor"
});

````

## Constructor
`HtmlAttributeManager(attributeName, functionName)` Creates an instance of HtmlAttributeManager.

* attributeName (string): The name of the HTML attribute to search for.
* functionName (string): The name of the function to call for each matching element.

## Methods
<b>handleEvent()</b>
Finds HTML elements with the specified attribute and calls the corresponding function.

<b>destroy()</b>
Removes the event listener when the instance is no longer needed.

Example
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


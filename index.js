/**
 * Class for managing HTML elements with specific attributes.
 */
class HtmlAttributeManager {
    /**
     * Creates an instance of HtmlAttributeManager.
     * @param {string} attributeName - The name of the HTML attribute to search for.
     * @param {string} functionName - The name of the function to call for each matching element.
     */
    constructor(attributeName, functionName) {
        this.attributeName = attributeName;
        this.functionName = functionName;
        this.handleEvent = this.handleEvent.bind(this);
        document.addEventListener('DOMContentLoaded', this.handleEvent);
    }

    /**
     * Finds HTML elements with the specified attribute and calls the corresponding function.
     */
    handleEvent() {
        try {
            const elements = document.querySelectorAll(`[${this.attributeName}]`);
            elements.forEach(element => {
                const attributeValue = element.getAttribute(this.attributeName);
                if (typeof window[this.functionName] === 'function') {
                    window[this.functionName](element, attributeValue);
                } else {
                    console.error(`Function '${this.functionName}' not found or not a function.`);
                }
            });
        } catch (error) {
            console.error('An error occurred while processing HTML attributes:', error);
        }
    }

    /**
     * Removes the event listener when the instance is no longer needed.
     */
    destroy() {
        document.removeEventListener('DOMContentLoaded', this.handleEvent);
    }
}

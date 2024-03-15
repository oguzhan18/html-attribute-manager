# How to use the JS Slider?

You can easily create sliders with the `.js-slider` class. All you have to do is include the source code library in your project.

# Usage Method
## HTML Add the following code to your HTML file.
To use the `.gls-container` class, you can follow the example below:

```html

<div class="js-slider" auto="true" arrow="true" dots="true">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <button class="prev">◀</button>
    <button class="next">▶</button>
</div>
````
## Slider Attributes ( Auto | Arrow | Dots)
- `auto` : If you want the slider to move automatically, you can use the `auto` attribute. The default value is false.
- `arrow` : If you want to show the arrow buttons, you can use the `arrow` attribute. The default value is false.
- `dots` : If you want to show the dots, you can use the `dots` attribute. The default value is false.
- `ìnfinite` : If you want to show the infinite slider, you can use the `infinite` attribute. The default value is true.
- `transition`: If you want to change the transition time, you can use the `transition` attribute. The default value is 0.5s.

# Live Example

<iframe src="https://stackblitz.com/edit/stackblitz-starters-zgog1z?file=index.html" width="100%" height="450"></iframe>


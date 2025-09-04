//your JS code here. If required.
// script.js

// Wait until the DOM is fully loaded
window.onload = function () {
    // Get the element with id "level"
    let element = document.getElementById("level");

    if (!element) {
        alert("Element with id 'level' not found.");
        return;
    }

    let level = 0;
    // Traverse up the DOM tree until reaching the root html element
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Display the result
    alert("The level of the element is: " + level);
};

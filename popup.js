// popup.js

// Function to apply the 2016 theme to the Roblox website
function applyTheme() {
    // Add your code here to modify the website's appearance
    // For simplicity, let's change the background color to mimic the 2016 theme
    document.body.style.backgroundColor = "#f2f2f2"; // Background color similar to 2016 Roblox
}

// Function to reset the website's theme to default
function resetTheme() {
    // Add your code here to reset any modifications made by the extension
    document.body.style.backgroundColor = ""; // Reset background color
}

// Add click event listeners to the buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("applyTheme").addEventListener("click", applyTheme);
    document.getElementById("resetTheme").addEventListener("click", resetTheme);
});

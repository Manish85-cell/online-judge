// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Example: Show a message when a button is clicked
    const runCodeButton = document.querySelector(".btn-run");
    if (runCodeButton) {
      runCodeButton.addEventListener("click", function () {
        alert("Running your code...");
        // Add code to run the actual code here
      });
    }
  
    // Example: Toggle navigation menu on small screens
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".header__nav");
  
    if (navToggle) {
      navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
      });
    }
  
    // Example: Input validation for forms
    const form = document.querySelector(".form");
    if (form) {
      form.addEventListener("submit", function (event) {
        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;
  
        inputs.forEach(input => {
          if (!input.value) {
            valid = false;
            input.classList.add("error");
          } else {
            input.classList.remove("error");
          }
        });
  
        if (!valid) {
          event.preventDefault();
          alert("Please fill all fields.");
        }
      });
    }
  });
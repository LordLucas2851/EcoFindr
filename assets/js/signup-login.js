// Select form elements
const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

// Handle Sign-Up
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Sign-up successful! Redirecting to the home page.");
    window.location.href = "home.html"; // Redirect to home page
});

// Handle Login
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Login successful! Redirecting to the home page.");
    window.location.href = "home.html"; // Redirect to home page
});

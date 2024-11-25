const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    alert("Sign-up successful! Redirecting to the home page.");
    window.location.href = "home.html"; 
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    alert("Login successful! Redirecting to the home page.");
    window.location.href = "home.html"; 
});

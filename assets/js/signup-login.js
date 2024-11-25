// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMj9JRGUagjR0cQefUljiUOxe_nh74-XA",
  authDomain: "ecofindr-4fffd.firebaseapp.com",
  projectId: "ecofindr-4fffd",
  storageBucket: "ecofindr-4fffd.firebasestorage.app",
  messagingSenderId: "64553820107",
  appId: "1:64553820107:web:d58342f35b5ccc92ef204e",
  measurementId: "G-TG958E6F56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup form handling
const signupForm = document.getElementById("signup");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signup successful
      alert("Sign-up successful! Redirecting to the home page.");
      window.location.href = "home.html"; // Redirect to home page
    })
    .catch((error) => {
      // Handle signup errors
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});

// Login form handling
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      alert("Login successful! Redirecting to the home page.");
      window.location.href = "home.html"; // Redirect to home page
    })
    .catch((error) => {
      // Handle login errors
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});

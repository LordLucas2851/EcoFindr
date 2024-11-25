// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq9shDTSKIE7lfO8ydnuThm_JxOHMBSfc",
    authDomain: "ecofindr-be091.firebaseapp.com",
    projectId: "ecofindr-be091",
    storageBucket: "ecofindr-be091.firebasestorage.app",
    messagingSenderId: "960864865608",
    appId: "1:960864865608:web:b3361aa4b716a2ea2b777d",
    measurementId: "G-9GJ67QYMFN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle signup form submission
document.getElementById('signup').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            console.log('User signed up:', userCredential.user);
            window.location.href = 'index.html';  // Redirect to home page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Sign Up Error: ' + errorMessage);
        });
});

// Handle login form submission
document.getElementById('login').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            console.log('User logged in:', userCredential.user);
            window.location.href = 'index.html';  // Redirect to home page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Login Error: ' + errorMessage);
        });
});

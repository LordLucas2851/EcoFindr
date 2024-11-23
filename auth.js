import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const auth = getAuth();

// Signup Logic
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Account created successfully!");
            window.location.href = "input.html";
        })
        .catch(error => {
            alert(error.message);
        });
});

// Login Logic
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Welcome back!");
            window.location.href = "input.html";
        })
        .catch(error => {
            alert(error.message);
        });
});

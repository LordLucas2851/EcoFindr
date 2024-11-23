import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBq9shDTSKIE7lfO8ydnuThm_JxOHMBSfc",
    authDomain: "ecofindr-be091.firebaseapp.com",
    projectId: "ecofindr-be091",
    storageBucket: "ecofindr-be091.firebasestorage.app",
    messagingSenderId: "960864865608",
    appId: "1:960864865608:web:4994220d1cdf9c6d2b777d",
    measurementId: "G-577X5TWXTT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            window.location.href = 'recommendation.html';
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    });
}

// Handle Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Signup successful!');
            window.location.href = 'recommendation.html';
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    });
}

// Recommendations
const recommendationForm = document.getElementById('recommendationForm');
if (recommendationForm) {
    recommendationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('userInput').value.toLowerCase();
        const recommendations = {
            "clothes": ["Patagonia", "Eileen Fisher", "Everlane"],
            "electronics": ["Fairphone", "Dell's recycled range"],
            "cleaning": ["Seventh Generation", "Ecover", "Blueland"]
        };
        const results = recommendations[input] || ["No recommendations available."];
        document.getElementById('recommendations').innerHTML = `<h2>Recommendations:</h2><ul>${results.map(r => `<li>${r}</li>`).join('')}</ul>`;
    });
}

// Forum
const forumForm = document.getElementById('forumForm');
if (forumForm) {
    forumForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const question = document.getElementById('forumQuestion').value;
        const forumQuestions = document.getElementById('forumQuestions');
        const questionElement = document.createElement('div');
        questionElement.textContent = question;
        forumQuestions.appendChild(questionElement);
        document.getElementById('forumQuestion').value = '';
    });
}

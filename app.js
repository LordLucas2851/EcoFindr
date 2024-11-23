// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();

const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const authForm = document.getElementById('authForm');
const authFormSubmitBtn = document.getElementById('submitAuthBtn');
const recommendationForm = document.getElementById('recommendation-form');
const recommendationsResult = document.getElementById('recommendations-result');

// Show the login form when "Log In" button is clicked
loginBtn.addEventListener('click', () => {
    document.getElementById('authForm').style.display = 'block'; // Show form
    authFormSubmitBtn.textContent = 'Log In'; // Change button text to "Log In"
    authFormSubmitBtn.onclick = login; // Set the form's submit action to "login"
});

// Show the signup form when "Sign Up" button is clicked
signupBtn.addEventListener('click', () => {
    document.getElementById('authForm').style.display = 'block'; // Show form
    authFormSubmitBtn.textContent = 'Sign Up'; // Change button text to "Sign Up"
    authFormSubmitBtn.onclick = signup; // Set the form's submit action to "signup"
});

// Handle the login process
function login(e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'recommendations.html'; // Redirect to the recommendations page on success
        })
        .catch(error => alert('Login Error: ' + error.message)); // Show error message
}

// Handle the signup process
function signup(e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'recommendations.html'; // Redirect to the recommendations page on success
        })
        .catch(error => alert('Signup Error: ' + error.message)); // Show error message
}

// Handle the recommendations page functionality
recommendationForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from submitting

    const queryInput = document.getElementById('query').value; // Get the user's input

    // Fetch recommendations from Firestore based on the user's input
    const recommendations = await db.collection('eco-friendly-brands')
                                    .where('tags', 'array-contains', queryInput)
                                    .get();

    let resultHTML = '';
    recommendations.forEach(doc => {
        resultHTML += `<div class="recommendation-item">
                        <h3>${doc.data().name}</h3>
                        <p>${doc.data().description}</p>
                      </div>`;
    });

    recommendationsResult.innerHTML = resultHTML || '<p>No recommendations found.</p>';
});

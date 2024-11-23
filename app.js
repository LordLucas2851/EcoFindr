// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();

const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const authForm = document.getElementById('authForm');
const authFormSubmitBtn = document.getElementById('submitAuthBtn');
const recommendationForm = document.getElementById('recommendation-form');
const recommendationsResult = document.getElementById('recommendations-result');

loginBtn.addEventListener('click', () => {
    document.getElementById('authForm').style.display = 'block';
    authFormSubmitBtn.textContent = 'Log In';
    authFormSubmitBtn.onclick = login;
});

signupBtn.addEventListener('click', () => {
    document.getElementById('authForm').style.display = 'block';
    authFormSubmitBtn.textContent = 'Sign Up';
    authFormSubmitBtn.onclick = signup;
});

function login(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'recommendations.html'; // Redirect to recommendations page
        })
        .catch(error => alert(error.message));
}

function signup(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'recommendations.html'; // Redirect to recommendations page
        })
        .catch(error => alert(error.message));
}

// Handle recommendations page
recommendationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const queryInput = document.getElementById('query').value;

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

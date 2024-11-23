// Signup functionality
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert('Signup successful!');
        window.location.href = 'index.html'; // Redirect to the login page after signup
    } catch (error) {
        console.error(error);
        alert('Error signing up: ' + error.message);
    }
});

// Login functionality
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        window.location.href = 'input.html'; // Redirect to the input page after login
    } catch (error) {
        console.error(error);
        alert('Error logging in: ' + error.message);
    }
});

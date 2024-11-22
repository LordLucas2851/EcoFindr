// Function to show error messages
function showError(element, message) {
    element.textContent = message;
    setTimeout(() => {
        element.textContent = '';
    }, 3000);
}

// Signup functionality
const signupForm = document.querySelector('#signup-form');
signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const signupError = document.querySelector('#signup-error');

    if (!username || !password) {
        showError(signupError, 'Both fields are required.');
        return;
    }

    // Check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
    if (existingUsers[username]) {
        showError(signupError, 'Username already exists.');
        return;
    }

    // Save the new user to LocalStorage
    existingUsers[username] = password;
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Signup successful! You can now log in.');
    signupForm.reset();
});

// Login functionality
const loginForm = document.querySelector('#login-form');
loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    const loginError = document.querySelector('#login-error');

    if (!username || !password) {
        showError(loginError, 'Both fields are required.');
        return;
    }

    // Check if the user exists and the password matches
    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
    if (existingUsers[username] && existingUsers[username] === password) {
        alert('Login successful!');
        loginForm.reset();
    } else {
        showError(loginError, 'Invalid username or password.');
    }
});

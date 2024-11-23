// Login functionality
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    try {
        // Firebase sign-in method
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        
        // Redirect to another page after login (like the dashboard or input page)
        window.location.href = 'input.html'; // Modify this to your desired page

    } catch (error) {
        console.error("Error logging in:", error);
        alert('Login failed: ' + error.message); // Provide feedback on the error
    }
});

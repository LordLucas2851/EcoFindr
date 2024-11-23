// Import Firebase and initialize
const firebaseConfig = {
  apiKey: "AIzaSyBq9shDTSKIE7lfO8ydnuThm_JxOHMBSfc",
  authDomain: "ecofindr-be091.firebaseapp.com",
  projectId: "ecofindr-be091",
  storageBucket: "ecofindr-be091.firebasestorage.app",
  messagingSenderId: "960864865608",
  appId: "1:960864865608:web:4994220d1cdf9c6d2b777d",
  measurementId: "G-577X5TWXTT"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign up function
function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "recommendations.html"; // Redirect to recommendations page
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login function
function logIn(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "recommendations.html"; // Redirect to recommendations page
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Logout function
function logOut() {
  auth.signOut()
    .then(() => {
      window.location.href = "index.html"; // Redirect to home page
    })
    .catch((error) => {
      alert(error.message);
    });
}

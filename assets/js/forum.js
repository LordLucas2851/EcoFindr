// Import Firebase modules for app initialization, Firestore, and authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration (same as the one used for sign-up)
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
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Get references to the DOM elements
const questionInput = document.getElementById("question-input");
const submitButton = document.getElementById("submit-question");
const faqContainer = document.getElementById("faq-container");

// Add event listener for the Submit Question button
submitButton.addEventListener("click", async function() {
    // Get the user's question from the textarea
    const questionText = questionInput.value.trim();

    // Check if the question is not empty
    if (questionText) {
        try {
            // Add the question to Firestore
            const docRef = await addDoc(collection(db, "questions"), {
                question: questionText,
                answers: [],
                timestamp: serverTimestamp(),
            });

            console.log("Question added with ID: ", docRef.id);

            // Clear the input field after submission
            questionInput.value = "";

            // Load updated questions from Firestore
            loadQuestions();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    } else {
        // If the input is empty, alert the user
        alert("Please enter a question before submitting.");
    }
});

// Function to load questions from Firestore
async function loadQuestions() {
    // Get a reference to the 'questions' collection
    const q = query(collection(db, "questions"), orderBy("timestamp", "desc"));
    
    // Get the documents from the collection
    const querySnapshot = await getDocs(q);
    
    // Clear the existing FAQ items before appending new ones
    faqContainer.innerHTML = "";
    
    // Loop through the documents and display the questions
    querySnapshot.forEach((doc) => {
        const questionData = doc.data();
        
        // Create a new FAQ item for each question
        const newFaqItem = document.createElement("div");
        newFaqItem.classList.add("faq-item");

        // Add the question and a placeholder for answers
        newFaqItem.innerHTML = `
            <strong>Q: ${questionData.question}</strong>
            <p>A: <i>Waiting for an answer...</i></p>
        `;

        // Append the new FAQ item to the container
        faqContainer.appendChild(newFaqItem);
    });
}

// Load questions when the page loads
window.onload = loadQuestions;

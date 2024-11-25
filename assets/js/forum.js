import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, query, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
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
const db = getFirestore(app);

// Get DOM elements
const questionInput = document.getElementById("question-input");
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-question");
const faqContainer = document.getElementById("faq-container");

// Fetch existing questions from Firestore and display them
async function fetchQuestions() {
    try {
        const q = query(collection(db, "questions"), orderBy("timestamp"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const questionData = doc.data();
            const newFaqItem = document.createElement("div");
            newFaqItem.classList.add("faq-item");
            newFaqItem.innerHTML = `
                <strong>Q: ${questionData.question}</strong>
                <p>A: ${questionData.answer || "Waiting for an answer..."}</p>
            `;
            faqContainer.appendChild(newFaqItem);
        });
    } catch (e) {
        console.error("Error fetching questions: ", e);
    }
}

// Submit new question to Firestore
submitButton.addEventListener("click", async () => {
    const questionText = questionInput.value.trim();
    const email = emailInput.value.trim();

    if (questionText && email) {
        try {
            // Save question and email to Firestore
            await addDoc(collection(db, "questions"), {
                question: questionText,
                email: email,
                timestamp: new Date(),
                answer: "", // Empty answer initially
            });

            // Clear input fields after submission
            questionInput.value = "";
            emailInput.value = "";

            // Reload the questions from Firestore to reflect the new one
            fetchQuestions();
        } catch (e) {
            console.error("Error adding question: ", e);
        }
    } else {
        alert("Please enter both a question and your email.");
    }
});

// Initialize by fetching existing questions
fetchQuestions();

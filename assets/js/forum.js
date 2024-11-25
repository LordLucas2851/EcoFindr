import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js';

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
const emailInput = document.getElementById("email-input");  // Assuming there's an input for the email
const submitButton = document.getElementById("submit-question");
const faqContainer = document.getElementById("faq-container");

// EmailJS configuration
const emailJSServiceID = "service_8bwgvkk"; // Replace with your EmailJS service ID
const emailJSTemplateID = "template_fy5gkdz"; // Replace with your EmailJS template ID
const emailJSUserID = "euggqJf1pklcQY6Uo"; // Replace with your EmailJS user ID

// Function to send an email
const sendEmail = async (toEmail, fromName, message) => {
    try {
        const templateParams = {
            to_name: toEmail,
            from_name: fromName,
            message: message,
        };

        await emailjs.send(emailJSServiceID, emailJSTemplateID, templateParams, emailJSUserID);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Fetch existing questions from Firestore and display them
async function fetchQuestions() {
    try {
        const q = query(collection(db, "questions"), orderBy("timestamp"));
        const querySnapshot = await getDocs(q);
        faqContainer.innerHTML = ''; // Clear previous questions
        querySnapshot.forEach((doc) => {
            const questionData = doc.data();
            const newFaqItem = document.createElement("div");
            newFaqItem.classList.add("faq-item");

            // Add the question and an input field for an answer
            newFaqItem.innerHTML = `
                <strong>Q: ${questionData.question}</strong>
                <p>A: <span id="answer-${doc.id}">${questionData.answer || "Waiting for an answer..."}</span></p>
                <textarea id="answer-input-${doc.id}" placeholder="Your answer here..."></textarea>
                <button class="answer-button" data-doc-id="${doc.id}">Submit Answer</button>
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
    const userEmail = emailInput.value.trim(); // Get the email entered by the user

    if (questionText && userEmail) {
        try {
            // Save question and email to Firestore
            const docRef = await addDoc(collection(db, "questions"), {
                question: questionText,
                email: userEmail,
                timestamp: new Date(),
                answer: "",  // Initially no answer
            });

            // Clear input fields after submission
            questionInput.value = "";
            emailInput.value = "";

            // Reload the questions from Firestore
            fetchQuestions();
        } catch (e) {
            console.error("Error adding question: ", e);
        }
    } else {
        alert("Please enter a question and your email before submitting.");
    }
});

// Add event listener for submitting an answer
faqContainer.addEventListener("click", async (event) => {
    if (event.target.classList.contains("answer-button")) {
        const questionDocId = event.target.getAttribute("data-doc-id");
        const answerInput = document.getElementById(`answer-input-${questionDocId}`).value.trim();

        if (answerInput) {
            try {
                // Get the question document from Firestore
                const questionDocRef = doc(db, "questions", questionDocId);

                // Update the answer in Firestore
                await updateDoc(questionDocRef, {
                    answer: answerInput,
                });

                // Send an email to the user who asked the question
                const questionDocSnapshot = await getDoc(questionDocRef);
                const userEmail = questionDocSnapshot.data().email;
                const questionText = questionDocSnapshot.data().question;

                sendEmail(userEmail, "Admin", `Your question "${questionText}" has been answered: "${answerInput}"`);

                // Reload questions to display the updated answer
                fetchQuestions();
            } catch (e) {
                console.error("Error updating answer: ", e);
            }
        } else {
            alert("Please enter an answer before submitting.");
        }
    }
});

// Initialize by fetching existing questions
fetchQuestions();

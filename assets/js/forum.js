import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { sendEmail } from './email-notification.js';

//Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDMj9JRGUagjR0cQefUljiUOxe_nh74-XA",
    authDomain: "ecofindr-4fffd.firebaseapp.com",
    projectId: "ecofindr-4fffd",
    storageBucket: "ecofindr-4fffd.firebasestorage.app",
    messagingSenderId: "64553820107",
    appId: "1:64553820107:web:d58342f35b5ccc92ef204e",
    measurementId: "G-TG958E6F56"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const questionInput = document.getElementById("question-input");
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-question");
const faqContainer = document.getElementById("faq-container");

//Grab questions from Firebase Database
async function fetchQuestions() {
    try {
        const q = query(collection(db, "questions"), orderBy("timestamp"));
        const querySnapshot = await getDocs(q);
        faqContainer.innerHTML = ''; 
        querySnapshot.forEach((doc) => {
            const questionData = doc.data();
            const newFaqItem = document.createElement("div");
            newFaqItem.classList.add("faq-item");

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

//Add new question to Firebase
submitButton.addEventListener("click", async () => {
    const questionText = questionInput.value.trim();
    const email = emailInput.value.trim();

    if (questionText && email) {
        try {
            await addDoc(collection(db, "questions"), {
                question: questionText,
                email: email,
                timestamp: new Date(),
                answer: "", 
            });

            questionInput.value = "";
            emailInput.value = "";

            fetchQuestions();
        } catch (e) {
            console.error("Error adding question: ", e);
        }
    } else {
        alert("Please enter both a question and your email.");
    }
});

//Answer a question and send email notification
faqContainer.addEventListener("click", async (event) => {
    if (event.target && event.target.classList.contains("answer-button")) {
        const docId = event.target.getAttribute("data-doc-id");
        const answerInput = document.getElementById(`answer-input-${docId}`).value.trim();

        if (answerInput) {
            try {
                const questionRef = doc(db, "questions", docId);
                const questionSnapshot = await getDoc(questionRef);

                if (questionSnapshot.exists()) {
                    const questionData = questionSnapshot.data();

                    await updateDoc(questionRef, {
                        answer: answerInput,
                    });

                    const answerElement = document.getElementById(`answer-${docId}`);
                    answerElement.textContent = answerInput;

                    //Send email notification
                    const userEmail = questionData.email;
                    const questionText = questionData.question;
                    const message = `Hello,\n\nYour question has been answered:\n\nQuestion: "${questionText}"\nAnswer: "${answerInput}"\n\nThank you for using EcoFindr!`;

                    try {
                        await sendEmail(userEmail, "EcoFindr Support", message);
                        alert("Answer submitted and email notification sent!");
                    } catch (emailError) {
                        console.error("Error sending email:", emailError);
                        alert("Answer submitted, but failed to send email notification.");
                    }
                } else {
                    alert("Question not found!");
                }
            } catch (e) {
                console.error("Error updating answer or fetching question: ", e);
                alert("An error occurred while submitting the answer.");
            }
        } else {
            alert("Please enter an answer.");
        }
    }
});

fetchQuestions();

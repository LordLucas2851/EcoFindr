import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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
        faqContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const questionData = doc.data();
            const newFaqItem = document.createElement("div");
            newFaqItem.classList.add("faq-item");

            newFaqItem.innerHTML = `
                <strong>Q: ${questionData.question}</strong>
                <p>A: <span id="answer-${doc.id}">${questionData.answer || "Waiting for an answer..."}</span></p>
                <textarea id="answer-input-${doc.id}" placeholder="Your answer here..."></textarea>
                <button class="answer-button" data-doc-id="${doc.id}" data-email="${questionData.email}" data-question="${questionData.question}">Submit Answer</button>
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

//Answer a question, update Firebase, and send email
faqContainer.addEventListener("click", async (event) => {
    if (event.target && event.target.classList.contains("answer-button")) {
        const docId = event.target.getAttribute("data-doc-id");
        const userEmail = event.target.getAttribute("data-email");
        const userQuestion = event.target.getAttribute("data-question");
        const answerInput = document.getElementById(`answer-input-${docId}`).value.trim();

        if (answerInput) {
            try {
                const questionRef = doc(db, "questions", docId);
                await updateDoc(questionRef, {
                    answer: answerInput,
                });

                const answerElement = document.getElementById(`answer-${docId}`);
                answerElement.textContent = answerInput;

                const templateParams = {
                    to_name: userEmail,
                    from_name: "EcoFindr Support",
                    question: userQuestion,
                    answer: answerInput,
                };

                emailjs
                    .send("service_8bwgvkk", "template_fy5gkdz", templateParams)
                    .then(() => {
                        console.log("Email sent successfully");
                    })
                    .catch((error) => {
                        console.error("Error sending email:", error);
                    });

                alert("Answer submitted!");
            } catch (e) {
                console.error("Error updating answer: ", e);
            }
        } else {
            alert("Please enter an answer.");
        }
    }
});

fetchQuestions();

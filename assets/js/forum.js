import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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
const submitButton = document.getElementById("submit-question");
const faqContainer = document.getElementById("faq-container");

async function fetchQuestions() {
    try {
        const q = query(collection(db, "questions"), orderBy("timestamp"));
        const querySnapshot = await getDocs(q);

        faqContainer.innerHTML = ''; 

        querySnapshot.forEach((doc) => {
            const questionData = doc.data();
            const newFaqItem = document.createElement("div");
            newFaqItem.classList.add("faq-item");

            const answerText = questionData.answer || "<i>Waiting for an answer...</i>";
            newFaqItem.innerHTML = `
                <strong>Q: ${questionData.question}</strong>
                <p>A: ${answerText}</p>
                <button class="answer-button" data-id="${doc.id}">Answer</button>
            `;
            faqContainer.appendChild(newFaqItem);
        });

        const answerButtons = document.querySelectorAll('.answer-button');
        answerButtons.forEach(button => {
            button.addEventListener('click', answerQuestion);
        });

    } catch (e) {
        console.error("Error fetching questions: ", e);
    }
}

submitButton.addEventListener("click", async () => {
    const questionText = questionInput.value.trim();

    if (questionText) {
        try {
            await addDoc(collection(db, "questions"), {
                question: questionText,
                timestamp: new Date(),
                answer: "" 
            });

            questionInput.value = ""; 
            fetchQuestions();
        } catch (e) {
            console.error("Error adding question: ", e);
        }
    } else {
        alert("Please enter a question before submitting.");
    }
});

async function answerQuestion(event) {
    const questionId = event.target.getAttribute("data-id");
    const answerText = prompt("Enter your answer:");

    if (answerText) {
        try {
            const questionDoc = doc(db, "questions", questionId);
            await updateDoc(questionDoc, { answer: answerText });

            fetchQuestions(); 
        } catch (e) {
            console.error("Error adding answer: ", e);
        }
    }
}

fetchQuestions();

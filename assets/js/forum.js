import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

submitButton.addEventListener("click", async function() {
    const questionText = questionInput.value.trim();

    if (questionText) {
        try {
            const docRef = await addDoc(collection(db, "questions"), {
                question: questionText,
                answers: [],
                timestamp: serverTimestamp(),
            });

            console.log("Question added with ID: ", docRef.id);

            questionInput.value = "";

            loadQuestions();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    } else {
        alert("Please enter a question before submitting.");
    }
});

async function loadQuestions() {
    const q = query(collection(db, "questions"), orderBy("timestamp", "desc"));
    
    const querySnapshot = await getDocs(q);
    
    faqContainer.innerHTML = "";
    
    querySnapshot.forEach((doc) => {
        const questionData = doc.data();
        
        const newFaqItem = document.createElement("div");
        newFaqItem.classList.add("faq-item");

        newFaqItem.innerHTML = `
            <strong>Q: ${questionData.question}</strong>
            <p>A: ${questionData.answers.length > 0 ? questionData.answers.join("<br>") : "<i>Waiting for an answer...</i>"}</p>
            <textarea placeholder="Type your answer here..." id="answer-input-${doc.id}"></textarea>
            <button onclick="answerQuestion('${doc.id}')">Submit Answer</button>
        `;

        faqContainer.appendChild(newFaqItem);
    });
}

async function answerQuestion(questionId) {
    const answerInput = document.getElementById(`answer-input-${questionId}`);
    const answerText = answerInput.value.trim();

    if (answerText) {
        const questionRef = doc(db, "questions", questionId);

        try {
            await updateDoc(questionRef, {
                answers: arrayUnion(answerText),
            });

            console.log("Answer added to question ID:", questionId);

            answerInput.value = "";

            loadQuestions();
        } catch (e) {
            console.error("Error adding answer: ", e);
        }
    } else {
        alert("Please enter an answer before submitting.");
    }
}

loadQuestions();

// Get references to the DOM elements
const questionInput = document.getElementById("question-input");
const submitButton = document.getElementById("submit-question");
const faqContainer = document.getElementById("faq-container");

// Add event listener for the Submit Question button
submitButton.addEventListener("click", function() {
    // Get the user's question from the textarea
    const questionText = questionInput.value.trim();

    // Check if the question is not empty
    if (questionText) {
        // Create a new FAQ item for the submitted question
        const newFaqItem = document.createElement("div");
        newFaqItem.classList.add("faq-item");

        // Add the question (and a placeholder for an answer)
        newFaqItem.innerHTML = `
            <strong>Q: ${questionText}</strong>
            <p>A: <i>Waiting for an answer...</i></p>
        `;

        // Append the new FAQ item to the container
        faqContainer.appendChild(newFaqItem);

        // Clear the input field after submission
        questionInput.value = "";
    } else {
        // If the input is empty, alert the user
        alert("Please enter a question before submitting.");
    }
});

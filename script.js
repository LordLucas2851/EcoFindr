// Recommendations Data
const ecoFriendlyBrands = {
    "clothing": ["Patagonia", "Everlane", "Tentree"],
    "cleaning": ["Seventh Generation", "Method", "Ecover"],
    "beauty": ["Lush", "The Body Shop", "Burt's Bees"],
    // Add more categories here
};

// Handle Signup
document.getElementById("signupForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    alert(`Welcome, ${username}! Your account has been created.`);
    window.location.href = "recommendation.html";
});

// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    alert(`Welcome back, ${username}!`);
    window.location.href = "recommendation.html";
});

// Handle Recommendations
document.getElementById("recommendationForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("userInput").value.toLowerCase();
    const recommendations = ecoFriendlyBrands[input] || ["No recommendations found for this category."];
    document.getElementById("recommendations").innerHTML = `<ul>${recommendations.map(r => `<li>${r}</li>`).join('')}</ul>`;
});

// Handle Forum Questions
document.getElementById("forumForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const question = document.getElementById("question").value;
    const questionList = document.getElementById("questionsList");
    const newQuestion = document.createElement("li");
    newQuestion.textContent = question;
    questionList.appendChild(newQuestion);
    document.getElementById("forumForm").reset();
});

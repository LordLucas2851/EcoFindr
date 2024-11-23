document.getElementById('recommendationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const recommendations = {
        clothes: ["Patagonia", "Everlane", "Eileen Fisher", "Reformation", "Tentree"],
        food: ["Imperfect Foods", "Thrive Market", "Misfits Market", "Local Harvest", "Greensbury"],
        cleaning: ["Blueland", "Seventh Generation", "Grove Collaborative", "Method", "Ecover"],
        travel: ["Turo", "Lime", "Zipcar", "BlaBlaCar", "Wheels for Wishes"],
        electronics: ["Dell (Refurbished)", "Back Market", "EcoATM", "Sustaina", "Gomi"],
        beauty: ["Bite Beauty", "Lush", "Ethique", "Kjaer Weis", "Herbivore Botanicals"],
        furniture: ["Sabai", "West Elm (Sustainable)", "Burrow", "Medley", "Avocado Green Mattress"]
    };

    const matchingRecommendations = recommendations[userInput] || ["No matches found. Try another keyword!"];
    const recommendationsDiv = document.getElementById('recommendations');

    recommendationsDiv.innerHTML = `
        <h2>Recommendations for "${userInput}":</h2>
        <ul>
            ${matchingRecommendations.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
});

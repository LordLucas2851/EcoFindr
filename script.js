document.getElementById("eco-recommendation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const preferences = document.getElementById("preferences").value.trim();
    const recommendations = document.getElementById("recommendations");
    const recommendationsList = document.getElementById("recommendations-list");

    // Fake recommendation logic (this should ideally be dynamic)
    const ecoBrands = ["GreenTech", "EcoLife", "SustainableGoods", "EarthCare"];
    const filteredRecommendations = ecoBrands.filter(brand => brand.toLowerCase().includes(preferences.toLowerCase()));

    recommendationsList.innerHTML = "";
    filteredRecommendations.forEach(brand => {
        const listItem = document.createElement("li");
        listItem.textContent = brand;
        recommendationsList.appendChild(listItem);
    });
    recommendations.style.display = "block";
});

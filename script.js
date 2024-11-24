document.addEventListener("DOMContentLoaded", () => {
  // Mock Data of 100 Eco-Friendly Brands (You can replace this with actual data)
  const ecoFriendlyBrands = [
    { name: "Brand 1", description: "Eco-friendly clothing made from sustainable materials.", category: "clothing" },
    { name: "Brand 2", description: "Organic food with a focus on sustainable farming practices.", category: "food" },
    { name: "Brand 3", description: "Zero-waste products for an eco-conscious lifestyle.", category: "household" },
    { name: "Brand 4", description: "Reusable items and eco-friendly alternatives to daily products.", category: "household" },
    { name: "Brand 5", description: "Environmentally friendly fashion with a focus on fair labor practices.", category: "clothing" },
    // Add 95 more brands here...
  ];

  const searchForm = document.getElementById("searchForm");
  const searchQuery = document.getElementById("searchQuery");
  const recommendationsContainer = document.getElementById("recommendations");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = searchQuery.value.toLowerCase();
    const filteredBrands = ecoFriendlyBrands.filter((brand) => 
      brand.category.includes(query) || brand.name.toLowerCase().includes(query)
    ).slice(0, 5); // Get top 5 matches

    if (filteredBrands.length > 0) {
      recommendationsContainer.innerHTML = filteredBrands.map((brand) => `
        <div class="recommendation-item">
          <h3>${brand.name}</h3>
          <p>${brand.description}</p>
        </div>
      `).join('');
    } else {
      recommendationsContainer.innerHTML = "<p>No recommendations found. Please try another search.</p>";
    }
  });
});

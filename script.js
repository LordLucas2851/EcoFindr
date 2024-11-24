// Updated list of product categories and their corresponding keywords
const productKeywords = {
  clothing: [
    "pants", "shoes", "shirts", "t-shirts", "sweaters", "dresses", "skirts", "jackets", "jeans", "shorts", "suits", 
    "blouses", "hoodies", "cardigans", "activewear", "sportswear", "leggings", "winter coats", "scarves", "socks", 
    "sweatshirts", "flannels", "tops", "button-up shirts", "tank tops", "bikinis", "swimsuits", "pajamas", "outerwear", 
    "raincoats", "overalls", "rompers", "jumpsuits", "belts", "hats", "eco-friendly clothing", "sustainable clothing", 
    "organic cotton clothes", "vegan leather clothing", "recycled fabrics clothing", "upcycled fashion", "fair trade clothing", 
    "slow fashion", "ethically made clothing", "custom shirts", "eco-friendly shoes", "sustainable activewear", "eco-friendly jeans"
  ],
  food: [
    "organic food", "vegan food", "vegetarian food", "gluten-free food", "non-GMO food", "local produce", "farm-to-table", 
    "sustainable food", "eco-friendly food", "natural food", "green groceries", "ethical food brands", "zero waste food", 
    "fair trade food", "eco-friendly packaging", "plastic-free food", "compostable packaging", "biodynamic food", "healthy snacks", 
    "clean food", "organic snacks", "eco-friendly restaurants", "organic beverages", "eco-friendly groceries", "organic fruits", 
    "sustainable seafood", "plant-based food", "organic vegetables", "sustainable meat", "food waste solutions", "eco-friendly cooking", 
    "earth-friendly food", "organic pantry staples", "low-impact food", "non-toxic food", "natural food", "eco-friendly food delivery", 
    "food cooperatives", "sustainable meal kits", "upcycled food", "sustainable farming"
  ],
  homeGoods: [
    "home goods", "eco-friendly home goods", "sustainable home decor", "upcycled furniture", "natural cleaning products", 
    "non-toxic cleaning supplies", "biodegradable products", "eco-friendly kitchenware", "organic cotton sheets", "bamboo furniture", 
    "sustainable furniture", "recycled home goods", "ethical home products", "energy-efficient appliances", "green home improvements", 
    "eco-friendly home goods", "reusable home products", "green home solutions", "plastic-free home goods", "sustainable home textiles", 
    "eco-friendly rugs", "organic bedding", "sustainable decor", "zero-waste home", "non-toxic furniture", "organic towels", 
    "sustainable lighting", "solar energy home", "fair trade furniture", "sustainable flooring", "eco-friendly paint", 
    "eco-friendly cleaning supplies", "environmentally conscious home", "upcycled home decor", "ethical home products", 
    "energy-saving light bulbs", "sustainable bed linen", "eco-friendly cookware", "green building materials", "eco-friendly textiles", 
    "earth-friendly home goods", "recycled materials home goods", "natural home accessories"
  ]
};

// Store eco-friendly website recommendations
const recommendations = {
  clothing: [
    { name: "Patagonia", link: "https://www.patagonia.com" },
    { name: "Everlane", link: "https://www.everlane.com" },
    { name: "Reformation", link: "https://www.thereformation.com" },
    { name: "Pact", link: "https://wearpact.com" },
    { name: "Allbirds", link: "https://www.allbirds.com" }
  ],
  food: [
    { name: "Thrive Market", link: "https://www.thrivemarket.com" },
    { name: "Imperfect Foods", link: "https://www.imperfectfoods.com" },
    { name: "Farm Fresh To You", link: "https://www.farmfreshtoyou.com" },
    { name: "Green Chef", link: "https://www.greenchef.com" },
    { name: "Sun Basket", link: "https://www.sunbasket.com" }
  ],
  homeGoods: [
    { name: "The Citizenry", link: "https://www.the-citizenry.com" },
    { name: "Avocado Green Mattress", link: "https://www.avocadogreenmattress.com" },
    { name: "Parachute", link: "https://www.parachutehome.com" },
    { name: "Brooklinen", link: "https://www.brooklinen.com" },
    { name: "Sustainable Furnishings Council", link: "https://www.sustainablefurnishings.org" }
  ]
};

// Function to search for products
function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  let categoryMatch = null;

  // Determine which category the search falls under
  for (const category in productKeywords) {
    const keywords = productKeywords[category];
    if (keywords.some(keyword => query.includes(keyword))) {
      categoryMatch = category;
      break;
    }
  }

  // Display recommendations based on category match
  const resultContainer = document.getElementById("recommendations").querySelector("ul");
  resultContainer.innerHTML = "";

  if (categoryMatch) {
    const categoryRecommendations = recommendations[categoryMatch];
    categoryRecommendations.slice(0, 3).forEach(rec => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="${rec.link}" target="_blank">${rec.name}</a>`;
      resultContainer.appendChild(listItem);
    });
  } else {
    resultContainer.innerHTML = "<p>No recommendations found for your search. Try searching for something else!</p>";
  }
}

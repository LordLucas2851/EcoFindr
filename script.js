// Updated list of product categories and their corresponding keywords
const productKeywords = {
  clothing: [
    // More specific clothing-related keywords
    "pants", "shoes", "shirts", "t-shirts", "sweaters", "dresses", "skirts", "jackets", "jeans", "shorts", "suits", 
    "blouses", "hoodies", "cardigans", "activewear", "sportswear", "leggings", "winter", "scarves", "socks", 
    "sweatshirts", "flannels", "tops", "button-up", "tank", "bikinis", "swimsuits", "pajamas", "outerwear", 
    "raincoats", "overalls", "rompers", "jumpsuits", "belts", "hats", "eco", "sustainable", "organic", "vegan", 
    "recycled", "upcycled", "fair-trade", "slow", "ethical", "custom", "fashion", "vegan-leather", "bamboo", 
    "natural-fiber", "minimalist", "conscious", "earth", "green", "environment", "handmade", "vintage", "comfortable",
    "eco-friendly", "sustainable-fashion", "zero-waste", "eco-conscious", "reusables", 

    // Generic keywords
    "clothing", "fashion", "garments", "apparel", "outfits", "wearables", "textiles", "wardrobe", "attire", 
    "streetwear", "footwear", "sportswear", "activewear", "outdoor", "luxury", "casual", "formal", "workwear", "seasonal", 
    "modern", "classic", "fashion-forward", "comfort", "athleisure", "stylish", "eco-conscious", "natural", "boho", "avant-garde", 
    "street-style", "minimalistic", "preppy", "hippie", "chic", "green", "sustainable-fashion", "recycled-fabrics", 
    "eco-friendly-clothing", "climate-positive", "earth-friendly-clothes", "reusable-clothing", "carbon-neutral", "upcycled-fashion", 
    "slow-fashion", "conscious-fashion"
  ],
  food: [
    // More specific food-related keywords
    "organic", "vegan", "vegetarian", "gluten-free", "local", "sustainable", "natural", "clean", "non-GMO", "fair-trade",
    "biodynamic", "healthy", "fresh", "non-toxic", "raw", "plant-based", "wholefoods", "pesticide-free", "unprocessed", 
    "artisan", "superfoods", "nut-free", "sugar-free", "dairy-free", "low-carb", "ethical", "free-range", "grass-fed",
    "hormone-free", "eco", "green", "cruelty-free", "zero-waste", "ethical-food", "plastic-free", "eco-packaging", 
    "compostable", "bottled", "canned", "gmo-free", "fair-trade", "bulk", "natural-sweeteners", "organic-veggies", 
    "clean-label", "raw-foods", "slow-food", "low-impact", "seasonal", "sustainable-farming", "food-waste", "plant-based",

    // Generic keywords
    "food", "snacks", "ingredients", "meals", "produce", "kitchen", "cooking", "grocery", "recipes", "beverages", 
    "healthy-eating", "superfoods", "fresh-foods", "plant-based-meals", "organic-food", "farm-to-table", "locally-sourced", 
    "ethically-sourced", "nutrient-rich", "wholesome", "real-food", "clean-eating", "sustainable-food", "eco-food", 
    "sustainable-eating", "natural-food", "fresh-produce", "ethically-grown", "fairtrade-food", "green-food", 
    "low-impact-food", "ethical-meals", "organic-snacks", "plastic-free-food", "conscious-eating", "low-carbon-food", 
    "sustainable-ingredients", "eco-friendly-food", "regenerative-agriculture", "biodynamic-food", "vegan-foods"
  ],
  homeGoods: [
    // More specific home-related keywords
    "home", "eco", "sustainable", "green", "organic", "upcycled", "recycled", "plastic-free", "non-toxic", "biodegradable", 
    "energy-efficient", "solar", "reusable", "natural", "bamboo", "wood", "ceramic", "stone", "eco-friendly", "minimalist", 
    "reclaimed", "fair-trade", "handmade", "organic-cotton", "sustainable-decor", "green-energy", "low-impact", "chemical-free", 
    "zero-waste", "eco-home", "renewable", "conservation", "reusable-bottles", "sustainable-furnishings", "green-cleaning", 
    "environmental", "upcycled-furniture", "eco-cooking", "earth-friendly", "smart-home", "natural-lights", "sustainable-wood", 
    "eco-friendly-furniture", "organic-textiles", "greener-living", "sustainable-kitchen", "non-toxic-cleaners", "bio-based", 
    "recycled-plastics", "natural-fabrics", "plant-based", "water-saving", "green-energy-home", "eco-conscious",

    // Generic keywords
    "homegoods", "houseware", "decor", "furniture", "kitchenware", "lighting", "appliances", "interior", "living", 
    "bedroom", "bathroom", "office", "living-room", "eco-home-furnishings", "handcrafted", "handmade-furniture", "organic-cotton", 
    "natural-wood", "eco-friendly-decor", "recycled-furniture", "furnishings", "cushions", "pillows", "bedding", 
    "home-decor", "sustainable-living", "climate-neutral", "eco-cleaning", "zero-waste-home", "non-toxic-home", "green-living", 
    "smart-home-devices", "natural-lighting", "green-appliances", "sustainable-home-products", "energy-efficient-home", 
    "conscious-living", "low-carbon-living", "minimalist-furnishings", "reclaimed-wood", "organic-home", "green-living-products"
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

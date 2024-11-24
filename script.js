// Store eco-friendly website recommendations with descriptions
const recommendations = {
  clothing: [
    { 
      name: "Patagonia", 
      link: "https://www.patagonia.com", 
      description: "Patagonia is committed to using sustainable materials and ethical manufacturing practices. They prioritize environmental responsibility and provide high-quality outdoor apparel." 
    },
    { 
      name: "Everlane", 
      link: "https://www.everlane.com", 
      description: "Everlane offers modern essentials and operates with full transparency, focusing on ethical sourcing, sustainable materials, and fair wages." 
    },
    { 
      name: "Reformation", 
      link: "https://www.thereformation.com", 
      description: "Reformation is a fashion brand that creates eco-friendly clothing using sustainable materials and practices. Their designs are stylish, yet environmentally conscious." 
    },
    { 
      name: "Pact", 
      link: "https://wearpact.com", 
      description: "Pact creates organic, Fair Trade certified clothing. Their collections include basics made from sustainable materials that are gentle on the planet." 
    },
    { 
      name: "Allbirds", 
      link: "https://www.allbirds.com", 
      description: "Allbirds makes shoes and apparel from natural materials like merino wool and eucalyptus tree fibers, aiming to create products with a minimal environmental footprint." 
    }
  ],
  food: [
    { 
      name: "Thrive Market", 
      link: "https://www.thrivemarket.com", 
      description: "Thrive Market is an online marketplace offering organic, non-GMO foods at affordable prices. They focus on sustainability and ethical sourcing." 
    },
    { 
      name: "Imperfect Foods", 
      link: "https://www.imperfectfoods.com", 
      description: "Imperfect Foods helps reduce food waste by delivering surplus groceries directly to consumers, offering organic and sustainably sourced options." 
    },
    { 
      name: "Farm Fresh To You", 
      link: "https://www.farmfreshtoyou.com", 
      description: "Farm Fresh To You delivers organic produce straight from family farms to your door, ensuring both freshness and sustainability." 
    },
    { 
      name: "Green Chef", 
      link: "https://www.greenchef.com", 
      description: "Green Chef offers organic meal kits with sustainable ingredients, providing health-conscious meals while supporting sustainable farming practices." 
    },
    { 
      name: "Sun Basket", 
      link: "https://www.sunbasket.com", 
      description: "Sun Basket provides organic and clean ingredients for meal kits, focusing on sustainable sourcing and offering a variety of dietary options." 
    }
  ],
  homeGoods: [
    { 
      name: "The Citizenry", 
      link: "https://www.the-citizenry.com", 
      description: "The Citizenry offers globally sourced, handmade home goods that are ethically produced, with a focus on craftsmanship and sustainability." 
    },
    { 
      name: "Avocado Green Mattress", 
      link: "https://www.avocadogreenmattress.com", 
      description: "Avocado Green Mattress creates eco-friendly mattresses using organic, non-toxic materials. They focus on sustainability and environmental impact." 
    },
    { 
      name: "Parachute", 
      link: "https://www.parachutehome.com", 
      description: "Parachute offers high-quality, ethically made bedding and home goods using natural materials, ensuring comfort and sustainability." 
    },
    { 
      name: "Brooklinen", 
      link: "https://www.brooklinen.com", 
      description: "Brooklinen offers luxury home essentials made from sustainable materials, focusing on comfort and ethical manufacturing practices." 
    },
    { 
      name: "Sustainable Furnishings Council", 
      link: "https://www.sustainablefurnishings.org", 
      description: "The Sustainable Furnishings Council advocates for eco-friendly home furnishings by promoting responsible sourcing and reducing environmental impacts." 
    }
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
      listItem.innerHTML = `<strong><a href="${rec.link}" target="_blank">${rec.name}</a></strong>: ${rec.description}`;
      resultContainer.appendChild(listItem);
    });
  } else {
    resultContainer.innerHTML = "<p>No recommendations found for your search. Try searching for something else!</p>";
  }
}

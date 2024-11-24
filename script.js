// List of eco-friendly websites with descriptions
const ecoFriendlyWebsites = [
  { name: 'Patagonia', url: 'https://www.patagonia.com', description: 'Patagonia offers eco-conscious outdoor clothing and gear with a focus on sustainability.' },
  { name: 'Etsy', url: 'https://www.etsy.com', description: 'A marketplace for handmade, vintage, and eco-friendly products from independent sellers.' },
  { name: 'Everlane', url: 'https://www.everlane.com', description: 'Everlane focuses on ethically made clothing and transparency in pricing and sourcing.' },
  { name: 'Reformation', url: 'https://www.thereformation.com', description: 'Reformation creates sustainable and stylish clothing with a focus on reducing waste.' },
  { name: 'Allbirds', url: 'https://www.allbirds.com', description: 'Allbirds offers eco-friendly shoes and apparel made from natural materials like merino wool and eucalyptus fiber.' },
  { name: 'Toms', url: 'https://www.toms.com', description: 'Toms is known for its shoes and accessories made with sustainable materials and its One for One giving program.' },
  { name: 'Pact', url: 'https://www.wearpact.com', description: 'Pact creates clothing made from organic cotton and focuses on fair trade and sustainability.' },
  { name: 'Tentree', url: 'https://www.tentree.com', description: 'Tentree plants ten trees for every product sold and uses sustainable fabrics like organic cotton and hemp.' },
  { name: 'ThredUp', url: 'https://www.thredup.com', description: 'ThredUp is an online consignment store for secondhand clothing, promoting sustainability through reuse.' },
  { name: 'Seventh Generation', url: 'https://www.seventhgeneration.com', description: 'Seventh Generation offers eco-friendly cleaning and household products made from renewable ingredients.' },
  { name: 'The Honest Company', url: 'https://www.honest.com', description: 'Honest Company focuses on natural, eco-friendly baby, personal care, and cleaning products.' },
  { name: 'Hydro Flask', url: 'https://www.hydroflask.com', description: 'Hydro Flask creates durable, reusable water bottles and drinkware to reduce single-use plastic.' },
  { name: 'Dr. Bronner’s', url: 'https://www.drbronner.com', description: 'Dr. Bronner’s offers organic soap products and focuses on fair trade and environmental sustainability.' },
  { name: 'Fairphone', url: 'https://www.fairphone.com', description: 'Fairphone produces ethical and sustainable smartphones with a focus on longevity and fair labor practices.' },
  { name: 'Bumblebee', url: 'https://www.bumblebee.com', description: 'Bumblebee offers sustainably sourced seafood with a focus on reducing ocean pollution.' },
  // Add more eco-friendly websites as needed...
];

// List of generic one-word keywords for product categories
const ecoKeywords = {
  clothing: [
    'shirts', 'pants', 't-shirts', 'sweaters', 'jeans', 'dresses', 'jackets', 'shorts', 'socks', 'outerwear', 'leggings',
    'blouses', 'skirts', 'hats', 'gloves', 'scarves', 'activewear', 'sweatshirts', 'hoodies', 'workwear', 'underwear', 
    'swimwear', 'pajamas', 'vests', 'shoes', 'boots', 'sandals', 'slippers', 'tote', 'belts', 'blazers', 'coats', 'garments', 
    'fabrics', 'jackets', 'clothing', 'fashion', 'green', 'eco', 'minimal', 'conscious', 'natural', 'organic', 'sustainable', 
    'handmade', 'recycled', 'durable', 'recyclable', 'biodegradable', 'ethical', 'fairtrade', 'non-toxic'
  ],
  food: [
    'organic', 'vegan', 'vegetables', 'fruits', 'snacks', 'grains', 'dairy-free', 'gluten-free', 'non-GMO', 'health', 
    'green', 'raw', 'whole', 'superfoods', 'meatless', 'fresh', 'local', 'natural', 'clean', 'sustainable', 
    'eco-friendly', 'earth-friendly', 'herbal', 'free-range', 'nutritious', 'gmo-free', 'bio', 'paleo', 'plant-based', 
    'holistic', 'freshly', 'fairtrade', 'ethically', 'balanced', 'nutrient', 'holistic', 'farm-fresh', 'seasonal', 
    'local', 'preservative-free', 'food', 'green', 'plant', 'herbal', 'non-toxic', 'wholesome', 'pure'
  ],
  accessories: [
    'bags', 'wallets', 'shoes', 'watches', 'jewelry', 'scarves', 'hats', 'belts', 'sunglasses', 'necklaces', 
    'bracelets', 'fanny', 'earrings', 'phone', 'cases', 'clutches', 'pins', 'tote', 'backpacks', 'purses', 
    'bags', 'earrings', 'accessories', 'reusable', 'fashion', 'eco', 'natural', 'bamboo', 'recycled', 'solar', 
    'biodegradable', 'minimalist', 'vintage', 'handmade', 'upcycled', 'wooden', 'sustainable', 'recyclable', 
    'plastic-free', 'non-toxic', 'green', 'ethical', 'conscious', 'stylish', 'trendy', 'durable', 'fairtrade'
  ]
};

// Function to get recommendations based on user input
function searchProducts() {
  const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
  const results = [];

  // Split the search query into individual words
  const queryWords = searchQuery.split(' ');

  // Check each category for relevant keywords
  for (const [category, keywords] of Object.entries(ecoKeywords)) {
    // For each keyword, check if any of the words in the search query match or partially match
    for (const keyword of keywords) {
      // Check if any of the query words match the keyword (partial match)
      if (queryWords.some(queryWord => queryWord.includes(keyword.toLowerCase()))) {
        results.push(...ecoFriendlyWebsites);
        break;  // Break if at least one keyword matches
      }
    }
  }

  // Display the results (up to 3 recommendations)
  const recList = document.getElementById('recList');
  recList.innerHTML = '';  // Clear previous recommendations

  if (results.length > 0) {
    for (let i = 0; i < Math.min(3, results.length); i++) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${results[i].url}" target="_blank">${results[i].name}</a> - ${results[i].description}`;
      recList.appendChild(li);
    }
  } else {
    recList.innerHTML = '<p>No recommendations found for this search. Try a different term.</p>';
  }
}

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

// List of keywords for product categories (including all your terms)
const ecoKeywords = {
  clothing: [
    'shirts', 'pants', 't-shirts', 'sweaters', 'jeans', 'dresses', 'jackets', 'shorts', 'socks', 'outerwear', 'suits', 'leggings',
    'blouses', 'skirts', 'hats', 'gloves', 'scarves', 'activewear', 'sweatshirts', 'hoodies', 'workwear', 'tote bags', 'belts', 'underwear',
    'swimwear', 'pajamas', 'vests', 'shoes', 'boots', 'sandals', 'slippers', 'clothing', 'fashion', 'eco-friendly clothing', 'sustainable fashion',
    'garments', 'jackets', 'coats', 'apparel', 'vests', 'blazers', 'suits', 'fabrics', 'outerwear', 'boots', 'footwear', 'fashionable', 'trendy', 'eco',
    'green', 'natural', 'organic', 'fairtrade', 'minimal', 'conscious', 'clothes', 'wearable', 'textiles', 'outerwear', 'eco-conscious', 'durable', 'recycled', 
    'fabrics', 'cotton', 'wool', 'linen', 'recycled fibers', 'sustainable materials', 'handmade', 'recyclable', 'biodegradable', 'ethical', 'fairtrade', 'green fashion', 'non-toxic', 'environmentally friendly', 'eco fabric', 'clothing brand'
  ],
  food: [
    'organic food', 'local food', 'vegan', 'plant-based', 'fair trade', 'gluten-free', 'vegetables', 'fruits', 'sustainable food', 'snacks',
    'grains', 'dairy-free', 'non-GMO', 'ethically sourced', 'eco-friendly food', 'zero waste food', 'health foods', 'green food', 'raw foods',
    'natural food', 'clean food', 'whole foods', 'organic snacks', 'sustainable eating', 'plant-based food', 'vegan snacks', 'superfoods', 'meatless',
    'veggie', 'wildcrafted', 'local', 'farm-fresh', 'natural', 'health-conscious', 'preservative-free', 'holistic', 'fresh', 'ethically grown',
    'green', 'nutritious', 'whole', 'plant', 'fairtrade', 'sustainably grown', 'organic', 'food waste', 'environmentally friendly', 'earth-friendly',
    'herbal', 'raw', 'free-range', 'eco-friendly', 'nutritious', 'freshly grown', 'gmo-free', 'meat', 'meat-free', 'sustainable meat', 'vegan food', 'plant-based protein', 'gluten-free food', 'bio', 'paleo'
  ],
  accessories: [
    'sustainable bags', 'eco-friendly wallets', 'recycled jewelry', 'vegan shoes', 'solar-powered gadgets', 'eco-friendly watches',
    'upcycled furniture', 'bamboo toothbrushes', 'biodegradable products', 'compostable bags', 'reusable straws', 'water bottles', 
    'reusable bags', 'wooden watches', 'eco bags', 'sustainable accessories', 'recyclable bags', 'earrings', 'bracelets', 'necklaces',
    'scarf', 'hats', 'belts', 'sunglasses', 'bags', 'backpacks', 'fanny packs', 'earrings', 'watches', 'fashion accessories', 'handmade jewelry',
    'eco fashion', 'natural materials', 'recycled material', 'sustainable jewelry', 'sustainable bags', 'recycled backpacks', 'bamboo products', 'zero waste', 
    'biodegradable', 'solar accessories', 'bamboo bags', 'recycled fashion', 'eco accessories', 'upcycled jewelry', 'reusable goods', 'eco-friendly phone cases',
    'vintage', 'non-toxic', 'handmade bags', 'eco wallets', 'minimalist accessories', 'fashionable', 'trendy', 'stylish', 'green accessories', 'fairtrade',
    'handmade', 'recycled', 'conscious', 'reclaimed', 'ethical', 'eco-conscious'
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
    // For each keyword, check if any of the words in the search query match exactly
    for (const keyword of keywords) {
      // Check for exact match
      if (queryWords.some(queryWord => queryWord === keyword.toLowerCase())) {
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

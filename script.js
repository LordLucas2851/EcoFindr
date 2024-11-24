// List of eco-friendly websites with descriptions
const ecoFriendlyWebsites = [
  { name: 'Patagonia', url: 'https://www.patagonia.com', description: 'Sustainable outdoor gear and apparel.' },
  { name: 'Etsy', url: 'https://www.etsy.com', description: 'Marketplace for handmade, vintage, and eco-friendly products.' },
  { name: 'Everlane', url: 'https://www.everlane.com', description: 'Transparent and sustainable clothing and accessories.' },
  { name: 'Reformation', url: 'https://www.thereformation.com', description: 'Eco-friendly fashion with a focus on sustainability.' },
  { name: 'Allbirds', url: 'https://www.allbirds.com', description: 'Footwear made from renewable materials like merino wool.' },
  { name: 'Toms', url: 'https://www.toms.com', description: 'Shoe company that gives back with every purchase.' },
  { name: 'Pact', url: 'https://www.wearpact.com', description: 'Organic cotton apparel with fair trade certification.' },
  { name: 'Tentree', url: 'https://www.tentree.com', description: 'Sustainable clothing with a focus on planting trees.' },
  { name: 'ThredUp', url: 'https://www.thredup.com', description: 'Secondhand clothing with a mission to reduce waste.' },
  { name: 'Seventh Generation', url: 'https://www.seventhgeneration.com', description: 'Eco-friendly household cleaning products.' },
  { name: 'The Honest Company', url: 'https://www.honest.com', description: 'Non-toxic household and personal care products.' },
  { name: 'Hydro Flask', url: 'https://www.hydroflask.com', description: 'Eco-friendly water bottles and accessories.' },
  { name: 'Dr. Bronner’s', url: 'https://www.drbronner.com', description: 'Certified organic and fair trade personal care products.' },
  { name: 'Fairphone', url: 'https://www.fairphone.com', description: 'Sustainable smartphones with ethically sourced materials.' },
  { name: 'Bumblebee', url: 'https://www.bumblebee.com', description: 'Sustainable seafood from a company committed to environmental responsibility.' },
  // Add more eco-friendly websites as needed
];

// List of keywords for product categories (including all your terms)
const ecoKeywords = {
  clothing: [
    'shirts', 'pants', 't-shirts', 'sweaters', 'jeans', 'dresses', 'jackets', 'shorts', 'socks', 'outerwear', 'suits', 'leggings',
    'blouses', 'skirts', 'hats', 'gloves', 'scarves', 'activewear', 'sweatshirts', 'hoodies', 'workwear', 'tote bags', 'belts', 'underwear',
    'swimwear', 'pajamas', 'vests', 'shoes', 'boots', 'sandals', 'slippers', 'clothing', 'fashion', 'eco-friendly clothing', 'sustainable fashion',
    'apparel', 'outerwear', 'footwear', 'activewear', 'organic', 'vintage', 'eco', 'ethical', 'fair trade', 'recycled'
  ],
  food: [
    'organic food', 'local food', 'vegan', 'plant-based', 'fair trade', 'gluten-free', 'vegetables', 'fruits', 'sustainable food', 'snacks',
    'grains', 'dairy-free', 'non-GMO', 'ethically sourced', 'eco-friendly food', 'zero waste food', 'health foods', 'green food', 'raw foods',
    'natural food', 'clean food', 'whole foods', 'organic snacks', 'sustainable eating', 'plant-based food', 'vegan snacks', 'superfoods',
    'herbs', 'tea', 'eco snacks', 'plant-based', 'organic produce', 'ethically sourced food', 'sustainable agriculture', 'clean eating'
  ],
  accessories: [
    'sustainable bags', 'eco-friendly wallets', 'recycled jewelry', 'vegan shoes', 'solar-powered gadgets', 'eco-friendly watches',
    'upcycled furniture', 'bamboo toothbrushes', 'biodegradable products', 'compostable bags', 'reusable straws', 'water bottles', 
    'reusable bags', 'wooden watches', 'eco bags', 'sustainable accessories', 'eco jewelry', 'green products', 'organic accessories', 
    'upcycled products', 'sustainable tech', 'recycled accessories', 'green gadgets', 'eco-conscious items', 'ethical tech', 'biodegradable'
  ]
};

// Function to perform the search
function searchProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const recList = document.getElementById('recList');
  recList.innerHTML = '';  // Clear previous recommendations

  // Check if input matches any category keywords
  let matchedKeywords = [];

  for (const category in ecoKeywords) {
    ecoKeywords[category].forEach(keyword => {
      if (searchInput.includes(keyword)) {
        matchedKeywords.push(category);
      }
    });
  }

  if (matchedKeywords.length > 0) {
    // Get 3 random eco-friendly websites
    const randomWebsites = getRandomWebsites(3);
    randomWebsites.forEach(website => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="${website.url}" target="_blank">${website.name}</a>
        <p class="description">${website.description}</p>
      `;
      recList.appendChild(listItem);
    });
  } else {
    // Show message if no match found
    const noMatchMessage = document.createElement('p');
    noMatchMessage.innerText = 'No recommendations found for your search.';
    recList.appendChild(noMatchMessage);
  }
}

// Function to get random websites
function getRandomWebsites(num) {
  const shuffled = ecoFriendlyWebsites.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

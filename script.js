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
  { name: 'Bumblebee', url: 'https://www.bumblebee.com', description: 'Bumblebee offers sustainably sourced seafood with a focus on reducing ocean pollution.' }
];

const ecoKeywords = {
  clothing: [
    'shirts', 'pants', 't-shirts', 'sweaters', 'jeans', 'dresses', 'jackets', 'shorts', 'socks', 'outerwear', 'suits', 'leggings',
    'blouses', 'skirts', 'hats', 'gloves', 'scarves', 'activewear', 'sweatshirts', 'hoodies', 'workwear', 'tote bags', 'belts', 'underwear',
    'swimwear', 'pajamas', 'vests', 'shoes', 'boots', 'sandals', 'slippers', 'clothing', 'fashion', 'eco-friendly clothing', 'sustainable fashion',
    'garments', 'jackets', 'coats', 'apparel', 'vests', 'blazers', 'suits', 'fabrics', 'outerwear', 'boots', 'footwear', 'fashionable', 'trendy', 'eco',
    'green', 'natural', 'organic', 'fairtrade', 'minimal', 'conscious', 'clothes', 'wearable', 'textiles', 'outerwear', 'eco-conscious', 'durable', 'recycled',
    'sustainability', 'vintage', 'ethical', 'upcycled', 'recycled fabrics', 'locally made', 'handmade', 'conservative', 'fair trade', 'zero waste', 'slow fashion',
    'responsible', 'modest', 'eco-friendly', 'biodegradable', 'transparency', 'innovative', 'long-lasting', 'natural fibers', 'no-waste', 'sustainable design',
    'renewable', 'green apparel', 'functional', 'reusable', 'circular', 'affordable', 'ethical production', 'small batch', 'socially responsible', 'local fabrics',
    'simple', 'casual', 'tailored', 'lightweight', 'eco-conscious', 'fashion-forward', 'minimalistic', 'chic', 'raw', 'refined'
  ],
  food: [
    'organic food', 'local food', 'vegan', 'plant-based', 'fair trade', 'gluten-free', 'vegetables', 'fruits', 'sustainable food', 'snacks',
    'grains', 'dairy-free', 'non-GMO', 'ethically sourced', 'eco-friendly food', 'zero waste food', 'health foods', 'green food', 'raw foods',
    'natural food', 'clean food', 'whole foods', 'organic snacks', 'sustainable eating', 'plant-based food', 'vegan snacks', 'superfoods', 'meatless',
    'veggie', 'wildcrafted', 'local', 'farm-fresh', 'natural', 'health-conscious', 'preservative-free', 'holistic', 'fresh', 'ethically grown',
    'green', 'nutritious', 'whole', 'plant', 'fairtrade', 'sustainably grown', 'organic', 'food waste', 'environmentally friendly', 'earth-friendly',
    'herbal', 'raw', 'free-range', 'eco-friendly', 'nutritious', 'freshly grown', 'gluten-free', 'sustainable farming', 'non-GMO', 'locally sourced',
    'gmo-free', 'low-carbon', 'holistic foods', 'food security', 'high-protein', 'whole grains', 'clean label', 'nutrient-dense', 'eco-conscious', 'ethical food',
    'farm-to-table', 'seasonal', 'regenerative', 'ethical sourcing', 'fair trade food', 'food sustainability', 'agroecology', 'sustainable nutrition',
    'wholesome', 'balanced', 'organic', 'homemade', 'simple', 'local produce', 'fresh-picked', 'energy-boosting', 'nutritious', 'all-natural'
  ],
  accessories: [
    'sustainable bags', 'eco-friendly wallets', 'recycled jewelry', 'vegan shoes', 'solar-powered gadgets', 'eco-friendly watches',
    'upcycled furniture', 'bamboo toothbrushes', 'biodegradable products', 'compostable bags', 'reusable straws', 'water bottles', 
    'reusable bags', 'wooden watches', 'eco bags', 'sustainable accessories', 'eco jewelry', 'green products', 'organic accessories', 
    'upcycled products', 'sustainable tech', 'recycled accessories', 'green gadgets', 'eco-conscious items', 'earth-friendly', 'natural',
    'biodegradable', 'eco-friendly gifts', 'handmade accessories', 'fairtrade bags', 'ethical jewelry', 'eco-friendly fashion', 'sustainable living',
    'upcycled', 'solar gadgets', 'recycled', 'sustainable', 'plastic-free', 'conscious products', 'fairtrade', 'reusable', 'eco tech', 'green fashion',
    'renewable', 'energy-efficient', 'upcycled fashion', 'cruelty-free', 'natural materials', 'biodegradable items', 'sustainable materials', 'minimalistic',
    'reclaimed', 'regenerative', 'green accessories', 'ethical sourcing', 'low-impact', 'lightweight', 'responsible production', 'ethically crafted', 'long-lasting',
    'innovative', 'durable', 'functional', 'multifunctional', 'handcrafted', 'fair-trade', 'luxury', 'modern', 'smart', 'classic'
  ]
};

function saveNewKeyword(newKeyword) {
  let savedKeywords = JSON.parse(localStorage.getItem('savedKeywords')) || {};
  const category = getCategoryForKeyword(newKeyword);
  
  if (category && !savedKeywords[category]) {
    savedKeywords[category] = [];
  }
  
  if (category && !savedKeywords[category].includes(newKeyword)) {
    savedKeywords[category].push(newKeyword);
    localStorage.setItem('savedKeywords', JSON.stringify(savedKeywords));
  }
}

function getCategoryForKeyword(keyword) {
  for (const category in ecoKeywords) {
    if (ecoKeywords[category].includes(keyword)) {
      return category;
    }
  }
  return null;
}

function searchProducts() {
  const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
  const results = [];
  let newKeywordAdded = false;
  
  for (const [category, keywords] of Object.entries(ecoKeywords)) {
    if (keywords.some(keyword => searchQuery.includes(keyword))) {
      results.push(...ecoFriendlyWebsites);
      break;
    }
  }

  if (!results.length) {
    const newKeywordCategory = getCategoryForKeyword(searchQuery);
    if (newKeywordCategory && !ecoKeywords[newKeywordCategory].includes(searchQuery)) {
      saveNewKeyword(searchQuery);
      newKeywordAdded = true;
    }
  }

  const recList = document.getElementById('recList');
  recList.innerHTML = '';

  if (results.length > 0) {
    for (let i = 0; i < Math.min(3, results.length); i++) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${results[i].url}" target="_blank">${results[i].name}</a> - ${results[i].description}`;
      recList.appendChild(li);
    }
  } else {
    recList.innerHTML = `<p>No recommendations found for this search. ${newKeywordAdded ? 'This keyword has been saved for future searches.' : 'Try a different term.'}</p>`;
  }
}

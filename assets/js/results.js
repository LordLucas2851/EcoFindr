document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsDiv = document.getElementById('results');

    searchQueryElement.textContent = query;

    // Define the keyword-to-category mapping and associated eco-friendly websites
    const ecoRecommendations = {
        food: [
            { name: 'Whole Foods Market', category: 'organic food', link: 'https://www.wholefoodsmarket.com' },
            { name: 'Thrive Market', category: 'organic food', link: 'https://www.thrivemarket.com' },
            { name: 'Farm Fresh to You', category: 'organic food delivery', link: 'https://www.farmfreshtoyou.com' }
        ],
        clothing: [
            { name: 'Allbirds', category: 'sustainable clothing', link: 'https://www.allbirds.com' },
            { name: 'Patagonia', category: 'outdoor clothing', link: 'https://www.patagonia.com' },
            { name: 'Reformation', category: 'eco-friendly fashion', link: 'https://www.thereformation.com' }
        ],
        home_appliances: [
            { name: 'Seventh Generation', category: 'eco-friendly cleaning products', link: 'https://www.seventhgeneration.com' },
            { name: 'Ecovacs', category: 'robot vacuums', link: 'https://www.ecovacs.com' },
            { name: 'Nespresso', category: 'coffee maker', link: 'https://www.nespresso.com' }
        ],
        electronics: [
            { name: 'Fairphone', category: 'sustainable electronics', link: 'https://www.fairphone.com' },
            { name: 'SolarCity', category: 'solar energy', link: 'https://www.solarcity.com' }
        ],
        personal_care: [
            { name: 'Ethique', category: 'personal care', link: 'https://www.ethique.com' },
            { name: 'Lush', category: 'bath and body', link: 'https://www.lush.com' }
        ],
        pets: [
            { name: 'The Honest Kitchen', category: 'eco-friendly pet food', link: 'https://www.thehonestkitchen.com' }
        ]
    };

    // Additional keywords and categories
    const keywordCategories = {
        pants: 'clothing',
        shirt: 'clothing',
        shoes: 'clothing',
        food: 'food',
        drink: 'food',
        clothing: 'clothing',
        clothes: 'clothing',
        t_shirt: 'clothing',
        socks: 'clothing',
        apple: 'food',
        meat: 'food',
        beef: 'food',
        chicken: 'food',
        pork: 'food',
        blender: 'home_appliances',
        microwave: 'home_appliances',
        stove: 'home_appliances',
        coffee_maker: 'home_appliances',
        eco_friendly: 'personal_care',
        sustainable: 'personal_care'
    };

    // Normalize the search query for better matching (lowercase)
    const queryLower = query.toLowerCase();
    let category = '';

    // Determine the category based on the keyword input
    Object.keys(keywordCategories).forEach(keyword => {
        if (queryLower.includes(keyword)) {
            category = keywordCategories[keyword];
        }
    });

    if (category && ecoRecommendations[category]) {
        const filteredResults = ecoRecommendations[category].slice(0, 5); // Show only the first 5 results
        filteredResults.forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.innerHTML = `
                <strong>${item.name}</strong> - ${item.category} 
                <a href="${item.link}" target="_blank">Visit</a>
            `;
            resultsDiv.appendChild(resultDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found. Try a different keyword.</p>';
    }
});

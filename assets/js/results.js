document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsDiv = document.getElementById('results');

    searchQueryElement.textContent = query;

    // Define the keyword-to-category mapping and associated eco-friendly websites
    const ecoRecommendations = {
        food: [
            { name: 'Whole Foods Market', link: 'https://www.wholefoodsmarket.com' },
            { name: 'Thrive Market', link: 'https://www.thrivemarket.com' },
            { name: 'Farm Fresh to You', link: 'https://www.farmfreshtoyou.com' }
        ],
        clothing: [
            { name: 'Allbirds', link: 'https://www.allbirds.com' },
            { name: 'Patagonia', link: 'https://www.patagonia.com' },
            { name: 'Reformation', link: 'https://www.thereformation.com' }
        ],
        home_appliances: [
            { name: 'Seventh Generation', link: 'https://www.seventhgeneration.com' },
            { name: 'Ecovacs', link: 'https://www.ecovacs.com' },
            { name: 'Nespresso', link: 'https://www.nespresso.com' }
        ],
        electronics: [
            { name: 'Fairphone', link: 'https://www.fairphone.com' },
            { name: 'SolarCity', link: 'https://www.solarcity.com' }
        ],
        personal_care: [
            { name: 'Ethique', link: 'https://www.ethique.com' },
            { name: 'Lush', link: 'https://www.lush.com' }
        ],
        pets: [
            { name: 'The Honest Kitchen', link: 'https://www.thehonestkitchen.com' }
        ]
    };

    // Keyword mapping to categories
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

    // Check if category matches and display results
    if (category && ecoRecommendations[category]) {
        const filteredResults = ecoRecommendations[category].slice(0, 5); // Show only the first 5 results
        filteredResults.forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.innerHTML = `
                <strong>${item.name}</strong>
                <a href="${item.link}" target="_blank">Visit</a>
            `;
            resultsDiv.appendChild(resultDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found. Try a different keyword.</p>';
    }
});

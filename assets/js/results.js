document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsDiv = document.getElementById('results');

    // If there's no query, don't display results.
    if (!query) {
        resultsDiv.innerHTML = '<p>No query found. Please try again.</p>';
        return;
    }

    searchQueryElement.textContent = query;

    // Define the keyword-to-category mapping and associated eco-friendly websites
    const ecoRecommendations = {
        food: [
            { 
                name: 'Whole Foods Market', 
                category: 'organic food', 
                link: 'https://www.wholefoodsmarket.com',
                description: 'Whole Foods Market offers a wide selection of organic, healthy foods, and eco-friendly products.'
            },
            { 
                name: 'Thrive Market', 
                category: 'organic food', 
                link: 'https://www.thrivemarket.com', 
                description: 'Thrive Market is an online marketplace offering organic, non-GMO, and sustainable food options at wholesale prices.'
            },
            { 
                name: 'Farm Fresh to You', 
                category: 'organic food delivery', 
                link: 'https://www.farmfreshtoyou.com', 
                description: 'Farm Fresh to You delivers fresh, organic produce directly to your door from local farms.'
            }
        ],
        clothing: [
            { 
                name: 'Allbirds', 
                category: 'sustainable clothing', 
                link: 'https://www.allbirds.com', 
                description: 'Allbirds creates comfortable, eco-friendly footwear and apparel made from renewable materials like merino wool and eucalyptus fiber.'
            },
            { 
                name: 'Patagonia', 
                category: 'outdoor clothing', 
                link: 'https://www.patagonia.com', 
                description: 'Patagonia is a leading brand for outdoor clothing made from recycled materials and committed to environmental activism.'
            },
            { 
                name: 'Reformation', 
                category: 'eco-friendly fashion', 
                link: 'https://www.thereformation.com', 
                description: 'Reformation creates sustainable fashion with a focus on minimizing waste and reducing environmental impact.'
            }
        ],
        home_appliances: [
            { 
                name: 'Seventh Generation', 
                category: 'eco-friendly cleaning products', 
                link: 'https://www.seventhgeneration.com', 
                description: 'Seventh Generation offers eco-friendly cleaning products made from plant-based ingredients, free from toxic chemicals.'
            },
            { 
                name: 'Ecovacs', 
                category: 'robot vacuums', 
                link: 'https://www.ecovacs.com', 
                description: 'Ecovacs provides energy-efficient robot vacuums designed to reduce household cleaning time and energy usage.'
            },
            { 
                name: 'Nespresso', 
                category: 'coffee maker', 
                link: 'https://www.nespresso.com', 
                description: 'Nespresso creates premium coffee makers and coffee pods that focus on sustainability and environmentally friendly practices.'
            }
        ]
    };

    // Additional keywords and categories
    const keywordCategories = {
        food: 'food',
        clothing: 'clothing',
        appliances: 'home_appliances'
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
                <strong>${item.name}</strong> 
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">Visit</a>
            `;
            resultsDiv.appendChild(resultDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found. Try a different keyword.</p>';
    }

    // "Start a New Search" button click event
    document.getElementById('new-search-button').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to home page for new search
    });
});

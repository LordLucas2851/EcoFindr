document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsDiv = document.getElementById('results');

    searchQueryElement.textContent = query;

    // Define the keyword-to-category mapping and associated eco-friendly websites
    const ecoRecommendations = {
        food: [
            { 
                name: 'Whole Foods Market', 
                link: 'https://www.wholefoodsmarket.com',
                description: 'Whole Foods Market offers a wide selection of organic, healthy foods, and eco-friendly products.'
            },
            { 
                name: 'Thrive Market', 
                link: 'https://www.thrivemarket.com', 
                description: 'Thrive Market is an online marketplace offering organic, non-GMO, and sustainable food options at wholesale prices.'
            },
            { 
                name: 'Farm Fresh to You', 
                link: 'https://www.farmfreshtoyou.com', 
                description: 'Farm Fresh to You delivers fresh, organic produce directly to your door from local farms.'
            }
        ],
        clothing: [
            { 
                name: 'Allbirds', 
                link: 'https://www.allbirds.com', 
                description: 'Allbirds creates comfortable, eco-friendly footwear and apparel made from renewable materials like merino wool and eucalyptus fiber.'
            },
            { 
                name: 'Patagonia', 
                link: 'https://www.patagonia.com', 
                description: 'Patagonia is a leading brand for outdoor clothing made from recycled materials and committed to environmental activism.'
            },
            { 
                name: 'Reformation', 
                link: 'https://www.thereformation.com', 
                description: 'Reformation creates sustainable fashion with a focus on minimizing waste and reducing environmental impact.'
            }
        ],
        home_appliances: [
            { 
                name: 'Seventh Generation', 
                link: 'https://www.seventhgeneration.com', 
                description: 'Seventh Generation offers eco-friendly cleaning products made from plant-based ingredients, free from toxic chemicals.'
            },
            { 
                name: 'Ecovacs', 
                link: 'https://www.ecovacs.com', 
                description: 'Ecovacs provides energy-efficient robot vacuums designed to reduce household cleaning time and energy usage.'
            },
            { 
                name: 'Nespresso', 
                link: 'https://www.nespresso.com', 
                description: 'Nespresso creates premium coffee makers and coffee pods that focus on sustainability and environmentally friendly practices.'
            }
        ],
        electronics: [
            { 
                name: 'Fairphone', 
                link: 'https://www.fairphone.com', 
                description: 'Fairphone manufactures smartphones designed with fair labor practices, recyclable materials, and a modular design for longevity.'
            },
            { 
                name: 'SolarCity', 
                link: 'https://www.solarcity.com', 
                description: 'SolarCity (now part of Tesla) offers solar energy solutions that help homeowners and businesses reduce their carbon footprint.'
            }
        ],
        personal_care: [
            { 
                name: 'Ethique', 
                link: 'https://www.ethique.com', 
                description: 'Ethique creates eco-friendly personal care products, including shampoo bars, body washes, and skincare items, all packaged without plastic.'
            },
            { 
                name: 'Lush', 
                link: 'https://www.lush.com', 
                description: 'Lush offers handmade bath and body products made from fresh, natural ingredients, focusing on ethical sourcing and sustainability.'
            }
        ],
        pets: [
            { 
                name: 'The Honest Kitchen', 
                link: 'https://www.thehonestkitchen.com', 
                description: 'The Honest Kitchen offers natural, organic pet food made from human-grade ingredients and sustainable practices.'
            }
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

    // Check if category matches and display results
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
});

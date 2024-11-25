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
        // More categories here...
    };

    // Additional keywords and categories
    const keywordCategories = {
        // Previous categories...
        
        // New simple and general eco-friendly keywords for kids
        planet: 'food',
        trees: 'food',
        clean: 'food',
        green: 'food',
        save: 'food',
        recycling: 'personal_care',
        nature: 'food',
        ocean: 'food',
        earth: 'food',
        flowers: 'food',
        animals: 'personal_care',
        water: 'personal_care',
        birds: 'food',
        bugs: 'food',
        forest: 'food',
        plants: 'food',
        grass: 'food',
        fruits: 'food',
        veggies: 'food',
        healthy: 'food',
        milk: 'food',
        juice: 'food',
        apples: 'food',
        bananas: 'food',
        oranges: 'food',
        berries: 'food',
        vegetables: 'food',
        carrots: 'food',
        corn: 'food',
        broccoli: 'food',
        spinach: 'food',
        potatoes: 'food',
        peas: 'food',
        grapes: 'food',
        watermelon: 'food',
        green_juice: 'food',
        compost: 'food',
        seeds: 'food',
        dirt: 'home_appliances',
        sunlight: 'food',
        clean_water: 'personal_care',
        clean_air: 'personal_care',
        clean_ocean: 'food',
        dirt_free: 'home_appliances',
        plastic_free: 'personal_care',
        reuse: 'personal_care',
        reduce: 'personal_care',
        earth_day: 'personal_care',
        green_energy: 'home_appliances',
        solar: 'home_appliances',
        wind: 'home_appliances',
        recycle_bins: 'home_appliances',
        organic_bags: 'clothing',
        reusable_straws: 'personal_care',
        reusable_bottles: 'personal_care',
        upcycle: 'clothing',
        eco_toys: 'personal_care',
        eco_friends: 'personal_care',
        healthy_snacks: 'food',
        composting: 'food',
        clean_up: 'food',
        eco_art: 'personal_care',
        solar_cars: 'electronics',
        nature_walks: 'personal_care',
        eco_play: 'personal_care',
        go_green: 'personal_care',
        green_living: 'personal_care',
        eco_house: 'home_appliances',
        rainwater: 'home_appliances',
        greenhouses: 'home_appliances',
        paper_bags: 'personal_care',
        windmills: 'home_appliances',
        save_trees: 'food',
        tree_planting: 'food',
        clean_earth: 'food',
        healthy_earth: 'food',
        clean_pond: 'food',
        organic_fruits: 'food',
        natural_water: 'food',
        eco_garden: 'food',
        grow_your_own: 'food',
        green_thumb: 'food',
        wildlife: 'food',
        natural_lights: 'home_appliances',
        healthy_footwear: 'clothing',
        green_clothing: 'clothing',
        eco_fashion: 'clothing',
        eco_gear: 'clothing',
        green_fabric: 'clothing',
        sustainable_socks: 'clothing',
        green_scents: 'personal_care',
        healthy_skin: 'personal_care',
        healthy_hair: 'personal_care',
        no_plastic: 'personal_care',
        eco_shaving: 'personal_care',
        green_bath: 'personal_care',
        eco_pencils: 'personal_care',
        green_erasers: 'personal_care',
        safe_batteries: 'electronics',
        organic_juice: 'food',
        healthy_meals: 'food',
        eco_diet: 'food',
        clean_snacks: 'food',
        eco_school: 'personal_care',
        eco_dream: 'personal_care',
        green_reusables: 'personal_care',
        green_movement: 'personal_care',
        future_friendly: 'personal_care',
        save_water: 'home_appliances',
        safe_cooking: 'home_appliances',
        green_lights: 'home_appliances',
        eco_paint: 'home_appliances',
        green_cleaning: 'home_appliances',
        tree_saving: 'food',
        healthy_earth: 'food',
        green_schools: 'personal_care',
        plastic_free_kids: 'personal_care',
        eco_friends: 'personal_care',
        save_earth: 'food',
        go_green_friends: 'personal_care',
        eco_living_tips: 'personal_care',
        earth_savings: 'personal_care',
        healthy_planet: 'food'
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

    // Add event listener for the "Go Back to Home" button
    const goBackButton = document.getElementById('go-back-button');
    goBackButton.addEventListener('click', () => {
        window.location.href = 'home.html';  // Adjust the URL if your homepage has a different file name
    });
});

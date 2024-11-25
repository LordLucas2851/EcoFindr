document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsDiv = document.getElementById('results');

    searchQueryElement.textContent = query;

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
    };

    const keywordCategories = {
        tshirts: 'clothing',
        pants: 'clothing',
        socks: 'clothing',
        shoes: 'clothing',
        hats: 'clothing',
        jackets: 'clothing',
        shorts: 'clothing',
        gloves: 'clothing',
        sweaters: 'clothing',
        scarves: 'clothing',
        boots: 'clothing',
        dresses: 'clothing',
        skirts: 'clothing',
        pajamas: 'clothing',
        mittens: 'clothing',
        boots: 'clothing',
        slippers: 'clothing',
        shirts: 'clothing',
        coats: 'clothing',
        leggings: 'clothing',
        jeans: 'clothing',
        overalls: 'clothing',
        robes: 'clothing',
        rompers: 'clothing',
        tights: 'clothing',
        vests: 'clothing',
        uniforms: 'clothing',
        hoodies: 'clothing',
        uniforms: 'clothing',
        sandals: 'clothing',
        slippers: 'clothing',
        sandals: 'clothing',
        dresses: 'clothing',
        shoes: 'clothing',
        sneakers: 'clothing',
        comfy: 'clothing',
        babyclothes: 'clothing',
        toddlerclothes: 'clothing',
        raincoats: 'clothing',
        sweatshirts: 'clothing',
        leggings: 'clothing',
        undershirts: 'clothing',
        sweatpants: 'clothing',
        warmers: 'clothing',
        onesies: 'clothing',
        outfits: 'clothing',
        sleepwear: 'clothing',
        jackets: 'clothing',
        cardigans: 'clothing',
        thermals: 'clothing',
        blouses: 'clothing',
        tunics: 'clothing',
        pullovers: 'clothing',
        socks: 'clothing',
        flipflops: 'clothing',
        tees: 'clothing',
        jumpsuits: 'clothing',
        belts: 'clothing',
        backpacks: 'clothing',
        earmuffs: 'clothing',
        slippers: 'clothing',
        handwarmers: 'clothing',
        ponchos: 'clothing',
        wraps: 'clothing',
        rainboots: 'clothing',
        beanies: 'clothing',
        slippers: 'clothing',
        sundresses: 'clothing',
        blouses: 'clothing',
        chinos: 'clothing',
        swimwear: 'clothing',
        visors: 'clothing',
        pajamas: 'clothing',
        coats: 'clothing',
        dresses: 'clothing',
        coveralls: 'clothing',
        tunics: 'clothing',
        tracksuits: 'clothing',
        bloomers: 'clothing',
        rompers: 'clothing',
        fridge: 'home_appliances',
        microwave: 'home_appliances',
        oven: 'home_appliances',
        blender: 'home_appliances',
        toaster: 'home_appliances',
        kettle: 'home_appliances',
        vacuum: 'home_appliances',
        fan: 'home_appliances',
        heater: 'home_appliances',
        cooler: 'home_appliances',
        light: 'home_appliances',
        lamp: 'home_appliances',
        fridge: 'home_appliances',
        washingmachine: 'home_appliances',
        dryer: 'home_appliances',
        dishwasher: 'home_appliances',
        coffee: 'home_appliances',
        grinder: 'home_appliances',
        juicer: 'home_appliances',
        steamers: 'home_appliances',
        iron: 'home_appliances',
        humidifier: 'home_appliances',
        dehumidifier: 'home_appliances',
        blender: 'home_appliances',
        mixer: 'home_appliances',
        electricfan: 'home_appliances',
        fridgefreezer: 'home_appliances',
        ovenstove: 'home_appliances',
        ricecooker: 'home_appliances',
        airconditioner: 'home_appliances',
        airpurifier: 'home_appliances',
        ricecooker: 'home_appliances',
        babybottlewarmer: 'home_appliances',
        dishwashingmachine: 'home_appliances',
        airdryer: 'home_appliances',
        heatpump: 'home_appliances',
        induction: 'home_appliances',
        toasteroven: 'home_appliances',
        pressurecooker: 'home_appliances',
        kettlewater: 'home_appliances',
        solarfan: 'home_appliances',
        electricgrill: 'home_appliances',
        coffeemaker: 'home_appliances',
        fridgelight: 'home_appliances',
        lights: 'home_appliances',
        lamps: 'home_appliances',
        ovenlight: 'home_appliances',
        blowdryer: 'home_appliances',
        airfryer: 'home_appliances',
        wok: 'home_appliances',
        freezer: 'home_appliances',
        minioven: 'home_appliances',
        portableheater: 'home_appliances',
        rechargeablebatteries: 'home_appliances',
        dryers: 'home_appliances',
        espresso: 'home_appliances',
        stovetop: 'home_appliances',
        warmers: 'home_appliances',
        microwaveoven: 'home_appliances',
        washingmachines: 'home_appliances',
        dishwashers: 'home_appliances',
        robotvacuum: 'home_appliances',
        coolerfans: 'home_appliances',
        toastergrill: 'home_appliances',
        juice: 'home_appliances',
        foodprocessor: 'home_appliances',
        electricshaver: 'home_appliances',
        handheldvacuum: 'home_appliances',
        freezerbox: 'home_appliances',
        warmer: 'home_appliances',
        ovenprotection: 'home_appliances',
        airfryer: 'home_appliances',
        fridgesmart: 'home_appliances',
        smallappliances: 'home_appliances',
        smartappliances: 'home_appliances',
        blendercup: 'home_appliances',
        coffeegrinder: 'home_appliances',
        heatersystem: 'home_appliances',
        electricblanket: 'home_appliances',
        kettlepot: 'home_appliances',
        slowcooker: 'home_appliances',
        sterilizer: 'home_appliances',
        ovenheat: 'home_appliances',
        dryersmart: 'home_appliances',
        electronicshaver: 'home_appliances',
    };

    const queryLower = query.toLowerCase();
    let category = '';

    Object.keys(keywordCategories).forEach(keyword => {
        if (queryLower.includes(keyword)) {
            category = keywordCategories[keyword];
        }
    });

    if (category && ecoRecommendations[category]) {
        const filteredResults = ecoRecommendations[category].slice(0, 5); 
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

    const goBackButton = document.getElementById('go-back-button');
    goBackButton.addEventListener('click', () => {
        window.location.href = 'home.html';  
    });
});

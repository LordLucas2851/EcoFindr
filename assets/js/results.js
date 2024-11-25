document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsDiv = document.getElementById('results');

    searchQueryElement.textContent = query;

    // Sample eco-friendly recommendations
    const ecoRecommendations = {
        food: [
            // Example food items
        ],
        clothing: [
            // Example clothing items
        ],
        home_appliances: [
            // Example home appliances items
        ]
    };

    // Keyword categories for matching
    const keywordCategories = {
        bacon: 'food',
        sausage: 'food',
        turkey: 'food',
        // Add other keywords
    };

    const queryLower = query.toLowerCase();
    let category = '';

    // Check if the query matches any of the existing keywords
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
        resultsDiv.innerHTML = '<p>No results found. Trying saving the keyword.</p>';
        
        // If the keyword is not found, save it to Firebase
        await saveKeywordToFirebase(query);
    }

    // Handle the "Go Back" button
    const goBackButton = document.getElementById('go-back-button');
    goBackButton.addEventListener('click', () => {
        window.location.href = 'home.html';  
    });
});

// Function to save the new keyword to Firebase
async function saveKeywordToFirebase(keyword) {
    const db = getFirestore();
    
    // Check if the keyword is already in the Firebase collection
    const keywordRef = collection(db, 'keywords');
    const q = query(keywordRef, where("keyword", "==", keyword));
    const querySnapshot = await getDocs(q);
    
    // If the keyword doesn't exist, add it
    if (querySnapshot.empty) {
        try {
            await addDoc(keywordRef, {
                keyword: keyword,
                createdAt: new Date()
            });
            console.log('Keyword saved to Firebase:', keyword);
        } catch (e) {
            console.error('Error saving keyword:', e);
        }
    } else {
        console.log('Keyword already exists in Firebase.');
    }
}

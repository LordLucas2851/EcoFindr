document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsDiv = document.getElementById('results');

    searchQueryElement.textContent = query;

    // Simulated eco-friendly websites (replace with actual data or API calls)
    const ecoItems = [
        { name: 'Whole Foods Market', category: 'organic food', link: 'https://www.wholefoodsmarket.com' },
        { name: 'Ecover', category: 'cleaning products', link: 'https://www.ecover.com' },
        { name: 'Allbirds', category: 'clothing', link: 'https://www.allbirds.com' },
        { name: 'If You Care', category: 'kitchen products', link: 'https://www.ifyoucare.com' },
        { name: 'Ethique', category: 'personal care', link: 'https://www.ethique.com' },
        { name: 'Greener Chef', category: 'kitchenware', link: 'https://www.greenerchef.com' },
        { name: 'Patagonia', category: 'outdoor clothing', link: 'https://www.patagonia.com' },
        { name: 'Lush', category: 'personal care', link: 'https://www.lush.com' },
        { name: 'The Honest Company', category: 'baby products', link: 'https://www.honest.com' },
        { name: 'Seventh Generation', category: 'cleaning products', link: 'https://www.seventhgeneration.com' },
        // Add more eco-friendly sites here...
    ];

    // Filter and display recommendations based on the search query
    const filteredResults = ecoItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Show only the first 5 recommendations

    if (filteredResults.length > 0) {
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

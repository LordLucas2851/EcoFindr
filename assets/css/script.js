document.addEventListener('DOMContentLoaded', () => {
    console.log('EcoFindr is ready to help you find sustainable choices.');

    // Sample database of eco-friendly brands/products
    const ecoItems = [
        { name: 'Whole Foods Market', category: 'organic food', link: 'https://www.wholefoodsmarket.com' },
        { name: 'Ecover', category: 'cleaning products', link: 'https://www.ecover.com' },
        { name: 'Allbirds', category: 'clothing', link: 'https://www.allbirds.com' },
        { name: 'If You Care', category: 'kitchen products', link: 'https://www.ifyoucare.com' },
        { name: 'Reusable Bag Co.', category: 'reusable bags', link: 'https://www.reusablebagco.com' },
        { name: 'Ethique', category: 'personal care', link: 'https://www.ethique.com' },
        { name: 'Greener Chef', category: 'kitchenware', link: 'https://www.greenerchef.com' },
    ];

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        resultsDiv.innerHTML = ''; // Clear previous results

        if (!query) {
            resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
            return;
        }

        const results = ecoItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found. Try a different keyword.</p>';
        } else {
            results.forEach(item => {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `
                    <strong>${item.name}</strong> - ${item.category} 
                    <a href="${item.link}" target="_blank">Visit</a>
                `;
                resultsDiv.appendChild(resultDiv);
            });
        }
    });
});

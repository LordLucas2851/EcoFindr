document.addEventListener('DOMContentLoaded', () => {
    console.log('EcoFindr is ready to help you find eco-friendly options.');

    // Sample data of eco-friendly brands
    const ecoBrands = [
        { name: 'Patagonia', category: 'clothing', link: 'https://www.patagonia.com' },
        { name: 'Allbirds', category: 'footwear', link: 'https://www.allbirds.com' },
        { name: 'Tesla', category: 'vehicles', link: 'https://www.tesla.com' },
        { name: 'SunPower', category: 'solar panels', link: 'https://www.sunpower.com' },
        { name: 'Ecosia', category: 'search engine', link: 'https://www.ecosia.org' },
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

        const results = ecoBrands.filter(brand =>
            brand.name.toLowerCase().includes(query) ||
            brand.category.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found. Try a different keyword.</p>';
        } else {
            results.forEach(brand => {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `
                    <strong>${brand.name}</strong> - ${brand.category} 
                    <a href="${brand.link}" target="_blank">Visit</a>
                `;
                resultsDiv.appendChild(resultDiv);
            });
        }
    });
});

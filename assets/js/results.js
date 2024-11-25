// Sample database of eco-friendly recommendations
const ecoDatabase = [
    { name: 'Whole Foods Market', category: 'organic food', link: 'https://www.wholefoodsmarket.com' },
    { name: 'Ecover', category: 'cleaning products', link: 'https://www.ecover.com' },
    { name: 'Allbirds', category: 'clothing', link: 'https://www.allbirds.com' },
    { name: 'If You Care', category: 'kitchen products', link: 'https://www.ifyoucare.com' },
    { name: 'Reusable Bag Co.', category: 'reusable bags', link: 'https://www.reusablebagco.com' },
    { name: 'Ethique', category: 'personal care', link: 'https://www.ethique.com' },
    { name: 'Greener Chef', category: 'kitchenware', link: 'https://www.greenerchef.com' },
    { name: 'Green Appliances', category: 'household appliances', link: 'https://www.greenappliances.com' },
];

// Function to get query parameter from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Display recommendations based on user query
document.addEventListener('DOMContentLoaded', () => {
    const userQuery = getQueryParam('query');
    const recommendationsDiv = document.getElementById('recommendations');
    const userQueryParagraph = document.getElementById('user-query');

    // Show the user's query
    userQueryParagraph.textContent = `You searched for: "${userQuery}"`;

    // Filter recommendations
    const filteredResults = ecoDatabase.filter(item =>
        item.category.toLowerCase().includes(userQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(userQuery.toLowerCase())
    );

    // Display up to 5 results
    if (filteredResults.length > 0) {
        filteredResults.slice(0, 5).forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result-item';
            resultDiv.innerHTML = `
                <strong>${item.name}</strong> - ${item.category} 
                <a href="${item.link}" target="_blank">Visit</a>
            `;
            recommendationsDiv.appendChild(resultDiv);
        });
    } else {
        recommendationsDiv.innerHTML = '<p>No results found. Try a different search.</p>';
    }
});

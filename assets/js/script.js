document.addEventListener('DOMContentLoaded', () => {
    console.log('EcoFindr is ready to help you find sustainable choices.');

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();

        if (query) {
            window.location.href = `results.html?query=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search term.');
        }
    });
});

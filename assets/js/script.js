const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `results.html?query=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search term.');
        }
    });
} else {
    console.error('Search button or input not found.');
}

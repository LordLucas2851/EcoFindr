document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to EcoShop!');

    // Dynamically add product cards
    const products = [
        { name: 'Reusable Water Bottle', price: '$20', image: 'assets/images/water-bottle.jpg' },
        { name: 'Eco-Friendly Tote Bag', price: '$15', image: 'assets/images/tote-bag.jpg' },
        { name: 'Biodegradable Cutlery Set', price: '$12', image: 'assets/images/cutlery.jpg' },
    ];

    const productContainer = document.querySelector('.product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
});

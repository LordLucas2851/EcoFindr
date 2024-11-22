// Forum functionality
document.querySelector('#forum-submit')?.addEventListener('click', () => {
    const input = document.querySelector('#forum-input').value.trim();
    if (input) {
        const post = document.createElement('p');
        post.textContent = input;
        document.querySelector('#forum-posts').appendChild(post);
        document.querySelector('#forum-input').value = '';
    }
});

// Recommendations functionality
document.querySelector('#recommendation-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const interest = document.querySelector('#interest').value.trim();
    const results = document.querySelector('#recommendation-results');
    if (interest) {
        results.innerHTML = `<p>Recommendations for <strong>${interest}</strong>:</p>
        <ul>
            <li><a href="https://www.ecosia.org" target="_blank">Ecosia</a></li>
            <li><a href="https://www.thredup.com" target="_blank">ThredUp</a></li>
            <li><a href="https://www.patagonia.com" target="_blank">Patagonia</a></li>
        </ul>`;
    }
});

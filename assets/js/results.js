<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoFindr - Search Results</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <header>
        <div class="logo">🌍 EcoFindr</div>
    </header>
    <main>
        <section id="home" class="hero">
            <img src="assets/images/Outlook-A logo of.jpg" alt="EcoFindr Logo" class="logo-image">
            <h1>Search Results</h1>
            <p>Here are 5 eco-friendly recommendations for your search.</p>
        </section>
        <section id="search" class="search">
            <h2>Results for: <span id="search-query"></span></h2>
            <div id="results" class="results"></div>
        </section>

        <!-- Button to go back to home page -->
        <section id="new-search">
            <button id="new-search-button">Start a New Search</button>
        </section>

        <section id="contact" class="contact">
            <h2>Contact Us</h2>
            <p>Email us at: support@ecofindr.com</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 EcoFindr. All rights reserved.</p>
    </footer>

    <script src="assets/js/results.js"></script>
</body>
</html>

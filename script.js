<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoFindr</title>
    <link rel="stylesheet" href="style.css">
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
        
        const firebaseConfig = {
            apiKey: "AIzaSyBq9shDTSKIE7lfO8ydnuThm_JxOHMBSfc",
            authDomain: "ecofindr-be091.firebaseapp.com",
            projectId: "ecofindr-be091",
            storageBucket: "ecofindr-be091.firebasestorage.app",
            messagingSenderId: "960864865608",
            appId: "1:960864865608:web:b3361aa4b716a2ea2b777d",
            measurementId: "G-9GJ67QYMFN"
        };
        
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    </script>
</head>
<body>
    <header>
        <h1>EcoFindr</h1>
        <p>Your go-to platform for sustainable and eco-friendly products.</p>
    </header>

    <main>
        <section class="search-section">
            <h2>Looking for Eco-Friendly Products?</h2>
            <input type="text" id="search-bar" placeholder="Search for eco-friendly products or brands...">
            <button onclick="showRecommendations()">Search</button>
            <div id="recommendations"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 EcoFindr - All Rights Reserved</p>
    </footer>

    <script>
        const ecoFriendlyBrands = [
            "Patagonia: https://www.patagonia.com",
            "Everlane: https://www.everlane.com",
            "Allbirds: https://www.allbirds.com",
            "Reformation: https://www.thereformation.com",
            "Toms: https://www.toms.com",
            "PACT: https://www.wearpact.com",
            "Eileen Fisher: https://www.eileenfisher.com",
            "Tentree: https://www.tentree.com",
            "Girlfriend Collective: https://www.girlfriend.com",
            "Outerknown: https://www.outerknown.com",
            "Lush: https://www.lushusa.com",
            "Dr. Bronner’s: https://www.drbronner.com",
            "The Honest Company: https://www.honest.com",
            "Seventh Generation: https://www.seventhgeneration.com",
            "Thrive Market: https://www.thrivemarket.com",
            "EarthHero: https://www.earthhero.com",
            "B Corp: https://bcorporation.net",
            "Hydroflask: https://www.hydroflask.com",
            "Tetra Pak: https://www.tetrapak.com",
            "Pela Case: https://www.pelacase.com",
            "EcoBags: https://www.ecobags.com",
            "Who Gives A Crap: https://www.whogivesacrap.org",
            "Grove Collaborative: https://www.grove.co",
            "Cotopaxi: https://www.cotopaxi.com",
            "BioLite: https://www.bioliteenergy.com",
            "S'well: https://www.swell.com",
            "Green Toys: https://www.greentoys.com",
            "Organic Basics: https://www.organicbasics.com",
            "Bureo: https://www.bureo.co",
            "Bombas: https://www.bombas.com",
            "Caraway: https://www.carawayhome.com",
            "The Body Shop: https://www.thebodyshop.com",
            "Chobani: https://www.chobani.com",
            "Rothy’s: https://www.rothys.com",
            "Pela: https://www.pelacase.com",
            "Adidas (Parley Collection): https://www.adidas.com",
            "Simple Switch: https://www.simpleswitch.org",
            "Solgaard: https://www.solgaard.co",
            "Rezycle: https://www.rezycle.com",
            "Soapwalla: https://www.soapwalla.com",
            "Patagonia Provisions: https://www.patagoniaprovisions.com",
            "Simple Skincare: https://www.simpleskincare.com",
            "Blue Apron: https://www.blueapron.com",
            "Burt’s Bees: https://www.burtsbees.com",
            "Solyph: https://www.solyph.com",
            "To-go Ware: https://www.togoware.com",
            "Eco-Products: https://www.ecoproducts.com",
            "La Fresh: https://www.lafreshgroup.com",
            "H&M Conscious: https://www.hm.com",
            "Avocado Green Mattress: https://www.avocadogreenmattress.com",
            "Rejuva Minerals: https://www.rejuvaminerals.com",
            "TreeTrunk Organics: https://www.treetrunkorganics.com",
            "Sun Basket: https://www.sunbasket.com",
            "Stasher: https://www.stasherbag.com",
            "The Refill Shoppe: https://www.therefillshoppe.com",
            "Nesting Green: https://www.nestinggreen.com",
            "Snuggy Baby: https://www.snuggybaby.com",
            "LilyBee Wraps: https://www.lilybeewraps.com",
            "Green Circle Salons: https://www.greencirclesalons.com",
            "Green Sprouts: https://www.greensprouts.com",
            "Everlane: https://www.everlane.com",
            "Biodegradable Products: https://www.biodegradableproducts.com",
            "Tru Earth: https://www.truearth.com",
            "Soko: https://www.shopsoko.com",
            "Naturepedic: https://www.naturepedic.com",
            "Chilly’s Bottles: https://www.chillysbottles.com",
            "Mangrove: https://www.mangrove.com",
            "Tru Lemon: https://www.trulemon.com",
            "Craftivity: https://www.craftivity.co",
            "Koia: https://www.koia.com",
            "Green Chef: https://www.greenchef.com",
            "The Greenhouse: https://www.thegreenhouse.com",
            "Green People: https://www.greenpeople.co.uk",
            "Freeset Global: https://www.freesetglobal.com",
            "Oeko-Tex: https://www.oeko-tex.com",
            "Alima Pure: https://www.alimapure.com",
            "The Green Kiss: https://www.thegreenkiss.com",
            "Blueland: https://www.blueland.com",
            "Natura: https://www.natura.com",
            "EarthBound Trading Co: https://www.earthboundtrading.com",
            "Earthlove: https://www.earthlove.co",
            "Give Back Box: https://www.givebackbox.com",
            "Plastic-Free July: https://www.plasticfreejuly.org",
            "Ethical Superstore: https://www.ethicalsuperstore.com",
            "Klean Kanteen: https://www.kleankanteen.com",
            "The Green Lab: https://www.thegreenlab.com",
            "The Eco Collective: https://www.theecocollective.com",
            "The Clean Collective: https://www.thecleancollective.com",
            "The Hodgepodge Shop: https://www.hodgepodgeshop.com",
            "Simply Eco: https://www.simplyeco.com",
            "Bamboozle: https://www.bamboozlehome.com",
            "Beyond the Box: https://www.beyondthebox.com",
            "Planet Bee Foundation: https://www.planetbee.org",
            "Eco Imprints: https://www.ecoimprints.com",
            "The Green Mint: https://www.thegreenmint.com",
            "Tegu: https://www.tegu.com",
            "Dream Greens: https://www.dreamgreens.com",
            "Greenlife Organics: https://www.greenlifeorganics.com",
            "Green Wraps: https://www.greenwraps.com"
        ];

        function showRecommendations() {
            const input = document.getElementById("search-bar").value.toLowerCase();
            const recommendations = document.getElementById("recommendations");
            recommendations.innerHTML = "";

            if (input) {
                const filteredBrands = ecoFriendlyBrands.filter(brand => brand.toLowerCase().includes(input));
                const results = filteredBrands.slice(0, 3).map(brand => {
                    return `<p><a href="${brand.split(": ")[1]}" target="_blank">${brand}</a></p>`;
                }).join("");

                recommendations.innerHTML = results || "<p>No recommendations found.</p>";
            } else {
                recommendations.innerHTML = "<p>Please enter a search term.</p>";
            }
        }
    </script>
</body>
</html>

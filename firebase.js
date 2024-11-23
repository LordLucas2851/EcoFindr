import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBq9shDTSKIE7lfO8ydnuThm_JxOHMBSfc",
    authDomain: "ecofindr-be091.firebaseapp.com",
    projectId: "ecofindr-be091",
    storageBucket: "ecofindr-be091.appspot.com",
    messagingSenderId: "960864865608",
    appId: "1:960864865608:web:4994220d1cdf9c6d2b777d",
    measurementId: "G-577X5TWXTT"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

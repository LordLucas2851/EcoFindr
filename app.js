import { auth } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Navigation handling
document.getElementById("login-link").addEventListener("click", showLoginForm);
document.getElementById("signup-link").addEventListener("click", showSignupForm);

function showLoginForm() {
  document.getElementById("app").innerHTML = `
    <h2>Login</h2>
    <form id="login-form">
      <label>Email:</label>
      <input type="email" id="login-email" required>
      <label>Password:</label>
      <input type="password" id="login-password" required>
      <button type="submit">Login</button>
    </form>
  `;

  document.getElementById("login-form").addEventListener("submit", loginUser);
}

function showSignupForm() {
  document.getElementById("app").innerHTML = `
    <h2>Signup</h2>
    <form id="signup-form">
      <label>Email:</label>
      <input type="email" id="signup-email" required>
      <label>Password:</label>
      <input type="password" id="signup-password" required>
      <button type="submit">Signup</button>
    </form>
  `;

  document.getElementById("signup-form").addEventListener("submit", signupUser);
}

async function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showRecommendationsPage();
  } catch (error) {
    alert("Error logging in: " + error.message);
  }
}

async function signupUser(e) {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    showRecommendationsPage();
  } catch (error) {
    alert("Error signing up: " + error.message);
  }
}

function showRecommendationsPage() {
  document.getElementById("app").innerHTML = `
    <h2>Eco-Friendly Recommendations</h2>
    <form id="recommend-form">
      <label>Input (clothing/food):</label>
      <input type="text" id="recommend-input" required>
      <button type="submit">Get Recommendations</button>
    </form>
    <div id="recommend-results"></div>
  `;

  document.getElementById("recommend-form").addEventListener("submit", recommendSites);
}

function recommendSites(e) {
  e.preventDefault();
  const input = document.getElementById("recommend-input").value.toLowerCase();
  const sites = {
    clothing: ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"],
    food: ["Farm A", "Farm B", "Market C", "Market D", "Market E"],
  };
  const results = sites[input] || ["No recommendations available"];
  document.getElementById("recommend-results").innerHTML = `<ul>${results.map(site => `<li>${site}</li>`).join("")}</ul>`;
}

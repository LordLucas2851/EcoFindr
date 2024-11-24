document.querySelector(".post-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const question = document.getElementById("question").value.trim();

    if (username && question) {
        alert(`Posted by ${username}: ${question}`);
        document.getElementById("username").value = "";
        document.getElementById("question").value = "";
    } else {
        alert("Please fill out all fields.");
    }
});

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username && password) {
        alert("You have successfully logged in.");
        window.location.href = "/resident-links";
    } else {
        alert("Incorrect password!")
    }
})
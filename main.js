const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Oops! Please check your email");
    } else {
        email.setCustomValidity("");
    }
});
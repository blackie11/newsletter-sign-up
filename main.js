function onSubmitForm(e) {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    if (!isValidEmail(emailValue)) {
        const input = document.querySelector("#email");
        const label = document.querySelector(".email-address");
        const error = document.createElement("span");

        error.innerText = `Valid email required`;
        error.classList.add("error");
        label.appendChild(error);
        input.style.backgroundColor = " #ff634732";
        input.style.border = "1px solid #ff6347";
        e.preventDefault(); // Prevent form submission
    } else {
        document.querySelector(".container").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
        e.preventDefault();
    }
}
// function to dismiss success message from the DOM
function onClick() {
    document.querySelector(".container").style.display = "flex";
    document.getElementById("successMessage").style.display = "none";
    return;
}

// function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// event handling for submission of form for validating
document
    .getElementById("subscriptionForm")
    .addEventListener("submit", onSubmitForm);

// event handling for success message
document.querySelector(".clearBtn").addEventListener("click", onClick);

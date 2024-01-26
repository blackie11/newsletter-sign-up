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
        window.location.href = "success-page.html"; // Replace with your desired page URL
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document
    .getElementById("subscriptionForm")
    .addEventListener("submit", onSubmitForm);

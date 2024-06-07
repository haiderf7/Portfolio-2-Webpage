const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#NameError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector("#successMessage");

function validateForm(event) {
    event.preventDefault();

    let isFormValid = true;

    if (checkLength(name.value, 5)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(message.value, 20)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        isFormValid = false;
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        isFormValid = false;
    }

    if (isFormValid) {
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }

    console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    return value.trim().length > len;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

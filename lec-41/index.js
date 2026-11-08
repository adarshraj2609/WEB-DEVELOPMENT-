const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const username = document.querySelector("#username");
const bio = document.querySelector("#bio");
const charcount = document.querySelector("#charcount");
const checkbox = document.querySelector("#checkbox");
const passhint = document.querySelector("#passhint");
const password = document.querySelector("#pass");
const errormssg = document.querySelector("#errormssg");

const LIMIT = 150;


// Character counter
charcount.textContent = `${LIMIT} characters remaining`;


// Username validation
function isvalidate(username) {
    if (username.value.trim().length === 0) {
        return false;
    }

    return true;
}


// Form submit
form.addEventListener("submit", (e) => {

    e.preventDefault();

    // Validate username
    if (!isvalidate(username)) {

        console.log("Enter your name");

        errormssg.textContent = "Please enter your name";

        return;
    }

    // Clear error message
    errormssg.textContent = "";

    const name = username.value.trim();
    const email = document.querySelector("#email").value;
    const passwordValue = password.value;

    console.log({
        name,
        email,
        password: passwordValue
    });
});


// Bio character counter
bio.addEventListener("input", () => {

    const remaining = LIMIT - bio.value.length;

    charcount.textContent =
        `${remaining} characters remaining`;
});


// Username input event
username.addEventListener("input", () => {

    console.log("input event", username.value);

});


// Username change event
username.addEventListener("change", () => {

    console.log("change event", username.value);

});


// Username focus event
username.addEventListener("focus", () => {

    console.log("Focus", username.value);

});


// Username blur event
username.addEventListener("blur", () => {

    console.log("Blur", username.value);

});


// Checkbox input event
checkbox.addEventListener("input", () => {

    console.log("input event", checkbox.checked);

});


// Checkbox change event
checkbox.addEventListener("change", () => {

    console.log("change event", checkbox.checked);

});


// Password focus
password.addEventListener("focus", () => {

    passhint.classList.remove("hidden");

});


// Password blur
password.addEventListener("blur", () => {

    passhint.classList.add("hidden");

});


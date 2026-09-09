console.log("day 20");
/*
const basicForm = document.querySelector("#basicForm");

basicForm.addEventListener("submit", (event) => {
	 event.preventDefault();

    console.log("Form submission handled by JavaScript");
    console.log("Form submitted");
});
*/
/*
const form = document.querySelector("#studentForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(ageInput.value);
});

*/

const form = document.querySelector("#studentForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");

const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = Number(ageInput.value);

    if (name === "") {
        message.innerText = "Name is required";
        return;
    }

    if (email === "") {
        message.innerText = "Email is required";
        return;
    }

    if (age < 18) {
        message.innerText = "Age must be 18 or above";
        return;
    }

    message.innerText = "Registration successful!";
});


/*
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    nameInput.classList.remove("error");
    nameInput.classList.remove("success");

    if (name === "") {
        nameInput.classList.add("error");
        message.innerText = "Please enter your name";
        return;
    }

    nameInput.classList.add("success");

    message.innerText = "Name is valid";
});*/
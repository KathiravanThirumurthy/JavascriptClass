const form = document.querySelector("#studentForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const courseInput = document.querySelector("#course");

const message = document.querySelector("#message");
const studentResult = document.querySelector("#studentResult");


form.addEventListener("submit", (event) => {

    // Stop page from refreshing
    event.preventDefault();


    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = Number(ageInput.value);
    const course = courseInput.value.trim();


    // Remove old validation styles
    nameInput.classList.remove("valid", "invalid");
    emailInput.classList.remove("valid", "invalid");
    ageInput.classList.remove("valid", "invalid");
    courseInput.classList.remove("valid", "invalid");


    // -------------------------
    // NAME VALIDATION
    // -------------------------

    if (name === "") {

        nameInput.classList.add("invalid");

        message.innerText = "Name is required";
        message.className = "error";

        return;
    }

    nameInput.classList.add("valid");


    // -------------------------
    // EMAIL VALIDATION
    // -------------------------

    if (email === "") {

        emailInput.classList.add("invalid");

        message.innerText = "Email is required";
        message.className = "error";

        return;
    }

    emailInput.classList.add("valid");


    // -------------------------
    // AGE VALIDATION
    // -------------------------

    if (age < 18) {

        ageInput.classList.add("invalid");

        message.innerText = "Age must be 18 or above";
        message.className = "error";

        return;
    }

    ageInput.classList.add("valid");


    // -------------------------
    // COURSE VALIDATION
    // -------------------------

    if (course === "") {

        courseInput.classList.add("invalid");

        message.innerText = "Course is required";
        message.className = "error";

        return;
    }

    courseInput.classList.add("valid");


    // -------------------------
    // SUCCESS
    // -------------------------

    message.innerText = "Registration successful!";
    message.className = "success";


    // Display student details

    studentResult.innerHTML = `
        <h2>${name}</h2>

        <p>Email: ${email}</p>

        <p>Age: ${age}</p>

        <p>Course: ${course}</p>
    `;

});
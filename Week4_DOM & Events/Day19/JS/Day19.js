console.log("Day 19");
const title = document.querySelector("#title");
const changeBtn = document.querySelector("#changeBtn");
console.log(changeBtn);

changeBtn.addEventListener("click", () => {
    title.innerText = "Welcome to JavaScript!";
});


const count = document.querySelector("#count");
const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
let value = 0;

increaseBtn.addEventListener("click", () => {
    value++;
    count.innerText = value;
});

decreaseBtn.addEventListener("click", () => {
    value--;
    count.innerText = value;
});


const box = document.querySelector("#box");

box.addEventListener("mouseenter", () => {

    box.innerText = "Mouse Entered!";
     box.classList.add("active");
});



box.addEventListener("mouseleave", () => {
    box.innerText = "Mouse Left!";
    box.classList.remove("active");
});


document.addEventListener("keydown", () => {
    console.log("Key pressed");
});

document.addEventListener("keyup", () => {
    console.log("Key released");
});

// Detect which key was pressed

document.addEventListener("keydown", (event) => {
    console.log(event.key);
});

const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.target.innerText);
});

//Keyboard Example — Character Counter
const message = document.querySelector("#message");

const textcount = document.querySelector("#textcount");

message.addEventListener("input", () => {
	console.log("Input event");
    textcount.innerText = message.value.length;
});

//Keyboard Example — Enter Key
const input = document.querySelector("#message");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Enter Key pressed");
    }
});
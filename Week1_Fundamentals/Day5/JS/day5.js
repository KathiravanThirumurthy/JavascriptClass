let a = 10;
let b = 20;

console.log(a + b);

let x = 50;
let y = 60;

console.log(x + y);

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add(50, 60));

greet("Arun");
greet("Priya");
function greet(name) {
    console.log("Hello " + name);
}

// return the value

function multiplier(a, b) {
    return a * b;
}

let result = multiplier(5, 4);

console.log(result);

// calculator in function
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

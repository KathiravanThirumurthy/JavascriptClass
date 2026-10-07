let a = 10;
let b = 20;

console.log(a + b);

let x = 50;
let y = 60;

console.log(x + y);


function adding()
{
    let a=10;
    let b=20;
    let c=a+b;
    console.log(`Addtion is: ${c}`);
}

adding();

adding1(a,b);
adding1(x,y);
adding1(150,150);
function adding1(x,y)
{
    let c=x+y;
    console.log(`Addtion is: ${c}`);
}


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

/*

types of function 

function with or without parameter no return value
function with or without parameters and return value

*/


let price=100;
let quantity=3;
let discount=0.1;
finalPrice(price,quantity,discount);
finalPrice(500,2,0.1);
function finalPrice(x,y,z)
{
    let price=x*y;
    let discount=price * z;
    console.log(price);
    console.log(discount);
    let finalPrice=price-discount;
    //console.log(finalPrice);
    return finalPrice;
}

let balance=1000;

balance=deposit(500)
console.log(`Balance : ${balance}`)
function deposit(money)
{
    balance=balance+money;
    return balance;
}
balance=deposit(1500);
console.log(`Balance : ${balance}`)
// Calculate Total Price
price = 500
quantity = 3

// Output: 1500
// Function Expression
const calculateTotal = function(price, quantity) {
     return price+quantity;
};

// Arrow Function
const calculateTotalArrow = (price, quantity) => {
    return price+quantity;
};

console.log(calculateTotal(price,quantity)); 
console.log(calculateTotalArrow(price,quantity));
//Check Even or Odd
number = 12

// Output: Even
// Function Expression
const checkEvenOdd = function(number) {
   if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

};

// Arrow Function
const checkEvenOddArrow = (number) => {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

};

console.log(checkEvenOdd(number)); 
console.log(checkEvenOddArrow(number));

//Calculate Student Grade
// Function Expression

const calculateGrade = function(marks) {

    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }

};

console.log(calculateGrade(95));
console.log(calculateGrade(75));


// Arrow Function

const calculateGradeArrow = (marks) => {

    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }

};

console.log(calculateGradeArrow(85));
console.log(calculateGradeArrow(55));

//Find the Larger Number
// Function Expression

const findLarger = function(a, b) {

    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Both numbers are equal";
    }

};

console.log(findLarger(50, 30));
console.log(findLarger(20, 20));


// Arrow Function

const findLargerArrow = (a, b) => {

    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Both numbers are equal";
    }

};

console.log(findLargerArrow(15, 40));
console.log(findLargerArrow(25, 25));

// Calculate Discount

// Function Expression

const calculateDiscount = function(price) {

    if (price >= 5000) {

        return price - (price * 20 / 100);

    } else if (price >= 2000) {

        return price - (price * 10 / 100);

    } else {

        return price;

    }

};

console.log(calculateDiscount(6000));
console.log(calculateDiscount(3000));
console.log(calculateDiscount(1500));


// Arrow Function

const calculateDiscountArrow = (price) => {

    if (price >= 5000) {

        return price - (price * 20 / 100);

    } else if (price >= 2000) {

        return price - (price * 10 / 100);

    } else {

        return price;

    }

};

console.log(calculateDiscountArrow(6000));
console.log(calculateDiscountArrow(3000));
console.log(calculateDiscountArrow(1500));


/*
function :
its a piece of reusable code

syntax:

function declaration :

function fnName()
{
    console.log("Function");
}

// calling or invoking function
fnName();

function with no parameters and  no return value
function with parameters and with no return value
function with parameters and with return value

*/
let a=30;
let b=20;
// calling or invoking function
fnName(a,b);
fnName(50,60);
function fnName(x,y)
{
    let c=x+y;
    console.log("The Sum :" +c);
}



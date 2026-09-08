###
1. Function Declaration

This is the traditional way.
function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(10, 5));

function add(a, b) {
    return a + b;
}
let result = add(10, 20);

console.log(result);

###
2. Function Expression

A function can also be stored inside a variable.

const add = function(a, b) {
    return a + b;
};

Then:

console.log(add(10, 20));

The important idea:

Function
   ↓
stored inside
   ↓
variable

This becomes important later because functions can be treated as values.

###
3. Arrow Function

Modern JavaScript provides a shorter syntax.

Normal:

const add = function(a, b) {
    return a + b;
};

Arrow:

const add = (a, b) => {
    return a + b;
};

And when there is only one expression:

const add = (a, b) => a + b;
Explain the progression
Function Declaration
        ↓
Function Expression
        ↓
Arrow Function

the purpose is still to create reusable logic.

###
4. Anonymous Function

An anonymous function is simply a function without a name.

function() {
    console.log("Hello");
}

But this alone isn't normally useful because we have no way to directly call it.

It becomes useful when we pass it somewhere:

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);

This leads naturally into callbacks 


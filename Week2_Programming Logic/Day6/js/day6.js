
console.log("DAy 7");

// if Condtion
let stuage = 20;

if (stuage >= 18) {
    console.log("Eligible");
}

// if ..else
let submark=60;
if (submark >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// else if

let mark = 75;

if (mark >= 90) {
    console.log("A");
} else if (mark >= 75) {
    console.log("B");
} else if (mark >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}




// Multiple Condition 
let voterage = 20;
let hasID = true;

if (voterage >= 18 && hasID) {
    console.log("Entry allowed");
}else
{
    console.log("No Entries");
}



// Age Category program
let age = Number(prompt("Enter your age:"));

console.log(typeof(age));


if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else if (age >= 20 && age <= 59) {
    console.log("Adult");
}
else if (age >= 60) {
    console.log("Senior");
}
else {
    console.log("Invalid age");
}


/* 
// Grade Calculator
let mark = Number(prompt("Enter student mark:"));

if (mark >= 90 && mark <= 100) {
    console.log("Grade: A");
}
else if (mark >= 80) {
    console.log("Grade: B");
}
else if (mark >= 70) {
    console.log("Grade: C");
}
else if (mark >= 60) {
    console.log("Grade: D");
}
else if (mark >= 0) {
    console.log("Fail");
}
else {
    console.log("Invalid mark");
}
*/
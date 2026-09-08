Why Conditions?

Programs often need to make decisions.

Example:

If mark >= 50
    Student Passed

Otherwise
    Student Failed


###
if
let age = 20;

if (age >= 18) {
    console.log("Eligible");
}

###
if..else

let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

###
else if
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

###
Multiple Condition 
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Entry allowed");
}

Grade Calculator

Input:

Student Mark

Output:

90–100 → A
80–89  → B
70–79  → C
60–69  → D
<60    → Fail

Assignment

Create an Age Category Program:

0–12   → Child
13–19  → Teenager
20–59  → Adult
60+    → Senior
###
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


###
let age = Number(prompt("Enter your age:"));

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
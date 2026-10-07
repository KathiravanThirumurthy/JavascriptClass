console.log("Day18");
//const element = document.createElement("tagName");
const heading = document.createElement("h1");
heading.innerText="Welcome Javascript"
console.log(heading);

const app = document.getElementById("app");
app.append(heading);


const studentList = document.querySelector("#studentList");

const student1 = document.createElement("li");
student1.innerText = "Arun";

const student2 = document.createElement("li");
student2.innerText = "Priya";

const student3 = document.createElement("li");
student3.innerText = "Kumar";

studentList.append(student1);
studentList.append(student2);
studentList.append(student3);

const students = ["Arun", "Priya", "Kumar"];

const studentList1 = document.querySelector("#studentList");

/*
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.forEach((fruit) => {
    console.log(fruit);
});

getting index and value

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
*/
students.forEach((studentName) => {
    const student = document.createElement("li");

    student.innerText = studentName;

    studentList1.append(student);
});

//Adding CSS Classes

const student = document.createElement("li");

student.innerText = "Arun";

student.classList.add("student");

studentList.append(student);

// card

const card = document.createElement("div");

const title = document.createElement("h2");
title.innerText = "JavaScript";

const description = document.createElement("p");
description.innerText = "Learn DOM manipulation.";

card.append(title);
card.append(description);

document.body.append(card);


// remove - Only the first matching student is removed.


const removestudent = document.querySelector(".removestudent");

removestudent.remove();


//removeall - Now all .removestudent elements are removed.
/*
const removestudentall = document.querySelectorAll(".removestudent");

removestudentall.forEach((student) => {
    student.remove();
});*/
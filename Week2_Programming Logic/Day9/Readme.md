### Objects :
how to represent real-world entities using structured data.

### 1. Why Objects?

Consider a student.

Name: Arun
Age: 20
Course: MCA
Mark: 85

Instead of separate variables:

let name = "Arun";
let age = 20;
let course = "MCA";
let mark = 85;

Use an object:

let student = {
    name: "Arun",
    age: 20,
    course: "MCA",
    mark: 85
};
### 2. Accessing Properties

Dot notation:

console.log(student.name);
console.log(student.age);

Bracket notation:

console.log(student["name"]);

### 3. Changing Properties
student.mark = 90;

### 4. Adding Properties
student.city = "Chennai";

### 5. Object Methods

an object can contain a function.

let student = {

    name: "Arun",

    greet: function() {
        console.log("Hello");
    }
};

Call:

student.greet();


### 6. Array of Objects

This is very important for web development.

let students = [
    {
        name: "Arun",
        mark: 85
    },
    {
        name: "Priya",
        mark: 92
    },
    {
        name: "Rahul",
        mark: 78
    }
];

Now combine:

Array
 +
Objects
 +
Loop

Example:

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}


### Student Data System ###

Create 5 student objects.

Each student should contain:

Name
Age
Course
Mark

Store them inside an array.

Students should:

Display all students
Display student names
Calculate total marks
Calculate average
Find students who scored above 80

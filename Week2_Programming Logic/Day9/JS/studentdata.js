let students = [
    {
        name: "Arun",
        age: 20,
        course: "BCA",
        mark: 85
    },
    {
        name: "Priya",
        age: 21,
        course: "BSc CS",
        mark: 72
    },
    {
        name: "Karthik",
        age: 20,
        course: "BCA",
        mark: 91
    },
    {
        name: "Divya",
        age: 22,
        course: "MCA",
        mark: 64
    },
    {
        name: "Rahul",
        age: 21,
        course: "BSc CS",
        mark: 88
    }
];

let total = 0;

// Loop through students
for (let i = 0; i < students.length; i++) {

    // Display all students
    console.log(
        students[i].name,
        students[i].age,
        students[i].course,
        students[i].mark
    );

    // Total marks
    total = total + students[i].mark;

    // Students above 80
    if (students[i].mark > 80) {
        console.log("Above 80:", students[i].name);
    }
}

// Average
let average = total / students.length;

console.log("Total Marks:", total);
console.log("Average Mark:", average);
console.log("DAy 9");
const students = [
    {
        name: "Arun",
        age: 20,
        course: "JavaScript",
        mark: 85
    },
    {
        name: "Priya",
        age: 19,
        course: "Web Development",
        mark: 72
    },
    {
        name: "Karthik",
        age: 21,
        course: "Game Development",
        mark: 91
    },
    {
        name: "Divya",
        age: 20,
        course: "UI/UX Design",
        mark: 78
    },
    {
        name: "Rahul",
        age: 22,
        course: "3D Design",
        mark: 88
    }
];
// display all students
for (let student of students) {
    console.log(student);
}

//totol marks
let total = 0;

for (let student of students) {
    total = total + student.mark;
}

console.log(total);
// average marks
average = total / students.length ;
console.log(average);

// students who scored above 80

for (let student of students) {

    if (student.mark > 80) {
        console.log(student.name, student.mark);
    }

}
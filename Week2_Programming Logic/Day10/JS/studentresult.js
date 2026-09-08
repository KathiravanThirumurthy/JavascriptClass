// Student Result Management

let students = [
    {
        name: "Arun",
        marks: [80, 75, 90]
    },
    {
        name: "Priya",
        marks: [90, 85, 95]
    },
    {
        name: "Rahul",
        marks: [65, 70, 72]
    }
];


// Function to calculate total marks

function calculateTotal(marks) {

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}


// Function to calculate average marks

function calculateAverage(marks) {

    let total = calculateTotal(marks);

    let average = total / marks.length;

    return average;
}


// Function to calculate grade

function calculateGrade(average) {

    if (average >= 90) {
        return "A";
    } 
    else if (average >= 80) {
        return "B";
    } 
    else if (average >= 70) {
        return "C";
    } 
    else if (average >= 60) {
        return "D";
    } 
    else {
        return "F";
    }
}


// Function to display student result

function displayStudentResult(student) {

    let total = calculateTotal(student.marks);
    let average = calculateAverage(student.marks);
    let grade = calculateGrade(average);

    console.log("----------- Student Result -----------");
    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Grade:", grade);
    console.log("--------------------------------------");
}


// Display results for all students

for (let i = 0; i < students.length; i++) {

    displayStudentResult(students[i]);

}
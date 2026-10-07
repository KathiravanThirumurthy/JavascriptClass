const student = {
    name: "Arun",
    age: 21,
    course: "React"
};
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Object destructuring 
const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

// Array Destructuring
const colors = ["red", "green", "blue"];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// with destructuring
//const [first, second, third] = colors;
/*

OBJECT
{ name, age }
      ↓
property name


ARRAY
[ first, second ]
      ↓
position

*/

const StudentCard = ({ name, course, age }) => {
    return `
        <div>
            <h2>${name}</h2>
            <p>Course: ${course}</p>
            <p>Age: ${age}</p>
        </div>
    `;
};
//Nested Object Destructuring

const studentinfo = {
    studentname: "Arun",
    age: 21,
    address: {
        city: "Puducherry",
        pincode: "605001"
    }
};


const { studentname,address: { city, pincode } } = studentinfo;

console.log(studentname);
console.log(city);
console.log(pincode);



//Destructuring Function Parameters
/*
const displayStudent = (student) => {
    console.log(student.name);
    console.log(student.course);
};
*/
//We can destructure directly in the function parameter:

const displayStudent = ({ name, course }) => {
    console.log(name);
    console.log(course);
};

studentObj={ 
    name: "Kathriavan",
    course: "AI"
}

displayStudent(studentObj);



//Array Destructuring in Function Parameters

const displayColors = ([first, second, third]) => {
    console.log(first);
    console.log(second);
    console.log(third);
};
/*
const displayColors = (colorboxes) => {
    console.log(colorboxes[0]);
    console.log(colorboxes[1]);
    console.log(colorboxes[2]);
};
*/
const colorboxes=["Red", "Green", "Blue"]
displayColors(colorboxes);


                 DESTRUCTURING
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
       OBJECT                     ARRAY
          │                         │
          ↓                         ↓
   { name, age }             [ first, second ]
          │                         │
          ↓                         ↓
     Property                  Position
     based                     based
          │                         │
          └────────────┬────────────┘
                       ↓
              Function Parameters
                       ↓
                Array Methods
                       ↓
                    REACT
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
           Props              useState


### Object Destructuring
const { name, age } = student;

### Array Destructuring
const [first, second] = courses;

### Rename
const { name: studentName } = student;

### Default Value
const { course = "Not Assigned" } = student;

### Function Parameter Destructuring

const displayStudent = ({ name, course }) => {
    console.log(name, course);
};

### Array of Objects

students.forEach(({ name, course }) => {
    console.log(name, course);
});


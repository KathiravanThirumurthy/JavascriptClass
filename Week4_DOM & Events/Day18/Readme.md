###
 Static vs Dynamic Elements
Static HTML

The element already exists:

<h1>Hello Students</h1>

JavaScript can select and modify it.

Dynamic HTML

The element doesn't exist initially.

JavaScript creates it:

const heading = document.createElement("h1");

Then adds it to the webpage.

###
createElement() creates a new HTML element.
Creating an element does not automatically display it on the webpage.
We need to add it to the DOM.




###
The Four Star Pattern
1. SELECT parent
       ↓
2. CREATE element
       ↓
3. MODIFY element
       ↓
4. APPEND element

<div id="app">
    <h1>Welcome Students</h1>
</div>

const app = document.querySelector("#app");

const paragraph = document.createElement("p");

paragraph.innerText = "Learning DOM is fun!";

app.append(paragraph);


###
for → control the looping
FOR
↓
"I want to control the loop."

for (let i = 0; i < 10; i++)

forEach → process each array item

FOREACH
↓
"I have an array and want to do something
with every item."

array.forEach(item => {
    ...
});

###
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

###
Very important: break

This is one of the biggest differences.

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === 30) {
        break;
    }

    console.log(numbers[i]);
}

break doesn't work inside forEach().


###
What is an Event?

An event is something that happens in the browser.

Examples:

Click
Mouse movement
Keyboard press
Form submission
Page loading
Input change

in short - An event is a signal that something happened.
User clicked
User moved mouse
User pressed a key
User entered text

Javascript can listen to the events and execute code

###
addEventListener()

button.addEventListener("click", showMessage);
button.addEventListener("click", () => {});


element.addEventListener("event", function);
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("Button clicked");
});

HTML defines the structure. JavaScript handles the behavior.

###
What is the Event Object?

When an event occurs, the browser gives JavaScript information about that event.

That information is called the Event Object.

###
Event.target
Which element triggered the event?
const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
    console.log(event.target);
});

if the button is clicked the button element is returned


###
USER ACTION
    ↓
EVENT
    ↓
addEventListener()
    ↓
CALLBACK FUNCTION
    ↓
JAVASCRIPT LOGIC
    ↓
DOM CHANGE

eg: 
Click Add
    ↓
"click"
    ↓
addEventListener()
    ↓
callback()
    ↓
createElement()
    ↓
append()
    ↓
New task appears






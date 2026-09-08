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



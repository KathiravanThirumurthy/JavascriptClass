###
What is a Form?

A form is a section of a webpage used to collect information from the user.

Examples:

Login Form
Registration Form
Contact Form
Search Form
Feedback Form
Student Registration

###
Why submit Event?

Why not use click on the button?

Because a form is submitted when the user can:

Click the submit button.
Press Enter inside a form field.

Therefore, it is better to listen for:

form.addEventListener("submit", () => {});

For form submission, listen to the form's submit event.


###
What is Validation?

Validation means checking whether the data entered by the user is acceptable.

For example:

Name
   ↓
Is it empty?

Email
   ↓
Is it valid?

Age
   ↓
Is it within the required range?

###
Validation flow

USER ENTERS DATA
       ↓
     SUBMIT
       ↓
   VALIDATION
      /   \
   VALID  INVALID
     ↓       ↓
 SUCCESS    ERROR

 const name = nameInput.value;

if (name === "") {
    console.log("Name is required");
}
### Better Approach
 const name = nameInput.value.trim();

if (name === "") {
    console.log("Name is required");
}
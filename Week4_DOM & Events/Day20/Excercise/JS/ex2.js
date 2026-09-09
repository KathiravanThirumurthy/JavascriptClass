const taskForm = document.querySelector("#taskForm");

const taskInput = document.querySelector("#taskInput");

const taskList = document.querySelector("#taskList");

const message = document.querySelector("#message");


taskForm.addEventListener("submit", (event) => {

    // Stop form from refreshing the page
    event.preventDefault();


    // Get task value
    const taskText = taskInput.value.trim();


    // -------------------------
    // VALIDATION
    // -------------------------

    if (taskText === "") {

        taskInput.classList.remove("valid");

        taskInput.classList.add("invalid");

        message.innerText = "Please enter a task";

        message.className = "error";

        return;
    }


    // -------------------------
    // VALID INPUT
    // -------------------------

    taskInput.classList.remove("invalid");

    taskInput.classList.add("valid");

    message.innerText = "Task added successfully!";

    message.className = "success";


    // -------------------------
    // CREATE TASK
    // -------------------------

    const task = document.createElement("div");

    task.classList.add("task");


    // Task text

    const text = document.createElement("span");

    text.classList.add("task-text");

    text.innerText = taskText;


    // -------------------------
    // BUTTON CONTAINER
    // -------------------------

    const buttons = document.createElement("div");

    buttons.classList.add("task-buttons");


    // -------------------------
    // DONE BUTTON
    // -------------------------

    const doneButton = document.createElement("button");

    doneButton.innerText = "Done";

    doneButton.classList.add("done-btn");


    doneButton.addEventListener("click", () => {

        task.classList.toggle("completed");

    });


    // -------------------------
    // REMOVE BUTTON
    // -------------------------

    const removeButton = document.createElement("button");

    removeButton.innerText = "Remove";

    removeButton.classList.add("remove-btn");


    removeButton.addEventListener("click", () => {

        task.remove();

    });


    // -------------------------
    // PUT EVERYTHING TOGETHER
    // -------------------------

    buttons.appendChild(doneButton);

    buttons.appendChild(removeButton);


    task.appendChild(text);

    task.appendChild(buttons);


    taskList.appendChild(task);


    // -------------------------
    // CLEAR INPUT
    // -------------------------

    taskInput.value = "";

    taskInput.classList.remove("valid");

});
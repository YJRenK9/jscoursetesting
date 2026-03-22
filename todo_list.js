// reference for user giving a task
const taskInput = document.getElementById("taskInput");

// reference for adding a task
const addTaskBtn = document.getElementById("addTaskBtn");
// reference for the task list
const taskList = document.getElementById("taskList");
// reference for removing completed tasks
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// adds a task to the list when the user clicks on the "add task" button
addTaskBtn.addEventListener("click", addTask);
// clears completed tasks on the task list when the user clicks on the "clear completed tasks" button
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// a list of tasks (array of objects)
let tasks = [];

function addTask() {
    // gets the input of the task (and removes the surrounding whitespace)
    const taskText = taskInput.value.trim();

    // if the task isn't empty, add it then display it
    if (taskText !== "") {
        tasks.push({ text: taskText });
        taskInput.value = ""; // clear input for user to add the next task
        displayTasks();    
    }
}

function displayTasks() {
    // without this, all the previously added tasks will be added again
    taskList.innerHTML = "";

    // used to display the updated tasks onto the webpage
    tasks.forEach((task, index) => {
        // create "bullet point" element
        const li = document.createElement('li');
        // create label (name of task) and checkbox as the li's children
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
        // for each task, toggle it if the user interacts with the checkbox
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        // add the li element to the task list (unordered list element)
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    // initially undefined since such attribute didn't exist yet
    // when negated, undefined becomes true since undefined also means false
    console.log(tasks[index].completed);
    
    // toggles completed/incompleted (true/false)
    tasks[index].completed = !tasks[index].completed;
    // display the updated tasks list
    displayTasks();
}

function clearCompletedTasks() {
    // filter only the incompleted tasks (meaning the completed tasks are removed)
    tasks = tasks.filter(task => !task.completed);
    // display the updated tasks list
    displayTasks();
}
// script.js

// Array to hold tasks
let tasks = [];

// Load tasks from local storage on page load
window.onload = () => {
    loadTasks();
};

// Function to add a task
function addTask(task) {
    tasks.push(task);
    saveTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Handle user interaction for adding tasks
document.getElementById('addTaskForm').onsubmit = (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value) {
        addTask(taskInput.value);
        taskInput.value = '';
    }
};
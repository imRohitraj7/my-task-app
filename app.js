// --- 1. Get Elements from the Page ---

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// --- 2. Load Saved Tasks ---

// This loads tasks from the browser's local storage
// 'JSON.parse' converts the saved string back into an array
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// A function to display all tasks on the page
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list first
    savedTasks.forEach((taskText, index) => {
        // Create a new list item
        const li = document.createElement('li');
        
        // Add the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Add a "Done" button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done-btn';
        
        // Add an event listener to the "Done" button
        doneButton.addEventListener('click', () => {
            removeTask(index);
        });
        
        li.appendChild(doneButton);
        
        // Add the new list item to the page
        taskList.appendChild(li);
    });
}

// --- 3. Save Tasks Function ---

// This saves the current 'savedTasks' array to local storage
// 'JSON.stringify' converts the array into a string for storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

// --- 4. Add Task Function ---

function addTask(event) {
    // Stop the form from refreshing the page
    event.preventDefault(); 
    
    const taskText = taskInput.value.trim(); // Get text from input

    if (taskText !== '') {
        // Add the new task to our array
        savedTasks.push(taskText);
        
        // Save the updated array
        saveTasks();
        
        // Re-display all tasks
        renderTasks();
        
        // Clear the input box
        taskInput.value = '';
    }
}

// --- 5. Remove Task Function ---

function removeTask(index) {
    // Remove the task from the array at the given index
    savedTasks.splice(index, 1);
    
    // Save the updated array
    saveTasks();
    
    // Re-display all tasks
    renderTasks();
}

// --- 6. Set Up Event Listeners ---

// Run 'addTask' function when the form is submitted
taskForm.addEventListener('submit', addTask);

// Display any saved tasks when the page first loads
renderTasks();

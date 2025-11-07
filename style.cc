/* Basic setup */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

main {
    max-width: 600px;
    margin: 1rem auto; /* Center the content */
    padding: 0 1rem;
}

/* Form styling */
#task-form {
    display: flex;
    margin-bottom: 1.5rem;
}

#task-input {
    flex-grow: 1;
    padding: 0.75rem;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 6px 0 0 6px;
}

#task-form button {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 0 6px 6px 0;
}

/* Task list styling */
#task-list-container h2 {
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

#task-list {
    list-style: none;
}

#task-list li {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* The "Done" button inside a task item */
#task-list li .done-btn {
    padding: 0.3rem 0.6rem;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

const task = new Set();

// Get elements
const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", addTask);
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    if (task.has(todoText)) {
        alert("This task already exists in your list!");
        return;
    }

    // Add new task to the Set
    task.add(todoText);

    // Create list item
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "5px 10px";
    li.style.borderBottom = "1px solid #ddd";

    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = todoText;
    taskSpan.style.flex = "1"; // Ensures text takes most of the space

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.padding = "5px";
    deleteButton.style.border = "none";
    deleteButton.style.color = "white";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.fontSize = "14px";

    deleteButton.onclick = function () {
        li.remove();
        task.delete(todoText); // ✅ Proper removal from Set
    };

    // Create checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.marginLeft = "10px";

    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            const confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                li.remove();
                task.delete(todoText);
            } else {
                checkBox.checked = true;
            }
        }
    });
    

    // Append elements properly
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    li.appendChild(checkBox);  // ✅ Ensure checkbox is appended after adding event listener
    todoList.appendChild(li);
    
    // Clear input field
    todoInput.value = "";
}

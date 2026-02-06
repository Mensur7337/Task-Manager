const formEl = document.querySelector("#todo-form");
const inputEl = document.querySelector("#task-input");
const categoryEl = document.querySelector("#category-input");
const dateEl = document.querySelector("#date-input");
const ulEl = document.querySelector("#todo-list");
const searchEl = document.querySelector("#search-input");
const filterStatusEl = document.querySelector("#status-filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = inputEl.value.trim();
    
    if (!taskText) return; 

    const newTask = {
        id: Date.now(),
        name: taskText,
        category: categoryEl.value || "General",
        dueDate: dateEl.value,
        createdAt: new Date().toISOString(),
        checked: false
    };

    // Important: .unshift() adds new task to the BEGINNING of the array
    tasks.unshift(newTask); 
    saveAndRender();
    formEl.reset();
});

function renderTasks() {
    ulEl.innerHTML = "";
    const searchText = searchEl.value.toLowerCase();
    const statusFilter = filterStatusEl.value;

    const filtered = tasks.filter(t => {
        const matchesSearch = t.name.toLowerCase().includes(searchText);
        const matchesStatus = statusFilter === "all" || 
                             (statusFilter === "completed" ? t.checked : !t.checked);
        return matchesSearch && matchesStatus;
    });

    filtered.forEach(task => {
        const liEl = document.createElement("li");
        if (task.checked) liEl.classList.add("checked");

        const today = new Date().toISOString().split('T')[0];
        if (task.dueDate && !task.checked) {
            if (task.dueDate === today) liEl.classList.add("upcoming"); 
            else if (task.dueDate < today) liEl.classList.add("overdue");
        }

        liEl.innerHTML = `
            <div class="task-content">
                <span class="task-text">${task.name}</span>
                <span class="task-meta">${task.category} | ${task.dueDate || 'No Date'}</span>
            </div>
            <div class="actions">
                <i class="fas fa-check-square btn-check" title="Complete"></i>
                <i class="fas fa-edit btn-edit" title="Edit"></i>
                <i class="fas fa-trash btn-delete" title="Delete"></i>
            </div>
        `;

        liEl.querySelector(".btn-check").addEventListener("click", () => toggleTask(task.id));
        liEl.querySelector(".btn-delete").addEventListener("click", () => deleteTask(task.id));
        liEl.querySelector(".btn-edit").addEventListener("click", () => editTask(task.id));
        liEl.querySelector(".task-text").addEventListener("dblclick", () => editTask(task.id));

        ulEl.appendChild(liEl);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newName = prompt("Edit task name:", task.name);
    if (newName !== null && newName.trim() !== "") {
        task.name = newName.trim();
        saveAndRender();
    }
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    task.checked = !task.checked;
    saveAndRender();
}

function deleteTask(id) {
    if(confirm("Are you sure?")) {
        tasks = tasks.filter(t => t.id !== id); 
        saveAndRender();
    }
}

function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Listeners for live updates
searchEl.addEventListener("input", renderTasks);
filterStatusEl.addEventListener("change", renderTasks);
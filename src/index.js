document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    const taskInput = document.getElementById("new-task-description");
    const taskValue = taskInput.value;

    
    const newTask = document.createElement("li");
    newTask.textContent = taskValue;

   
    taskList.appendChild(newTask);

    
    taskInput.value = "";
  });
});

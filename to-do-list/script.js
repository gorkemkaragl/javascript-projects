const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Sayfa açıldığında kayıtlı görevleri yükle
document.addEventListener("DOMContentLoaded", loadTasks);

// Form gönderilince görev ekle
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== "") {
    addTaskToList(taskText);
    saveTask(taskText); // localStorage'a kaydet
    input.value = "";
  }
});

// Görevi listeye ekler
function addTaskToList(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Sil";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    deleteTask(text); // localStorage'tan sil
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// localStorage'a görev ekler
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// localStorage'dan görev siler
function deleteTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Sayfa açıldığında görevleri getir
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    addTaskToList(task);
  });
}

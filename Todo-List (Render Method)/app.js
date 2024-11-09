// Global state to hold the todos
let todos = [];

// Function to render the todo list
function render() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear the current list

  // Loop through todos array and render each todo item
  todos.forEach((todo, index) => {
    const li = document.createElement('li');

    // Check if the item is being edited
    li.innerHTML = `
      ${todo.isEditing ? 
        `<input type="text" class="edit-input" value="${todo.text}" onblur="saveEdit(${index})" />`
        : `<span class="todo-text ${todo.completed ? 'completed' : ''}" onclick="toggleComplete(${index})">${todo.text}</span>`}
      <button class="edit" onclick="editOrSave(${index})">${todo.isEditing ? 'Save' : 'Edit'}</button>
      <button class="delete" onclick="deleteTodo(${index})">Delete</button>`;
    todoList.appendChild(li);
  });
}

// Function to add a new todo
function addTodo() {
  const todoText = document.getElementById('newTodo').value.trim();
  if (todoText === '') return;

  // Create new todo item and add to todos array
  const newTodo = { text: todoText, completed: false, isEditing: false };
  todos.push(newTodo);

  // Render the updated todo list
  render();

  // Clear the input field
  document.getElementById('newTodo').value = '';
}

// Function to delete a todo
function deleteTodo(index) {
  // Remove the todo item from the todos array
  todos.splice(index, 1);

  // Render the updated todo list
  render();
}

// Function to toggle the completion status of a todo
function toggleComplete(index) {
  // Toggle the 'completed' status of the todo item
  todos[index].completed = !todos[index].completed;

  // Render the updated todo list
  render();
}

// Function to start editing or save the edited todo
function editOrSave(index) {
  const todo = todos[index];
  if (todo.isEditing) {
    const editedText = document.querySelector(`#todoList li:nth-child(${index + 1}) .edit-input`).value.trim();
    if (editedText !== '') {
      todo.text = editedText;
    }
  }
  todo.isEditing = !todo.isEditing;

  // Render the updated todo list
  render();
}

// Function to save the edited todo
function saveEdit(index) {
  const editedText = document.querySelector(`#todoList li:nth-child(${index + 1}) .edit-input`).value.trim();
  if (editedText !== '') {
    todos[index].text = editedText;
  }
  todos[index].isEditing = false;

  // Render the updated todo list
  render();
}

// Initial render of todos on page load
render();
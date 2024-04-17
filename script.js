//Selectors
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
//Functions

function addTodo(event){
    //Todo DIv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = inputBox.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APEND TO LIST
    listContainer.appendChild(todoDiv);
    //CLEAR INPUTBOX VALUE
    inputBox.value = "";
}
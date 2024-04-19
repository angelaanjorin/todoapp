//Selectors
const form = document.getElementById("todoform");
const todoInput = document.getElementById("newtodo");
const todosList = document.getElementById("todos-list");

//VARS
let todos = [];
//FORM SUBMIT
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    saveTodo();
    renderTodos();
})

//SAVE TODO
    function saveTodo() {
        const todoValue = todoInput.value
        
        //check if the todo is empty
        const isEmpty = todoValue === '';
        
        //check for duplicate todos
        const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());


        if (isEmpty) {
            alert("Todo`s input is empty");
        } else if (isDuplicate) {
            alert("Todo already exists!");
        }
        else {
       todos.push ({
        value : todoValue,
        checked : false,
    });
       todoInput.value = "";
    };
}

//  RENDER TODOS
    function renderTodos(){
        //CLEAR ELEMENT BEFORE A RE-RENDER
            todosList.innerHTML = "";

            //RENDER TODOS
        todos.forEach((todo, index) => {
            todosList.innerHTML += `
            <div class="todo" id=${index}>
            <i class= "fa ${todo.checked ? 'fa-circle-check' : 'regular fa-circle'}" ></i>
            <p class="">${todo.value}</p>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fas fa-trash"></i>
          </div>
          `;
        });
    }
//Event Listeners

//Functions
//Selectors
const form = document.getElementById("todoform");
const todoInput = document.getElementById("newtodo");
const todosList = document.getElementById("todos-list");

//VARS
let todos = [];
//let EditTodoId = -1;

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
        }//else {
           // if(EditTodoId >= 0){
                //update the edit todo
                //todos = todos.map((todo, index) => ({
                   // ...todo, 
                  //  value: index === EditTodoId ? todoValue : todo.value
                //}));
                //EditTodoId = -1;
            //}
            else{
                todos.push ({
                value : todoValue,
                checked : false,
                })
            }
       
       todoInput.value = "";
       saveData();
        }

//  RENDER TODOS
    function renderTodos(){
        //CLEAR ELEMENT BEFORE A RE-RENDER
            todosList.innerHTML = "";

            //RENDER TODOS
        todos.forEach((todo, index) => {
            todosList.innerHTML += `
            <div class="todo" id=${index}>
            <i class= "${todo.checked ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}" 
            data-action ="check"
            ></i>
            <p class=""data-action ="check">${todo.value}</p>
            <i class="fa-solid fa-pen-to-square"data-action ="edit"></i>
            <i class="fas fa-trash"data-action ="delete"></i>
          </div>
          `;
        });
        saveData();
    }
//Event Listener for all the todos
todosList.addEventListener('click',(event)=> {
    const target = event.target;
    const parentElement = target.parentNode;

    if(parentElement.className !=='todo') return;

// TODO ID
    const todo = parentElement;
    const todoId = Number(todo.id);

    // TARGET ACTION
    const action = target.dataset.action
    
    action === "check" && checkTodo(todoId);
    //action === "edit" && editTodo(todoId);
    action === "delete" && deleteTodo(todoId);

});

//CHECK A TODO
function checkTodo(todoId){
    todos = todos.map((todo, index) => ({
        ...todo,
        checked : index === todoId ? !todo.checked : todo.checked
    }));

    renderTodos();
    saveData();
}

//EDIT A TODO

// DELETE A TODO
    function deleteTodo(todoId){
       todos = todos.filter((todo, index) => index !==todoId);

       //re-render
       renderTodos();
       saveData();
    }
    function saveData(){
        localStorage.setItem("data", todosList.innerHTML);
    }
    function showTask(){
        todosList.innerHTML = localStorage.getItem("data");
    }
    showTask()
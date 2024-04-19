//Selectors
const form = document.getElementById("todoform");
const todoInput = document.getElementById("newtodo");

//VARS
let todos = [];
//FORM SUBMIT
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    saveTodo();
})

//SAVE TODO
    function saveTodo() {
        const todoValue = todoInput.value
        
        //check if the todo is empty
        const isEmpty = todoValue === '';
        
        //check for duplicate todos
        const isDuplicate = todos.some((todo) => todo.value === todoValue);


        if (isEmpty) {
            alert("Todo`s input is empty");
        } else if (isDuplicate) {
            alert("Todo already exists!")
        }
        else {const todo = {
            value : todoValue,
            checked : false,
        };
       todos.push (todo);
        console.log (todos);
    };
}
//Event Listeners

//Functions
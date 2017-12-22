// function sayHiTo(person) {
//     console.log('hi', person);
// }

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My Todos:', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue; 
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

addTodo('Some Stuff');
displayTodos();
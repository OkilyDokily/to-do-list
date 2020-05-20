function todoList(){
  var counter = 0;
  this.todos = [];
}

todoList.prototype.addTodo = function(todo){
  todo.id = ++counter;
  this.todos.push(todo);
}

function todo(string){
  this.string = string;
}

function convertStringToTodoObject(string){
  return new todo(string);  
}

function insertObjectIntoTodoArray(todo){
  todoList.addTodo(todo)
}



$(document).ready(function{}){

}
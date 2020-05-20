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

convertStringToTodoObject(string){
  return new todo(string);  
}


$(document).ready(function{}){

}
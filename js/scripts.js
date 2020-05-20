function todoList(){
  this.counter = 0;
  this.todos = [];
}

todoList.prototype.addTodo = function(todo){
  todo.id = ++this.counter;
  this.todos.push(todo);
}

function todoObj(string){
  this.string = string;
}

function convertStringToTodoObject(string){
  return new todoObj(string);  
}

function insertObjectIntoTodoArray(todo,list){
  list.addTodo(todo);
}

function removeTodoListObject(number,todoList){
 for(var i = 0; i < todoList.todos.length; i++){
  if (todoList.todos[i].id === number){
    delete todoList.todos[i]
    break;
  } 
 }
}

$(document).ready(function(){
  var list = new todoList();
  var todo = convertStringToTodoObject("my first string");
  insertObjectIntoTodoArray(todo,list);
  console.log(list);
  removeTodoListObject(1,list);
  console.log(list)
});
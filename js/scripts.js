function TodoList(){
  this.counter = 0;
  this.todos = [];
}

TodoList.prototype.addTodo = function(todo){
  todo.id = ++this.counter;
  this.todos.push(todo);
}

var todoList = new TodoList();

function todoObj(string){
  this.string = string;
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

function createObjectAndInsertIntoList(input){
  var todo = new todoObj(input);
  todoList.addTodo(todo);
  console.log(todoList);
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var input = $("input").val();
    createObjectAndInsertIntoList(input);
  })
});
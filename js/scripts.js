function TodoList(){
  this.counter = 0;
  this.todos = [];
}

TodoList.prototype.addTodo = function(todo){
  todo.id = ++this.counter;
  this.todos.push(todo);
}

TodoList.prototype.getLastTodo = function(){
  return this.todos[this.todos.length - 1];
}

var todoList = new TodoList();

function todoObj(string){
  this.string = string;
}

function removeTodoListObject(number){
 for(var i = 0; i < todoList.todos.length; i++){
  if(todoList.todos[i]){
    if (todoList.todos[i].id === number){
      delete todoList.todos[i]
      break;
    } 
  }
 }
}

function createObjectAndInsertIntoList(input){
  var todo = new todoObj(input);
  todoList.addTodo(todo);
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var input = $("input").val();
    createObjectAndInsertIntoList(input);


    var id = todoList.getLastTodo().id;
    var todo = todoList.getLastTodo().string;

    $("ul").append("<li id='todo"  + id + "'" +">" + todo + "</li>");
    $("#todo" + id).append("<button>Remove Item</button>");
    $("#todo"+ id + " button").click(function(){
       removeTodoListObject(id);
       console.log(todoList);
    })
  })

});
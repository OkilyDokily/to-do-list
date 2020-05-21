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
    clearResults();
    var input = $("input").val();
    createObjectAndInsertIntoList(input);
    refresh();
  })
  function refresh(){
    todoList.todos.forEach(function(todo){
      $("ul").append("<li id='todo"  + todo.id + "'" +">" + todo.string + "</li>");
      $("#todo" + todo.id).append("<button>Remove Item</button>");
      $("#todo"+ todo.id + " button").click(function(){
         removeTodoListObject(todo.id); 
         clearResults()
         refresh();  
      })
    })  
  }
  function clearResults(){
    $("li").remove();
  }

});
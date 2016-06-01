// Construct an Angular Factory that builds Todo models, ToDoFactory.


toDoApp.factory('ToDoFactory', function(){
  var todo = function(todoText, completed){
    this.text = todoText;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };
  todo.prototype.complete = function(){
    this.completed = true;
  };
  return todo;
});

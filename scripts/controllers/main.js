angular.module("todoListApp")

.controller('mainCtrl', function($scope, dataService) {
  dataService.getTodos(function(response) {
    $scope.todos = response.data;
  });

  $scope.addTodo = function() {
    var todo = {name: "Dit is een nieuwe To Do"};
    $scope.todos.unshift(todo);
  };

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };
})

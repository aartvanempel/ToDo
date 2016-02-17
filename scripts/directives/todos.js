angular.module("todoListApp")
.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true // verwijder custom directives tags van uiteindelijke DOM
  }
})

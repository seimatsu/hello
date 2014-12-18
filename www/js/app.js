(function(){
  'use strict';
  var module = angular.module('App', ['onsen']);


  module.controller('MainController', function($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
    $scope.todos.push({
      title: Math.random(),
      done: false
    });
    alert('test');
  };



  });

});

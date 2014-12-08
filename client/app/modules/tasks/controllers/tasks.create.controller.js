;(function(){
'use strict';

  // Tasks controller
  angular
    .module('tasks')
    .controller('TasksCreateController', TasksCreateController);

  /* @inject */
  function TasksCreateController($scope, $state, Tasks, logger) {

    var vm;

    vm        = this;
    vm.create = create;

    $scope.$emit('child:opened');

    //////////////////////

    // Create new Task
    function create() {
      Tasks.post( vm.task )
        .then( function (response){
          // Redirect after save
          $state.go('tasks', {taskId: response._id});

        })
        .catch( function (error){
          $scope.error = error.message;
        });
        this.name = '';
      // Clear form fields
    }


  }
}).call(this);
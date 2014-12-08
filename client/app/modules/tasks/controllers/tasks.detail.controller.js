;(function(){
'use strict';

  // Tasks controller
  angular
    .module('tasks')
    .controller('TasksDetailController', TasksDetailController);

  /* @inject */
  function TasksDetailController(resolvedDetail, $scope, $stateParams, $state, Tasks, logger) {

    var vm;

    vm          = this;
    vm.remove   = remove;
    vm.update   = update;
    vm.task = resolvedDetail;

    //////////////////////

    // Remove existing Task
    function remove(task) {

      vm.task.remove()
        .then( function(){
          $state.go('tasks');
        });

    }

    // Update existing Task
    function update() {

      vm.task.save()
        .then( function ( data ){
          $state.go('tasks-detail', {taskId: vm.task._id});
        })
        .catch( function (error){
          $scope.error = error.data.message;

        });
    }
  }
}).call(this);

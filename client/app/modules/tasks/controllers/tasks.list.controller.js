;(function(){
'use strict';

  // Tasks controller
  angular
    .module('tasks')
    .controller('TasksController', TasksController);

  /* @inject */
  function TasksController(resolvedList, $scope, $stateParams, $state, Tasks, logger, socket, $storage) {


    var vm = this;
    // vm.tasks = resolvedList;
    // vm.create = create;
    // vm.destroy = destroyl
    // vm.update = update;
    // vm.complete = complete;
    // vm.incomplete = incomplete;

    //////////////////////

    function create(){
      $storage.store(vm.newTask);
      vm.newTask = '';
    }

    // function

  }
}).call(this);
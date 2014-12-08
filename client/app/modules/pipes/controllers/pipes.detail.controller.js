;(function(){
'use strict';

  // Pipes controller
  angular
    .module('pipes')
    .controller('PipesDetailController', PipesDetailController);

  /* @inject */
  function PipesDetailController(resolvedDetail, $scope, $stateParams, $state, Pipes, logger) {

    var vm;

    vm          = this;
    vm.remove   = remove;
    vm.update   = update;
    vm.pipe = resolvedDetail;

    //////////////////////

    // Remove existing Pipe
    function remove(pipe) {

      vm.pipe.remove()
        .then( function(){
          $state.go('pipes');
        });

    }

    // Update existing Pipe
    function update() {

      vm.pipe.save()
        .then( function ( data ){
          $state.go('pipes-detail', {pipeId: vm.pipe._id});
        })
        .catch( function (error){
          $scope.error = error.data.message;

        });
    }
  }
}).call(this);

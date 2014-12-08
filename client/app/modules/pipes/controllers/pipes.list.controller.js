;(function(){
'use strict';

  // Pipes controller
  angular
    .module('pipes')
    .controller('PipesController', PipesController);

  /* @inject */
  function PipesController(resolvedList, $scope, $stateParams, $state, Pipes, logger, socket) {


    var vm = this;
    vm.pipes = resolvedList;
    vm.isActive = isActive;
    vm.shown = {};

    socket.syncUpdates('pipes', vm.pipes);
    //////////////////////


    function isActive(state) {
      // console.log(state === $state.params.pipeId)
      return $state.includes('pipes', {pipesId: state});
    }

    // show Pipes
    function showArticle(pipe){
        if(article._id === vm.shown._id){
          $state.go('pipes');
          vm.showDetail = false;
          vm.shown = {};
        } else {
          $state.go('pipes.detail', {pipesId: pipes._id});
          vm.shown = article;
          // vm.showDetail = true;
        }
    }
    /*
        Event emitted from child states.
     */
    $scope.$on('child:closed', function ( event ){
      vm.shown = {};
      vm.showDetail = false;
    });
    $scope.$on('child:opened', function ( event ){
      vm.shown = {};
      vm.showDetail = true;
    });
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pipes');
    });
  }
}).call(this);
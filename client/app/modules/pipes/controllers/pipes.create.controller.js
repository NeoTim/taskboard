;(function(){
'use strict';

  // Pipes controller
  angular
    .module('pipes')
    .controller('PipesCreateController', PipesCreateController);

  /* @inject */
  function PipesCreateController($scope, $state, Pipes, logger) {

    var vm;

    vm        = this;
    vm.create = create;

    $scope.$emit('child:opened');

    //////////////////////

    // Create new Pipe
    function create() {
      Pipes.post( vm.pipe )
        .then( function (response){
          // Redirect after save
          $state.go('pipes', {pipeId: response._id});

        })
        .catch( function (error){
          $scope.error = error.message;
        });
        this.name = '';
      // Clear form fields
    }


  }
}).call(this);
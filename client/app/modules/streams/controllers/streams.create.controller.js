;(function(){
'use strict';

  // Streams controller
  angular
    .module('streams')
    .controller('StreamsCreateController', StreamsCreateController);

  /* @inject */
  function StreamsCreateController($scope, $state, Streams, logger) {

    var vm;

    vm        = this;
    vm.create = create;

    $scope.$emit('child:opened');

    //////////////////////

    // Create new Stream
    function create() {
      Streams.post( vm.stream )
        .then( function (response){
          // Redirect after save
          $state.go('streams', {streamId: response._id});

        })
        .catch( function (error){
          $scope.error = error.message;
        });
        this.name = '';
      // Clear form fields
    }


  }
}).call(this);
;(function(){
'use strict';

  // Events controller
  angular
    .module('events')
    .controller('EventsCreateController', EventsCreateController);

  /* @inject */
  function EventsCreateController($scope, $state, Events, logger) {

    var vm;

    vm        = this;
    vm.create = create;

    $scope.$emit('child:opened');

    //////////////////////

    // Create new Event
    function create() {
      Events.post( vm.event )
        .then( function (response){
          // Redirect after save
          $state.go('events', {eventId: response._id});

        })
        .catch( function (error){
          $scope.error = error.message;
        });
        this.name = '';
      // Clear form fields
    }


  }
}).call(this);
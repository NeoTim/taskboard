;(function(){
'use strict';

  // Events controller
  angular
    .module('events')
    .controller('EventsDetailController', EventsDetailController);

  /* @inject */
  function EventsDetailController(resolvedDetail, $scope, $stateParams, $state, Events, logger) {

    var vm;

    vm          = this;
    vm.remove   = remove;
    vm.update   = update;
    vm.event = resolvedDetail;

    //////////////////////

    // Remove existing Event
    function remove(event) {

      vm.event.remove()
        .then( function(){
          $state.go('events');
        });

    }

    // Update existing Event
    function update() {

      vm.event.save()
        .then( function ( data ){
          $state.go('events-detail', {eventId: vm.event._id});
        })
        .catch( function (error){
          $scope.error = error.data.message;

        });
    }
  }
}).call(this);

;(function(){
'use strict';

  // Events controller
  angular
    .module('events')
    .controller('EventsController', EventsController);

  /* @inject */
  function EventsController(resolvedList, $scope, $stateParams, $state, Events, logger, socket) {


    var vm = this;
    vm.events = resolvedList;
    vm.isActive = isActive;
    vm.shown = {};

    socket.syncUpdates('events', vm.events);
    //////////////////////


    function isActive(state) {
      // console.log(state === $state.params.eventId)
      return $state.includes('events', {eventsId: state});
    }

    // show Events
    function showArticle(event){
        if(article._id === vm.shown._id){
          $state.go('events');
          vm.showDetail = false;
          vm.shown = {};
        } else {
          $state.go('events.detail', {eventsId: events._id});
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
      socket.unsyncUpdates('events');
    });
  }
}).call(this);
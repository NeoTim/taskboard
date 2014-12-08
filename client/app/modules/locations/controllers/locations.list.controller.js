;(function(){
'use strict';

  // Locations controller
  angular
    .module('locations')
    .controller('LocationsController', LocationsController);

  /* @inject */
  function LocationsController(resolvedList, $scope, $stateParams, $state, Locations, logger, socket) {


    var vm = this;
    vm.locations = resolvedList;
    vm.isActive = isActive;
    vm.shown = {};

    socket.syncUpdates('locations', vm.locations);
    //////////////////////


    function isActive(state) {
      // console.log(state === $state.params.locationId)
      return $state.includes('locations', {locationsId: state});
    }

    // show Locations
    function showArticle(location){
        if(article._id === vm.shown._id){
          $state.go('locations');
          vm.showDetail = false;
          vm.shown = {};
        } else {
          $state.go('locations.detail', {locationsId: locations._id});
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
      socket.unsyncUpdates('locations');
    });
  }
}).call(this);
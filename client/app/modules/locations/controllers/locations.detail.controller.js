;(function(){
'use strict';

  // Locations controller
  angular
    .module('locations')
    .controller('LocationsDetailController', LocationsDetailController);

  /* @inject */
  function LocationsDetailController(resolvedDetail, $scope, $stateParams, $state, Locations, logger) {

    var vm;

    vm          = this;
    vm.remove   = remove;
    vm.update   = update;
    vm.location = resolvedDetail;

    //////////////////////

    // Remove existing Location
    function remove(location) {

      vm.location.remove()
        .then( function(){
          $state.go('locations');
        });

    }

    // Update existing Location
    function update() {

      vm.location.save()
        .then( function ( data ){
          $state.go('locations-detail', {locationId: vm.location._id});
        })
        .catch( function (error){
          $scope.error = error.data.message;

        });
    }
  }
}).call(this);

;(function(){
'use strict';

  // Locations controller
  angular
    .module('locations')
    .controller('LocationsCreateController', LocationsCreateController);

  /* @inject */
  function LocationsCreateController($scope, $state, Locations, logger) {

    var vm;

    vm        = this;
    vm.create = create;

    $scope.$emit('child:opened');

    //////////////////////

    // Create new Location
    function create() {
      Locations.post( vm.location )
        .then( function (response){
          // Redirect after save
          $state.go('locations', {locationId: response._id});

        })
        .catch( function (error){
          $scope.error = error.message;
        });
        this.name = '';
      // Clear form fields
    }


  }
}).call(this);
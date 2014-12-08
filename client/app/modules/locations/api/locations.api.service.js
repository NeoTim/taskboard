;(function(){
'use strict';
  //Locations service used to communicate Locations REST endpoints
  angular
    .module('locations')
    .factory('Locations', Locations);

    /* @inject */
    function Locations(Restangular) {
      return Restangular.service('locations');
    }
}).call(this);
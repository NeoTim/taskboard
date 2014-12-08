;(function(){
'use strict';
  //Streams service used to communicate Streams REST endpoints
  angular
    .module('streams')
    .factory('Streams', Streams);

    /* @inject */
    function Streams(Restangular) {
      return Restangular.service('streams');
    }
}).call(this);
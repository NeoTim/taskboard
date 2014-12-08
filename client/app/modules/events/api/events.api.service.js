;(function(){
'use strict';
  //Events service used to communicate Events REST endpoints
  angular
    .module('events')
    .factory('Events', Events);

    /* @inject */
    function Events(Restangular) {
      return Restangular.service('events');
    }
}).call(this);
;(function(){
'use strict';
  //Pipes service used to communicate Pipes REST endpoints
  angular
    .module('pipes')
    .factory('Pipes', Pipes);

    /* @inject */
    function Pipes(Restangular) {
      return Restangular.service('pipes');
    }
}).call(this);
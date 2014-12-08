;(function(){
'use strict';
  //Podios service used to communicate Podios REST endpoints
  angular
    .module('core')
    .factory('Podios', Podios);

    /* @inject */
    function Podios(Restangular) {
      return Restangular.service('podios');
    }
}).call(this);
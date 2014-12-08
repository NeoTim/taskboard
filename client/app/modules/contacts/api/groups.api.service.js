;(function(){
'use strict';
  //Groups service used to communicate Groups REST endpoints
  angular
    .module('contact')
    .factory('Groups', Groups);

    /* @inject */
    function Groups(Restangular) {
      return Restangular.service('groups');
    }
}).call(this);
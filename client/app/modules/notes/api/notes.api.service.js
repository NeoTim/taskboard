;(function(){
'use strict';
  //Notes service used to communicate Notes REST endpoints
  angular
    .module('notes')
    .factory('Notes', Notes);

    /* @inject */
    function Notes(Restangular) {
      return Restangular.service('notes');
    }
}).call(this);
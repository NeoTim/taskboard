;(function(){
'use strict';
  //Tasks service used to communicate Tasks REST endpoints
  angular
    .module('tasks')
    .factory('Tasks', Tasks);

    /* @inject */
    function Tasks(Restangular) {
      return Restangular.service('tasks');
    }
}).call(this);
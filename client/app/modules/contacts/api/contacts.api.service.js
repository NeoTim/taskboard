;(function(){
'use strict';
  //Contacts service used to communicate Contacts REST endpoints
  angular
    .module('contact')
    .factory('Contacts', Contacts);

    /* @inject */
    function Contacts(Restangular) {
      return Restangular.service('contacts');
    }
}).call(this);
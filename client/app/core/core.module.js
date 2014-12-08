;(function(){
  'use strict';

  angular
    .module('core', [])
    .constant('serverBaseUrl', 'http://localhost:9000')
    .constant('serverUrl', 'http://localhost:9000/api')
    .run( run )

    /* @inject */
    function run($rootScope, $state, $stateParams){
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }

}).call(this);
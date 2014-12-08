;(function(){
'use strict';
window.app = angular
  .module('asd', [
  'ngAnimate',
  'ngFx',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'restangular',
  'ngStorage',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'monospaced.elastic',

  'ui.load',
  'ui.jq',
  'ui.validate',
  'oc.lazyLoad',
  'gridster',
  'pascalprecht.translate',
  'core',
  'app.modules'

  ])
  .run( run );

  /* @inject */
  function run($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/signin');
        }
      });
    });
  }

}).call(this);
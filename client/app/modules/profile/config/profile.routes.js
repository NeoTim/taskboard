;(function(){
  'use strict';
  //Setting up route
  angular
    .module('profile')
    .config( Profile );

  /* @inject */
  function Profile($stateProvider) {
    //  state routing
    $stateProvider
      .state('app.profile', {
        url: '/profile',
        templateUrl: 'app/modules/profile/views/profile.view.html',
        controller:'ProfileController as vm'
      });
  }

}).call(this);
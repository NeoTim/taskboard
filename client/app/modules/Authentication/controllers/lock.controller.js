;(function(){
'use strict';
  angular
    .module('authentication')
    .controller('LockCtrl', LockCtrl);

    /* @inject */
    function LockCtrl($scope, Auth, $location, $window, $storage) {
      var vm = this;

      vm.user = JSON.parse(localStorage.getItem('user'))
      vm.errors = {};
      vm.login = login;
      vm.loginOauth = loginOauth;
      ///////////////////////

      function login(form) {
        vm.submitted = true;

          Auth.login({
            email: vm.user.email,
            password: vm.user.password
          })
          .then( function() {
            // Logged in, redirect to home
            $location.path('/');
          })
          .catch( function(err) {
            vm.errors.other = err.message;
          });
      }

      function loginOauth(provider) {
        $window.location.href = '/auth/' + provider;
      }
    }

}).call(this);

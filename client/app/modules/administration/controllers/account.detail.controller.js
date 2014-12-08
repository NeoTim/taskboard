;(function(){
  'use strict';
  angular
    .module('administration')
    .controller('AccountDetailController', AccountDetailController);

  /* @inject */
  function AccountDetailController(ResolvedAccount, $scope, User, Auth, $state, logger) {
    var vm = this;

    vm.account = ResolvedAccount;
    vm.updateUser = updateUser;

    //////////////////////

    function updateUser(){

      vm.account.save()
        .then( function ( data ){

          $state.go('admin.account-detail', {id: vm.account._id});

        });

    }
  }

}).call(this);
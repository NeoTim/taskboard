;(function(){
'use strict';

  // Contacts controller
  angular
    .module('contact')
    .controller('ContactsDetailController', ContactsDetailController);

  /* @inject */
  function ContactsDetailController(resolvedDetail, $scope, $stateParams, $state, Contacts, logger) {

    var vm;

    vm          = this;
    vm.remove   = remove;
    vm.update   = update;
    vm.contact = resolvedDetail;

    //////////////////////

    // Remove existing Contact
    function remove(contact) {

      vm.contact.remove()
        .then( function(){
          $state.go('contacts');
        });

    }



    // Update existing Contact
    function update() {

      vm.contact.save()
        .then( function ( data ){
          $state.go('contacts-detail', {contactId: vm.contact._id});
        })
        .catch( function (error){
          $scope.error = error.data.message;

        });
    }
  }
}).call(this);

;(function(){
'use strict';

  // Contacts controller
  angular
    .module('contact')
    .controller('ContactsController', ContactsController);

  /* @inject */
  function ContactsController(resolvedContacts, $scope, $stateParams, $state, Contacts, logger, socket) {

    // $state.reload()
    var vm = this;
    vm.contacts = resolvedContacts;

    console.log(resolvedContacts);
    socket.syncUpdates('contacts', vm.contacts);
    //////////////////////

    $scope.filter = '';


    function isActive(state) {
      // console.log(state === $state.params.contactId)
      return $state.includes('contacts', {contactsId: state});
    }

    // show Contacts
    function showArticle(contact){
        if(article._id === vm.shown._id){
          $state.go('contacts');
          vm.showDetail = false;
          vm.shown = {};
        } else {
          $state.go('contacts.detail', {contactsId: contacts._id});
          vm.shown = article;
          // vm.showDetail = true;
        }
    }

    $scope.checkItem = function(obj, arr, key){
      var i=0;
      angular.forEach(arr, function(item) {
        if(item[key].indexOf( obj[key] ) == 0){
          var j = item[key].replace(obj[key], '').trim();
          if(j){
            i = Math.max(i, parseInt(j)+1);
          }else{
            i = 1;
          }
        }
      });
      return obj[key] + (i ? ' '+i : '');
    };

    /*
        Event emitted from child states.
     */
    $scope.$on('child:closed', function ( event ){
      vm.shown = {};
      vm.showDetail = false;
    });
    $scope.$on('child:opened', function ( event ){
      vm.shown = {};
      vm.showDetail = true;
    });
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('contacts');
    });
  }
}).call(this);
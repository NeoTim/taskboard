;(function(){
'use strict';

  // Contacts controller
  angular
    .module('contact')
    .controller('GroupsController', GroupsController);

  /* @inject */
  function GroupsController(resolvedGroups, $scope, $stateParams, $state, Contacts, logger, socket) {


    var vm = this;
    vm.groups = resolvedGroups;
    console.log($stateParams.groupId);
    vm.editItem = editItem;

    socket.syncUpdates('groups', vm.groups);
    //////////////////////

    $scope.filter = '';


    function isActive(state) {
      // console.log(state === $state.params.contactId)
      return $state.includes('contacts', {contactsId: state});
    }

    // show Contacts

    $scope.selectGroup = function(item){
      angular.forEach($scope.groups, function(item) {
        item.selected = false;
      });
      $scope.group = item;
      $scope.group.selected = true;
      $scope.filter = item.name;
    };
    function editItem(item){
      if(item && item.selected){
        item.editing = true;
      }
    };
    $scope.createGroup = function(){
      var group = {name: 'New Group'};
      group.name = $scope.checkItem(group, $scope.groups, 'name');
      $scope.groups.push(group);
    };
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
      socket.unsyncUpdates('groups');
    });
  }
}).call(this);
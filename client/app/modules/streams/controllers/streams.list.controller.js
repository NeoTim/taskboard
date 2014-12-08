;(function(){
'use strict';

  // Streams controller
  angular
    .module('streams')
    .controller('StreamsListController', StreamsListController);

  /* @inject */
  function StreamsListController(resolvedStream, $scope, $stateParams, $state, Streams, logger, socket) {


    var vm = this;
    vm.streams = resolvedStream;
    vm.isActive = isActive;
    vm.editItem = editItem;
    vm.createStream = createStream;
    vm.checkItem = checkItem;
    vm.selectItem = selectItem;


    socket.syncUpdates('streams', vm.streams);
    //////////////////////


    function isActive(state) {
      // console.log(state === $state.params.contactId)
      return $state.includes('streams', {contactsId: state});
    }

    // show Contacts

    function selectItem(item){
      angular.forEach(vm.streams, function(item) {
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
    function createStream(){
      var group = {name: 'New Group'};
      group.name = $scope.checkItem(group, vm.streams, 'name');
      vm.streams.push(group);
    };
    function checkItem (obj, arr, key){
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
      socket.unsyncUpdates('streams');
    });
  }
}).call(this);
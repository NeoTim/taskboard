;(function(){
'use strict';

  // Notes controller
  angular
    .module('notes')
    .controller('NotesController', NotesController);

  /* @inject */
  function NotesController(resolvedList, $scope, $stateParams, $state, Notes, logger, socket) {


    var vm = this;
    vm.notes = resolvedList;
    vm.isActive = isActive;
    vm.shown = {};
    vm.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];
    socket.syncUpdates('notes', vm.notes);
    //////////////////////


    function isActive(state) {
      // console.log(state === $state.params.noteId)
      return $state.includes('notes', {notesId: state});
    }

    // show Notes
    function showArticle(note){
        if(article._id === vm.shown._id){
          $state.go('notes');
          vm.showDetail = false;
          vm.shown = {};
        } else {
          $state.go('notes.detail', {notesId: notes._id});
          vm.shown = article;
          // vm.showDetail = true;
        }
    }
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
      socket.unsyncUpdates('notes');
    });
  }
}).call(this);
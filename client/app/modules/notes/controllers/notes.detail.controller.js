;(function(){
'use strict';

  // Notes controller
  angular
    .module('notes')
    .controller('NotesDetailController', NotesDetailController);

  /* @inject */
  function NotesDetailController(resolvedDetail, $scope, $stateParams, $state, Notes, logger) {

    var vm;

    vm          = this;
    vm.remove   = remove;
    vm.update   = update;
    vm.note = resolvedDetail;

    //////////////////////

    // Remove existing Note
    function remove(note) {

      vm.note.remove()
        .then( function(){
          $state.go('notes');
        });

    }

    // Update existing Note
    function update() {

      vm.note.save()
        .then( function ( data ){
          $state.go('notes-detail', {noteId: vm.note._id});
        })
        .catch( function (error){
          $scope.error = error.data.message;

        });
    }
  }
}).call(this);

;(function(){
'use strict';

  // Notes controller
  angular
    .module('notes')
    .controller('NotesCreateController', NotesCreateController);

  /* @inject */
  function NotesCreateController($scope, $state, Notes, logger) {

    var vm;

    vm        = this;
    vm.create = create;

    $scope.$emit('child:opened');

    //////////////////////

    // Create new Note
    function create() {
      Notes.post( vm.note )
        .then( function (response){
          // Redirect after save
          $state.go('notes', {noteId: response._id});

        })
        .catch( function (error){
          $scope.error = error.message;
        });
        this.name = '';
      // Clear form fields
    }


  }
}).call(this);
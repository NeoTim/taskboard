app.controller('NotesCtrl', ['$scope', '$http','Notes', function($scope, $http, Notes) {

  // Notes
  //   .all()
  //   .then(function (resp){
  //     $scope.notes = resp.data;

  //     $scope.note = $scope.notes[0];
  //     $scope.notes[0].selected = true
  //   })


  $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];
  $scope.app.settings.aside.right.fold = true;
  $scope.app.settings.aside.right.hide = true;
  $scope.createNote = function(){
    var note = {
      content: 'New note',
      color: $scope.colors[Math.floor((Math.random()*3))],
      date: Date.now()
    };
    Notes.create(note).then(function (resp){
      console.log(resp.data);
      $scope.notes.push(resp.data);
      $scope.selectNote(resp.data);
    })
  }

  $scope.update = function(note){
    Notes.update(note._id, note)
      .then(function (resp){

      })
  }

  $scope.deleteNote = function(note){
    Notes
      .destroy( note._id )
      .then(function (resp){
        $scope.notes.splice($scope.notes.indexOf(note), 1);
        if(note.selected){
          $scope.note = $scope.notes[0];
          $scope.notes.length && ($scope.notes[0].selected = true);
        }
      })
  }

  $scope.selectNote = function(note){
    angular.forEach($scope.notes, function(note) {
      note.selected = false;
    });
    $scope.note = note;
    $scope.note.selected = true;
  }

}]);
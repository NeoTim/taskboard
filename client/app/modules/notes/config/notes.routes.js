;(function(){
'use strict';

  //Setting up route
  angular
    .module('notes')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('app.notes', {
        url: '/notes',
        views:{
          "@":{
            templateUrl: 'app/modules/notes/views/notes.html',
            controller: 'NotesController as vm',
            resolve: {
              resolvedList: resolvedList,
                deps: ['uiLoad',
                  function( uiLoad ){
                    return uiLoad.load( ['vendor/libs/moment.min.js'] );
                }]
            }
          }
        }
      })
      .state('app.notes-create', {
        url: '/notes/create',
        templateUrl: 'app/modules/notes/views/notes.create.view.html',
        controller: 'NotesCreateController as vm'
      })
      .state('app.notes-detail', {
        url: '/note/:noteId',
        templateUrl: 'app/modules/notes/views/notes.detail.view.html',
        controller: 'NotesDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      })
      .state('app.notes-edit', {
        url: '/note/:noteId/edit',
        templateUrl: 'app/modules/notes/views/notes.edit.view.html',
        controller: 'NotesDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });

    ////////////////

    /**
     * [resolvedDetail description]
     * @return {[type]}    [description]
     */
    function resolvedDetail($stateParams, Notes){
      return Notes.one($stateParams.noteId).get()
        .then( function ( response ){
          return response;
        });
    }

    /**
     * [resolvedList description]
     * @return {[type]}     [description]
     */
    function resolvedList(Notes){
      return Notes.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
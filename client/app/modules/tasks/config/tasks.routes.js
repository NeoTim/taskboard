;(function(){
'use strict';

  //Setting up route
  angular
    .module('tasks')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('app.tasks', {
        url: '/tasks',
        views:{
          "@":{
            templateUrl: 'app/modules/tasks/views/tasks.view.html',
            controller: 'TasksController as vm',
            resolve: {
              resolvedList: resolvedList
            }
          }
        }
      })
      .state('tasks-create', {
        url: '/tasks/create',
        templateUrl: 'app/modules/tasks/views/tasks.create.view.html',
        controller: 'TasksCreateController as vm'
      })
      .state('tasks-detail', {
        url: '/task/:taskId',
        templateUrl: 'app/modules/tasks/views/tasks.detail.view.html',
        controller: 'TasksDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      })
      .state('tasks-edit', {
        url: '/task/:taskId/edit',
        templateUrl: 'app/modules/tasks/views/tasks.edit.view.html',
        controller: 'TasksDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });

    ////////////////

    /**
     * [resolvedDetail description]
     * @return {[type]}    [description]
     */
    function resolvedDetail($stateParams, Tasks){
      return Tasks.one($stateParams.taskId).get()
        .then( function ( response ){
          return response;
        });
    }

    /**
     * [resolvedList description]
     * @return {[type]}     [description]
     */
    function resolvedList(Tasks){
      return Tasks.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
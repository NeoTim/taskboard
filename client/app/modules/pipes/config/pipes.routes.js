;(function(){
'use strict';

  //Setting up route
  angular
    .module('pipes')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('pipes', {
        url: '/pipes',
        templateUrl: 'app/modules/pipes/views/pipes.view.html',
        controller: 'PipesController as vm',
        resolve: {
          resolvedList: resolvedList
        }
      })
      .state('pipes-create', {
        url: '/pipes/create',
        templateUrl: 'app/modules/pipes/views/pipes.create.view.html',
        controller: 'PipesCreateController as vm'
      })
      .state('pipes-detail', {
        url: '/pipe/:pipeId',
        templateUrl: 'app/modules/pipes/views/pipes.detail.view.html',
        controller: 'PipesDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      })
      .state('pipes-edit', {
        url: '/pipe/:pipeId/edit',
        templateUrl: 'app/modules/pipes/views/pipes.edit.view.html',
        controller: 'PipesDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });

    ////////////////

    /**
     * [resolvedDetail description]
     * @return {[type]}    [description]
     */
    function resolvedDetail($stateParams, Pipes){
      return Pipes.one($stateParams.pipeId).get()
        .then( function ( response ){
          return response;
        });
    }

    /**
     * [resolvedList description]
     * @return {[type]}     [description]
     */
    function resolvedList(Pipes){
      return Pipes.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
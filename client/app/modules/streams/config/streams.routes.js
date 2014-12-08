;(function(){
'use strict';

  //Setting up route
  angular
    .module('streams')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('app.streams', {
        url: '/streams',
        resolve: {
          resolvedStream: resolvedStream
        },
          views:{
            "@":{

              templateUrl: 'app/modules/streams/views/streams.view.html',
              controller: 'StreamsController as vm',
            },
            'list@app.streams':{
              templateUrl: 'app/modules/streams/views/streams.list.view.html',
              controller: 'StreamsListController as vm',

            }
          }
      })
      .state('app.streams-create', {
        url: '/streams/create',
        views:{
          "@":{
            templateUrl: 'app/modules/streams/views/streams.create.view.html',
            controller: 'StreamsCreateController as vm'
          }
        }
      })
      .state('app.streams.detail', {
        url: '/streams/:id',
        templateUrl: 'app/modules/streams/views/streams.detail.view.html',
        controller: 'StreamsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
        // views:{
        //   "detail@app.streams":{
        //   }
        // }
      })
      .state('streams-edit', {
        url: '/stream/:streamId/edit',
        templateUrl: 'app/modules/streams/views/streams.edit.view.html',
        controller: 'StreamsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });

    ////////////////

    /**
     * [resolvedDetail description]
     * @return {[type]}    [description]
     */
    function resolvedDetail($stateParams, Streams){
      return Streams.one($stateParams.id).all('pipes').getList()
        .then( function ( response ){
          return response;
        });
    }

    /**
     * [resolvedStream description]
     * @return {[type]}     [description]
     */
    function resolvedStream(Streams){
      return Streams.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
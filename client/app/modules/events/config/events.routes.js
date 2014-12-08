;(function(){
'use strict';

  //Setting up route
  angular
    .module('events')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'app/modules/events/views/events.view.html',
        controller: 'EventsController as vm',
        resolve: {
          resolvedList: resolvedList
        }
      })
      .state('events-create', {
        url: '/events/create',
        templateUrl: 'app/modules/events/views/events.create.view.html',
        controller: 'EventsCreateController as vm'
      })
      .state('events-detail', {
        url: '/event/:eventId',
        templateUrl: 'app/modules/events/views/events.detail.view.html',
        controller: 'EventsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      })
      .state('events-edit', {
        url: '/event/:eventId/edit',
        templateUrl: 'app/modules/events/views/events.edit.view.html',
        controller: 'EventsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });

    ////////////////

    /**
     * [resolvedDetail description]
     * @return {[type]}    [description]
     */
    function resolvedDetail($stateParams, Events){
      return Events.one($stateParams.eventId).get()
        .then( function ( response ){
          return response;
        });
    }

    /**
     * [resolvedList description]
     * @return {[type]}     [description]
     */
    function resolvedList(Events){
      return Events.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
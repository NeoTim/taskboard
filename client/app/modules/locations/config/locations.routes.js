;(function(){
'use strict';

  //Setting up route
  angular
    .module('locations')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('locations', {
        url: '/locations',
        templateUrl: 'app/modules/locations/views/locations.view.html',
        controller: 'LocationsController as vm',
        resolve: {
          resolvedList: resolvedList
        }
      })
      .state('locations-create', {
        url: '/locations/create',
        templateUrl: 'app/modules/locations/views/locations.create.view.html',
        controller: 'LocationsCreateController as vm'
      })
      .state('locations-detail', {
        url: '/location/:locationId',
        templateUrl: 'app/modules/locations/views/locations.detail.view.html',
        controller: 'LocationsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      })
      .state('locations-edit', {
        url: '/location/:locationId/edit',
        templateUrl: 'app/modules/locations/views/locations.edit.view.html',
        controller: 'LocationsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });

    ////////////////

    /**
     * [resolvedDetail description]
     * @return {[type]}    [description]
     */
    function resolvedDetail($stateParams, Locations){
      return Locations.one($stateParams.locationId).get()
        .then( function ( response ){
          return response;
        });
    }

    /**
     * [resolvedList description]
     * @return {[type]}     [description]
     */
    function resolvedList(Locations){
      return Locations.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
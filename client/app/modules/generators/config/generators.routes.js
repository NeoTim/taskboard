;(function(){
'use strict';

  //Setting up route
  angular
    .module('generators')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Generators state routing
    $stateProvider
      .state('generators', {
        url: '/generators',
        templateUrl: 'app/modules/generators/views/generators.view.html',
        controller: 'GeneratorsController as vm',
        resolve: {
          resolvedList: resolvedList
        }
      })

      .state('generators.detail', {
        url: '/:generatorId',
        templateUrl: 'app/modules/generators/views/generators.detail.view.html',
        controller: 'GeneratorsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });


    ////////////////
    function resolvedDetail($stateParams, Generator){
      return Generator.one($stateParams.generatorId).get()
        .then( function ( response ){
          return response;
        });
    }
    function resolvedList(Generator){
      return Generator.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
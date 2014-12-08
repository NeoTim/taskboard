;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxFlex', oxFlex);

  /* @inject */
  function oxFlex() {
    return {
      template: '<div class="ox-flex" ng-transclude></div>',
      restrict: 'EA',
      transclude : true,
      replace:true,
      link: link

    };

    ////////////////////

    function link(scope, element, attrs) {
      // Ox flex directive logic

      // scope.flex='flex-md';
      // if(attrs.flex){ scope.flex = 'flex-' + attrs.flex }




      /**
       * actionOne description
       * @return {[type]} description
       */
      function actionOne (){}

      /**
       * actionTwo description
       * @return {[type]} description
       */
      function actionTwo (){}

    }
  }
}).call(this);

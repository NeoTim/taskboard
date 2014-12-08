;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxColumn', oxColumn);

  /* @inject */
  function oxColumn() {
    return {
      template: '<div class="ox-flexer verticle" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Ox column directive logic

      if(attrs.reverse) element.addClass('reverse')

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

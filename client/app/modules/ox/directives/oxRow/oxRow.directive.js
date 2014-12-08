;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxRow', oxRow);

  /* @inject */
  function oxRow() {
    return {
      template: '<div class="ox-flexer horizontal" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true,
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Ox row directive logic

      if(attrs.reverse) element.addClass('reverse');
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

;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxFlexer', oxFlexer);

  /* @inject */
  function oxFlexer() {
    return {
      template: '<div class="ox-flexer" data-ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true,
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Ox flexer directive logic

      element.addClass('ox-flexer')


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

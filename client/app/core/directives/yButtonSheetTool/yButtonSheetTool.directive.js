;(function(){
  'use strict';

  angular
    .module('core')
    .directive('yButtonSheetTool', yButtonSheetTool);

  /* @inject */
  function yButtonSheetTool() {
    return {
      templateUrl: 'app/core/directives/yButtonSheetTool/yButtonSheetTool.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y button sheet tool directive logic

      scope.title = attrs.title
      scope.icon = attrs.icon
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

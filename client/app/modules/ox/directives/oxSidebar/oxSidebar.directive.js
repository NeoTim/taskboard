;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxSidebar', oxSidebar);

  /* @inject */
  function oxSidebar($rootScope) {
    return {
      templateUrl: 'app/modules/ox/directives/oxSidebar/oxSidebar.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      // replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox sidebar directive logic

      element.addClass('ox-sidebar')

      console.log(scope.app.settings);
      scope.app.settings.aside.left.onTop = attrs.onTop;
      scope.app.settings.aside.left.onBottom = attrs.onBottom;

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

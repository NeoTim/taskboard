;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxDashboardAsideLeft', oxDashboardAsideLeft);

  /* @inject */
  function oxDashboardAsideLeft() {
    return {
      // templateUrl: 'app/modules/ox/directives/oxDashboardAsideLeft/oxDashboardAsideLeft.view.html',
      restrict: 'E',
      scope: true,
      // transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox dashboard aside left directive logic

      element.addClass('ox-dashboard-aside')
      element.addClass('ox-dashboard-aside-left')

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

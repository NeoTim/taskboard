;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxDashboardAsideRight', oxDashboardAsideRight);

  /* @inject */
  function oxDashboardAsideRight() {
    return {
      // templateUrl: 'app/modules/ox/directives/oxDashboardAsideRight/oxDashboardAsideRight.view.html',
      restrict: 'E',
      scope: true,
      // transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox dashboard aside right directive logic
      element.addClass('ox-dashboard-aside')
      element.addClass('ox-dashboard-aside-right')
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

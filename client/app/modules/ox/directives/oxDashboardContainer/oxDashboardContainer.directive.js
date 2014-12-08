;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxDashboardContainer', oxDashboardContainer);

  /* @inject */
  function oxDashboardContainer() {
    return {
      // templateUrl: 'app/modules/ox/directives/oxDashboardContainer/oxDashboardContainer.view.html',
      restrict: 'E',
      scope: true,
      // transclude: true,
      // replace: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox dashboard container directive logic
      element.addClass('ox-dashboard-container')

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

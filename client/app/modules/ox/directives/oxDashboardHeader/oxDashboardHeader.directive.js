;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxDashboardHeader', oxDashboardHeader);

  /* @inject */
  function oxDashboardHeader($rootScope) {
    return {
      templateUrl: 'app/modules/ox/directives/oxDashboardHeader/oxDashboardHeader.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox dashboard header directive logic

      element.addClass('ox-dashboard-header')
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

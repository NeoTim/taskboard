;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxDashboardView', oxDashboardView);

  /* @inject */
  function oxDashboardView() {
    return {
      templateUrl: 'app/modules/ox/directives/oxDashboardView/oxDashboardView.view.html',
      restrict: 'E',
      scope: true,
      // replace:true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox dashboard view directive logic

      element.addClass('ox-dashboard-view')
      element.addClass('flex-md')

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

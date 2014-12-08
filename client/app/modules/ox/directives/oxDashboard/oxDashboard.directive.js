;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxDashboard', oxDashboard);

  /* @inject */
  function oxDashboard() {
    return {
      templateUrl: 'app/modules/ox/directives/oxDashboard/oxDashboard.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      // replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox dashboard directive logic

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

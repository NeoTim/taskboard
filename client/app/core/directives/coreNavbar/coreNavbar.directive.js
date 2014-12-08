;(function(){
  'use strict';

  angular
    .module('core')
    .directive('coreNavbar', coreNavbar);

  /* @inject */
  function coreNavbar() {
    return {
      templateUrl: 'app/modules/core/directives/coreNavbar/coreNavbar.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Core navbar directive logic


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

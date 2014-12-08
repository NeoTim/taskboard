;(function(){
  'use strict';

  angular
    .module('core')
    .directive('coreSidebar', coreSidebar);

  /* @inject */
  function coreSidebar() {
    return {
      templateUrl: 'app/modules/core/directives/coreSidebar/coreSidebar.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Core sidebar directive logic


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

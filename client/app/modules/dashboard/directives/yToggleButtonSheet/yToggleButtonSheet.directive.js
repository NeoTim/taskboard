;(function(){
  'use strict';

  angular
    .module('dashboard')
    .directive('yToggleButtonSheet', yToggleButtonSheet);

  /* @inject */
  function yToggleButtonSheet($rootScope) {
    return {
      // templateUrl: 'app/modules/dashboard/directives/yToggleButtonSheet/yToggleButtonSheet.view.html',
      restrict: 'A',
      scope: true,
      // transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y toggle button sheet directive logic

      element.on('click', function(){
        // angular.element(document.querySelector('body')).addClass('show-overlay');
        $rootScope.$apply(function(){
          $rootScope.showOverlay = true;
        });
      })
      angular.element(document.querySelector('.overlay')).on('click', function(){
        $rootScope.showOverlay = false;
        $rootScope.$apply();
      //   angular.element(document.querySelector('body')).removeClass('show-overlay');
      })
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

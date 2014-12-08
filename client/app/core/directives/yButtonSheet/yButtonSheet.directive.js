;(function(){
  'use strict';

  angular
    .module('core')
    .directive('yButtonSheet', yButtonSheet);

  /* @inject */
  function yButtonSheet($rootScope) {
    return {
      templateUrl: 'app/core/directives/yButtonSheet/yButtonSheet.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y button sheet directive logic

      scope.fadeClass = 'fx-fade-up';
      $rootScope.$watch('showOverlay', function(){


        if($rootScope.showOverlay){
          scope.showSheet = true;
          scope.fadeClass='fx-fade-up'

          // angular.element(document.querySelector('y-button-sheet')).removeClass('fx-fade-up')
          // angular.element(document.querySelector('y-button-sheet')).addClass('fx-fade-down')
        }else{
          scope.fadeClass='fx-fade-down'
          scope.showSheet = false;
          // angular.element(document.querySelector('y-button-sheet')).removeClass('fx-fade-down')
          // angular.element(document.querySelector('y-button-sheet')).addClass('fx-fade-up')
        }
      });

      /**
       * open description
       * @return {[type]} description
       */
      function open (){}

      /**
       * close description
       * @return {[type]} description
       */
      function close (){}


    }
  }
}).call(this);

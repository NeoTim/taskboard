;(function(){
  'use strict';

  angular
    .module('core')
    .directive('uiButterbar', uiButterbar);

  /* @inject */
  function uiButterbar($rootScope,$anchorScroll) {
    return {
      template:'<span class="bar"></span>',
      restrict: 'AC',
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Core butterbar directive logic

      element.addClass('butterbar hide');
      scope.$on('$stateChangeStart', function(event) {
        $anchorScroll();
        element.removeClass('hide').addClass('active');
      });
      scope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState ) {
        event.targetScope.$watch('$viewContentLoaded', function(){
          element.addClass('hide').removeClass('active');
        })
      });

    }
  }
}).call(this);

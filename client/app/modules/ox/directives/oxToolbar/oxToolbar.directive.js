;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxToolbar', oxToolbar);

  /* @inject */
  function oxToolbar($rootScope) {
    return {
      templateUrl: 'app/modules/ox/directives/oxToolbar/oxToolbar.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs, ctrl, transclude) {
      // Ox toolbar directive logic

      element.addClass('ox-toolbar')
      // element.addClass('flex-row')

      $rootScope.toolbar = {
        title: 'slush-y',
        paper: true,
        ink: attrs.ink,
        color: attrs.color,
        fixed: true
      };
      transclude(scope.$parent, function(clone, scope) {
        element.find('section').append(clone);
      });
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

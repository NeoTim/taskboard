;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('sidebarHeader', sidebarHeader);

  /* @inject */
  function sidebarHeader() {
    return {
      templateUrl: 'app/modules/ox/directives/oxSidebar/sidebarHeader/sidebarHeader.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      // replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Sidebar header directive logic

      // scope.useInclude = attrs.include;
      element.addClass('ox-sidebar-header')
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

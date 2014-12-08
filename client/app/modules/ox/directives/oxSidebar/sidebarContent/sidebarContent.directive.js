;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('sidebarContent', sidebarContent);

  /* @inject */
  function sidebarContent() {
    return {
      // template: '<div class="flex-row"><div class="flex-md ox-sidebar-content"></div></div>',
      // transclude:true,
      // replace:true,
      restrict: 'E',
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Sidebar content directive logic

      element.addClass('ox-sidebar-content')
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

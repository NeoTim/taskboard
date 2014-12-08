;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('toolbarLeft', toolbarLeft);

  /* @inject */
  function toolbarLeft() {
    return {
      template: '<div class="toolbar-left" data-ng-transclude></div>',
      restrict: 'E',
      replace:true,
      transclude:true,
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Toolbar left directive logic

      // element.text('this is the toolbarLeft directive');

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

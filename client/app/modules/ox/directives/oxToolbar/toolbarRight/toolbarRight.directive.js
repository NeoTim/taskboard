;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('toolbarRight', toolbarRight);

  /* @inject */
  function toolbarRight() {
    return {
      template: '<div class="toolbar-right" data-ng-transclude></div>',
      restrict: 'E',
      replace:true,
      transclude:true,
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Toolbar right directive logic

      // element.text('this is the toolbarRight directive');

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

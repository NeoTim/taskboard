;(function(){
  'use strict';

  angular
    .module('y-modules')
    .directive('yFlex', yFlex);

  /* @inject */
  function yFlex() {
    return {
      template: '<div class="y-flex f-{{flex}} ng-transclude"></div>',
      restrict: 'EA',
      transclude:true,
      replace:true,
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Y flex directive logic
      if(attrs.row) scope.row=true
      if(attrs.verticle) scope.verticle=true
      scope.flex = attrs.flex
      // element.text('this is the yFlex directive');

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

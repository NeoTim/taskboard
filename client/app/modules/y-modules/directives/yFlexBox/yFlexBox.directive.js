;(function(){
  'use strict';

  angular
    .module('y-modules')
    .directive('yFlexBox', yFlexBox);

  /* @inject */
  function yFlexBox() {
    return {
      templateUrl: 'app/modules/y-modules/directives/yFlexBox/yFlexBox.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y box directive logic

      scope.top = attrs.top
      scope.bottom = attrs.bottom
      scope.center = attrs.center
      scope.gutton = attrs.gutton

      scope.size = attrs.size
      scope.flexSize = attrs.flex

      if(attrs.xsmall) scope.xsmall = true;
      if(attrs.small)  scope.small = true;
      if(attrs.medium) scope.medium = true;
      if(attrs.large)  scope.large = true;
      if(attrs.xlarge) scope.xlarge = true;
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

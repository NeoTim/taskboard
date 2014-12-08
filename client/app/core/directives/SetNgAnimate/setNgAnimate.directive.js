;(function(){
  'use strict';

  angular
    .module('core')
    .directive('setNgAnimate', setNgAnimate);

  /* @inject */
  function setNgAnimate($animate) {
    return {
      link: link
    };

    ////////////////////

    function link($scope, $element, $attrs) {
      // Setnganimate directive logic
      $scope.$watch( function() {
          return $scope.$eval($attrs.setNgAnimate, $scope);
      }, function(valnew, valold){
          $animate.enabled(!!valnew, $element);
      });

    }
  }
}).call(this);

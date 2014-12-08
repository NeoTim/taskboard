;(function(){
  'use strict';

  angular
    .module('y-modules')
    .directive('yCard', yCard);

  /* @inject */
  function yCard() {
    return {
      templateUrl: 'app/modules/y-modules/directives/yCard/yCard.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y card directive logic


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

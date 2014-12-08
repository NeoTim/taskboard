;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxCard', oxCard);

  /* @inject */
  function oxCard() {
    return {
      templateUrl: 'app/modules/ox/directives/oxCard/oxCard.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox card directive logic

      angular.extend(scope, attrs)
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

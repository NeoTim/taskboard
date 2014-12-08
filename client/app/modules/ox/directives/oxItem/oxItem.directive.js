;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxItem', oxItem);

  /* @inject */
  function oxItem() {
    return {
      templateUrl: 'app/modules/ox/directives/oxItem/oxItem.view.html',
      restrict: 'EA',
      scope: true,
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Ox item directive logic

      scope.link = attrs.link;
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

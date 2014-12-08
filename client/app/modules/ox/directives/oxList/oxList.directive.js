;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxList', oxList);

  /* @inject */
  function oxList() {
    return {
      templateUrl: 'app/modules/ox/directives/oxList/oxList.view.html',
      restrict: 'EA',
      scope: true,
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs, ctrl, transclude) {
      // Ox list directive logic


      scope.title = attrs.title;
      scope.link = attrs.link;

      transclude(function (clone) {
        element.append(clone);
      });

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

;(function(){
  'use strict';

  angular
    .module('streams')
    .directive('streamContact', streamContact);

  /* @inject */
  function streamContact() {
    return {
      templateUrl: 'app/modules/streams/directives/streamContact/streamContact.view.html',
      restrict: 'E',
      scope: {
        item:"=item"
      },
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Stream contact directive logic


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

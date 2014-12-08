;(function(){
  'use strict';

  angular
    .module('streams')
    .directive('streamLocation', streamLocation);

  /* @inject */
  function streamLocation() {
    return {
      templateUrl: 'app/modules/streams/directives/streamLocation/streamLocation.view.html',
      restrict: 'E',
      scope: {
        location: '=location'
      },
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Stream location directive logic


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

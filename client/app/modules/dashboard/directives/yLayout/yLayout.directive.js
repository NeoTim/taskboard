;(function(){
  'use strict';

  angular
    .module('dashboard')
    .directive('yLayout', yLayout);

  /* @inject */
  function yLayout() {
    return {
      templateUrl: 'app/modules/dashboard/directives/yLayout/yLayout.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y layout directive logic
      var sides = [6,6];

      scope.$watch('portlets', function (){
        console.log('changed');
      })

      /**
       * update description
       * @return {[type]} description
       */
      function update (){}


    }
  }
}).call(this);

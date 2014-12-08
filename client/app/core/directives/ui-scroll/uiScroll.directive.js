;(function(){
  'use strict';

  angular
    .module('core')
    .directive('uiScroll', uiScroll);

  /* @inject */
  function uiScroll($location,$anchorScroll) {
    return {
      restrict: 'AC',
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Ui scroll directive logic

      element.on('click', function(e) {
        $location.hash(attrs.uiScroll);
        $anchorScroll();
      });

    }
  }
}).call(this);

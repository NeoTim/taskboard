;(function(){
  'use strict';

  angular
    .module('core')
    .directive('uiFocus', uiFocus);

  /* @inject */
  function uiFocus($timeout,$parse) {
    return {
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Ui focus directive logic

      var model = $parse(attrs.uiFocus);
      scope.$watch(model, function(value) {
        if(value === true) {
          $timeout(function() {
            element[0].focus();
          });
        }
      });
      element.bind('blur', function() {
         scope.$apply(model.assign(scope, false));
      });

    }
  }
}).call(this);

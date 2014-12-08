;(function(){
  'use strict';

  angular
    .module('core')
    .directive('uiModule', uiModule);

  /* @inject */
  function uiModule(MODULE_CONFIG,uiLoad,$comile) {
    return {
      restrict: 'A',
      compile:compile
    };

    ////////////////////

    function compile(element, attrs) {
      // Ui module directive logic

      var contents = element.contents().clone();
      return function(scope, el, attrs){
        element.contents().remove();
        uiLoad.load(MODULE_CONFIG[attrs.uiModule])
        .then(function(){
          $compile(contents)(scope, function(clonedElement, scope) {
            element.append(clonedElement);
          });
        });
      }

    }
  }
}).call(this);

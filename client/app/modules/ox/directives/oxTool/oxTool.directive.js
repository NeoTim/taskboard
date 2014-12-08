;(function(){
  'use strict';

  angular
    .module('ox')
    .directive('oxTool', oxTool);

  /* @inject */
  function oxTool() {
    return {
      templateUrl: 'app/modules/ox/directives/oxTool/oxTool.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      replace:true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs, ctrl, transclude) {
      // Ox tool directive logic
      if(attrs.faIcon)   scope.icon = 'fa fa-'+attrs.faIcon;
      if(attrs.iconIcon) scope.icon = 'fa-fw icon-'+attrs.iconIcon;

      if(attrs.dropdown) scope.dropdown = true;

      transclude(scope.$parent, function(clone, scope) {
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

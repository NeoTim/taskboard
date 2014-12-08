;(function(){
  'use strict';

  angular
    .module('y-modules')
    .directive('yToolbar', yToolbar);

  /* @inject */
  function yToolbar($state, $rootScope) {
    return {
      templateUrl: 'app/modules/y-modules/directives/yToolbar/y-toolbar.directive.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      replace: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y toolbar directive logic
      // scope.tallHeader = true;
      // grow()
      $rootScope.toolbar = {};
      $rootScope.toolbar.title = 'slush-y';
      $rootScope.toolbar.paper = true;
      $rootScope.toolbar.grow = grow;
      $rootScope.toolbar.shrink = shrink;
      if($state.current.name === 'home'){
        scope.tallHeader = true;
        grow()
      }

      var toolbar = angular.element(element).find('nav')
      // var body = angular.element( document.querySelector('body') );
      scope.$on('y:changed', function (event, next){
        if(next.name === 'home') {
          // grow();
          // scope.tallHeader = true;
        } else {
          // shrink();
          // scope.tallHeader = false;
        }
      });

      /**
       * grow description
       * @return {[type]} description
       */
      function grow (){
        toolbar.addClass('y-tall');
        scope.tallHeader = true;

        toolbar.removeClass('y-medium');
        // toolbar.removeClass('y-short');
      }

      /**
       * shrink description
       * @return {[type]} description
       */
      function shrink (){
        scope.tallHeader = false;
        attrs.class = attrs.class + ' y-short'
        console.log(attrs.class)
        angular.element(toolbar).addClass(attrs.class);
        // toolbar.
        // toolbar.removeClass('y-medium');
        // toolbar.removeClass('y-tall');
      }

      /**
       * toggle description
       * @return {[type]} description
       */
      function toggle (){}


    }
  }
}).call(this);

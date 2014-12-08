;(function(){
  'use strict';

  angular
    .module('dashboard')
    .directive('yPortlet', yPortlet);

  /* @inject */
  function yPortlet() {
    return {
      templateUrl: 'app/modules/dashboard/directives/yPortlet/yPortlet.view.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      // replace: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {

      scope.title = attrs.title;
      scope.arrow = attrs.arrow
      // angular.element(element).addClass('portlet')
      var el = angular.element(element)

      el.find('input').on('mousedown', preventMe)
      el.find('textarea').on('mousedown', preventMe)



      function preventMe(e){
        console.log(e);
        e.preventDefault();
        e.stopPropagation();
        this.focus()
      }

      // el.find('input').on('mousedown', preventMe)
      // el.find('textarea').on('mousedown', preventMe)

      /**
       * create description
       * @return {[type]} description
       */
      function create (){}

      /**
       * destroy description
       * @return {[type]} description
       */
      function destroy (){}

      /**
       * update description
       * @return {[type]} description
       */
      function update (){}

      /**
       * onDrop description
       * @return {[type]} description
       */
      function onDrop (){}

      /**
       * onDrag description
       * @return {[type]} description
       */
      function onDrag (){}




    }
  }
}).call(this);

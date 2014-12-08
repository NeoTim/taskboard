;(function(){
  'use strict';

  angular
    .module('streams')
    .directive('yStream', yStream);

  /* @inject */
  function yStream() {
    return {
      templateUrl: 'app/modules/streams/directives/yStream/yStream.view.html',
      restrict: 'E',
      scope: {
        item: '=item'
      },
      replace:true,
      transclude: true,
      link: link
    };

    ////////////////

    function link(scope, element, attrs) {
      // Y stream directive logic

      scope.title = attrs.title;
      scope.arrow = attrs.arrow

      scope.time = moment(scope.date).fromNow()
      // angular.element(element).addClass('portlet')
      var el = angular.element(element)

      el.find('input').on('mousedown', preventMe)
      el.find('textarea').on('mousedown', preventMe)

      function preventMe(e){
        e.preventDefault();
        e.stopPropagation();
        this.focus()
      }

      scope.save = save;
      //////////////////////////////////

      /**
       * actionOne description
       * @return {[type]} description
       */
      function save (item){
      }

      /**
       * actionTwo description
       * @return {[type]} description
       */
      function actionTwo (){}


    }
  }
}).call(this);

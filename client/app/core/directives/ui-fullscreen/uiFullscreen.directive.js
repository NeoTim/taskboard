;(function(){
  'use strict';

  angular
    .module('core')
    .directive('uiFullscreen', uiFullscreen);

  /* @inject */
  function uiFullscreen(uiLoad,$document,$window) {
    return {
      restrict: 'AC',
      template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
      link: link
    };

    ////////////////////

    function link(scope, element, attrs) {
      // Ui fullscreen directive logic

      element.addClass('hide');
      uiLoad.load('vendor/libs/screenfull.min.js').then(function(){
        // disable on ie11
        if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
          element.removeClass('hide');
        }
        element.on('click', function(){
          var target;
          attrs.target && ( target = $(attrs.target)[0] );
          screenfull.toggle(target);
        });
        $document.on(screenfull.raw.fullscreenchange, function () {
          if(screenfull.isFullscreen){
            element.addClass('active');
          }else{
            element.removeClass('active');
          }
        });
      });

    }
  }
}).call(this);

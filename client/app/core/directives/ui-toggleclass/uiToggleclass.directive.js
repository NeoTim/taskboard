;(function(){
  'use strict';

  angular
    .module('core')
    .directive('uiToggleclass', uiToggleclass);

  /* @inject */
  function uiToggleclass($timeout,$document) {
    return {
      restrict: 'AC',
      link: link
    };

    ////////////////////

    function link(scope, el, attr) {
      el.on('click', function(e) {
        e.preventDefault();
        console.log('test');
        var classes = attr.uiToggleClass.split(','),
            targets = (attr.target && attr.target.split(',')) || Array(el),
            key = 0;
        angular.forEach(classes, function( _class ) {
          var target = targets[(targets.length && key)];
          ( _class.indexOf( '*' ) !== -1 ) && magic(_class, target);
          $( target ).toggleClass(_class);
          key ++;
        });
        $(el).toggleClass('active');

        function magic(_class, target){
          var patt = new RegExp( '\\s' +
              _class.
                replace( /\*/g, '[A-Za-z0-9-_]+' ).
                split( ' ' ).
                join( '\\s|\\s' ) +
              '\\s', 'g' );
          var cn = ' ' + $(target)[0].className + ' ';
          while ( patt.test( cn ) ) {
            cn = cn.replace( patt, ' ' );
          }
          $(target)[0].className = $.trim( cn );
        }
      });

    }
  }
}).call(this);

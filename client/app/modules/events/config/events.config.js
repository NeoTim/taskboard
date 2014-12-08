;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('events')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Events', '/events', 'grey-500');
  }

}).call(this);
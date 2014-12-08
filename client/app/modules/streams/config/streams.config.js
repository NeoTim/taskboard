;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('streams')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Streams', '/streams', 'grey-500');
  }

}).call(this);
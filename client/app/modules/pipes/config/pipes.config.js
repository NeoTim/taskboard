;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('pipes')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Pipes', '/pipes', 'grey-500');
  }

}).call(this);
;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('locations')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Locations', '/locations', 'grey-500');
  }

}).call(this);
;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('notes')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Notes', '/notes', 'grey-500');
  }

}).call(this);
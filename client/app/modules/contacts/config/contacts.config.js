;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('contact')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Contacts', '/contact', 'grey-500');
  }

}).call(this);
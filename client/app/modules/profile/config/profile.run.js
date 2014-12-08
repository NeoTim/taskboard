;(function(){
  'use strict';
  // Configuring the Articles module
  angular
    .module('profile')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Profile', '/profile', 'grey-500');
  }

}).call(this);
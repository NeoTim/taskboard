;(function(){
'use strict';


  // Configuring the Articles module
  angular
    .module('tasks')
    .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('Tasks', '/tasks', 'grey-500');
  }

}).call(this);
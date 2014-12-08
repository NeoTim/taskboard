(function(){


  'use strict';
/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
  var Note = require('./note.model');

  Note.find({}).remove(function() {

    Note.create(
      {
        content: 'AngularJS - HTML enhanced for web apps!',
         color: 'warning',
         date: 1410788931159,
      },
      {
        content: 'Meeting',
         color: 'primary',
         date: 1410788631159,
      },
      {
        content: 'Keep watching',
         color: 'success',
         date: 1410788731159,
      });

  });

})();
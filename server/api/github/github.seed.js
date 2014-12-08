(function(){

  'use strict';
/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
  var Github = require('./github.model');

  Github.find({}).remove(function() {

    Github.create(
      {
        created: '',
        title: '',
        content: '',
      },
      {
        created: '',
        title: '',
        content: '',
      },
      {
        created: '',
        title: '',
        content: '',
      },
      {
        created: '',
        title: '',
        content: '',
      },
      {
        created: '',
        title: '',
        content: '',
      },
      {
        created: '',
        title: '',
        content: '',
      });

  });

})();
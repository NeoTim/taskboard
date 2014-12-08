(function(){
  'use strict';

  var express = require('express');
  var controller = require('./note.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/notes
    router.get('/', controller.index);
    // GET: /api/notes/:id
    router.get('/:id', controller.show);
    // POST: /api/notes
    router.post('/', controller.create);
    // PUT: /api/notes/:id
    router.put('/:id', controller.update);
    // DELETE: /api/notes/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.noteByID);
    app.use('/api/notes', router);

  }

})();
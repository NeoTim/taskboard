(function(){
  'use strict';

  var express = require('express');
  var controller = require('./stream.controller.js');
  var pipes = require('../pipe/pipe.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/streams
    router.get('/', controller.index);
    // GET: /api/streams/:id
    router.get('/:id', controller.show);
    // GET: /api/streams/:id/pipes
    router.get('/:id/pipes', pipes.getByStreamId);
    // POST: /api/streams
    router.post('/', controller.create);
    // PUT: /api/streams/:id
    router.put('/:id', controller.update);
    // DELETE: /api/streams/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.streamByID);
    app.use('/api/streams', router);

  }

})();
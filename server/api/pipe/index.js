(function(){
  'use strict';

  var express = require('express');
  var controller = require('./pipe.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/pipes
    router.get('/', controller.index);
    // GET: /api/pipes/:id
    router.get('/:id', controller.show);
    // POST: /api/pipes
    router.post('/', controller.create);
    // PUT: /api/pipes/:id
    router.put('/:id', controller.update);
    // DELETE: /api/pipes/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.pipeByID);
    app.use('/api/pipes', router);

  }

})();
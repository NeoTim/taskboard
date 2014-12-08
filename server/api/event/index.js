(function(){
  'use strict';

  var express = require('express');
  var controller = require('./event.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/events
    router.get('/', controller.index);
    // GET: /api/events/:id
    router.get('/:id', controller.show);
    // POST: /api/events
    router.post('/', controller.create);
    // PUT: /api/events/:id
    router.put('/:id', controller.update);
    // DELETE: /api/events/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.eventByID);
    app.use('/api/events', router);

  }

})();
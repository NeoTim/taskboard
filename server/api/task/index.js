(function(){
  'use strict';

  var express = require('express');
  var controller = require('./task.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/tasks
    router.get('/', controller.index);
    // GET: /api/tasks/:id
    router.get('/:id', controller.show);
    // POST: /api/tasks
    router.post('/', controller.create);
    // PUT: /api/tasks/:id
    router.put('/:id', controller.update);
    // DELETE: /api/tasks/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.taskByID);
    app.use('/api/tasks', router);

  }

})();
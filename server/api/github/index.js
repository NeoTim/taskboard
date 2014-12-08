(function(){
  'use strict';

  var express = require('express');
  var controller = require('./github.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/githubs
    router.get('/', controller.index);
    // GET: /api/githubs/:id
    router.get('/:id', controller.show);
    // POST: /api/githubs
    router.post('/', controller.create);
    // PUT: /api/githubs/:id
    router.put('/:id', controller.update);
    // DELETE: /api/githubs/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.githubByID);
    app.use('/api/github', router);

  }

})();
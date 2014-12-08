(function(){
  'use strict';

  var express = require('express');
  var controller = require('./group.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/groups
    router.get('/', controller.index);
    // GET: /api/groups/:id
    router.get('/:id', controller.show);
    // POST: /api/groups
    router.post('/', controller.create);
    // PUT: /api/groups/:id
    router.put('/:id', controller.update);
    // DELETE: /api/groups/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.groupByID);
    app.use('/api/groups', router);

  }

})();
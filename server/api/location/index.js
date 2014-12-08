(function(){
  'use strict';

  var express = require('express');
  var controller = require('./location.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/locations
    router.get('/', controller.index);
    // GET: /api/locations/:id
    router.get('/:id', controller.show);
    // POST: /api/locations
    router.post('/', controller.create);
    // PUT: /api/locations/:id
    router.put('/:id', controller.update);
    // DELETE: /api/locations/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.locationByID);
    app.use('/api/locations', router);

  }

})();
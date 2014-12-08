(function(){
  'use strict';

  var express = require('express');
  var controller = require('./podio.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // GET: /api/podios
    router.get('/', controller.index);
    // GET: /api/podios/:id
    router.get('/:id', controller.show);
    // POST: /api/podios
    router.post('/', controller.create);
    // PUT: /api/podios/:id
    router.put('/:id', controller.update);
    // DELETE: /api/podios/:id
    router.delete('/:id', controller.destroy);
    router.param('id', controller.podioByID);
    app.use('/api/podios', router);

  }

})();
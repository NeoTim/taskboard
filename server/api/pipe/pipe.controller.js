(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /pipes              ->  index
   * POST    /pipes              ->  create
   * GET     /pipes/:id          ->  show
   * PUT     /pipes/:id          ->  update
   * DELETE  /pipes/:id          ->  destroy
   */


    var _ = require('lodash');
    var Pipe = require('./pipe.model');

    // Get list of pipes
    exports.index = function(req, res) {
      Pipe.find().populate('event').populate('location').exec(function (err, pipes) {
        if(err) { return handleError(res, err); }
        return res.json(200, pipes);
      });
    };

    exports.getByStreamId = function(req, res) {
      Pipe.find({stream:req.params.id}).populate('event').populate('location').exec(function (err, pipes) {
        if(err) { return handleError(res, err); }
        return res.json(200, pipes);
      });
    };

    // Get a single pipe
    exports.show = function(req, res) {
      Pipe.findById(req.params.id, function (err, pipe) {
        if(err) { return handleError(res, err); }
        if(!pipe) { return res.send(404); }
        return res.json(pipe);
      });
    };

    // Creates a new pipe in the DB.
    exports.create = function(req, res) {
      Pipe.create(req.body, function(err, pipe) {
        if(err) { return handleError(res, err); }
        return res.json(201, pipe);
      });
    };

    // Updates an existing pipe in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Pipe.findById(req.params.id, function (err, pipe) {
        if (err) { return handleError(res, err); }
        if(!pipe) { return res.send(404); }
        var updated = _.merge(pipe, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, pipe);
        });
      });
    };

    // Deletes a pipe from the DB.
    exports.destroy = function(req, res) {
      Pipe.findById(req.params.id, function (err, pipe) {
        if(err) { return handleError(res, err); }
        if(!pipe) { return res.send(404); }
        pipe.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Pipe middleware
     */
    exports.pipeByID = function(req, res, next, id) {
      Pipe.findById(id).populate('user', 'displayName').exec(function(err, pipe) {
        if (err) return next(err);
        if (!pipe) return next(new Error('Failed to load Pipe ' + id));
        req.pipe = pipe;
        next();
      });
    };

    /**
     * Pipe authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.pipe.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
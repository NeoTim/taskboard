(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /streams              ->  index
   * POST    /streams              ->  create
   * GET     /streams/:id          ->  show
   * PUT     /streams/:id          ->  update
   * DELETE  /streams/:id          ->  destroy
   */


    var _ = require('lodash');
    var Stream = require('./stream.model');

    // Get list of streams
    exports.index = function(req, res) {
      Stream.find(function (err, streams) {
        if(err) { return handleError(res, err); }
        return res.json(200, streams);
      });
    };

    // Get a single stream
    exports.show = function(req, res) {
      Stream.findById(req.params.id, function (err, stream) {
        if(err) { return handleError(res, err); }
        if(!stream) { return res.send(404); }
        return res.json(stream);
      });
    };

    // Creates a new stream in the DB.
    exports.create = function(req, res) {
      Stream.create(req.body, function(err, stream) {
        if(err) { return handleError(res, err); }
        return res.json(201, stream);
      });
    };

    // Updates an existing stream in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Stream.findById(req.params.id, function (err, stream) {
        if (err) { return handleError(res, err); }
        if(!stream) { return res.send(404); }
        var updated = _.merge(stream, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, stream);
        });
      });
    };

    // Deletes a stream from the DB.
    exports.destroy = function(req, res) {
      Stream.findById(req.params.id, function (err, stream) {
        if(err) { return handleError(res, err); }
        if(!stream) { return res.send(404); }
        stream.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Stream middleware
     */
    exports.streamByID = function(req, res, next, id) {
      Stream.findById(id).populate('user', 'displayName').exec(function(err, stream) {
        if (err) return next(err);
        if (!stream) return next(new Error('Failed to load Stream ' + id));
        req.stream = stream;
        next();
      });
    };

    /**
     * Stream authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.stream.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
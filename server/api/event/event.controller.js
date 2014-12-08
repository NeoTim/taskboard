(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /events              ->  index
   * POST    /events              ->  create
   * GET     /events/:id          ->  show
   * PUT     /events/:id          ->  update
   * DELETE  /events/:id          ->  destroy
   */


    var _ = require('lodash');
    var Event = require('./event.model');

    // Get list of events
    exports.index = function(req, res) {
      Event.find(function (err, events) {
        if(err) { return handleError(res, err); }
        return res.json(200, events);
      });
    };

    // Get a single event
    exports.show = function(req, res) {
      Event.findById(req.params.id, function (err, event) {
        if(err) { return handleError(res, err); }
        if(!event) { return res.send(404); }
        return res.json(event);
      });
    };

    // Creates a new event in the DB.
    exports.create = function(req, res) {
      Event.create(req.body, function(err, event) {
        if(err) { return handleError(res, err); }
        return res.json(201, event);
      });
    };

    // Updates an existing event in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Event.findById(req.params.id, function (err, event) {
        if (err) { return handleError(res, err); }
        if(!event) { return res.send(404); }
        var updated = _.merge(event, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, event);
        });
      });
    };

    // Deletes a event from the DB.
    exports.destroy = function(req, res) {
      Event.findById(req.params.id, function (err, event) {
        if(err) { return handleError(res, err); }
        if(!event) { return res.send(404); }
        event.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Event middleware
     */
    exports.eventByID = function(req, res, next, id) {
      Event.findById(id).populate('user', 'displayName').exec(function(err, event) {
        if (err) return next(err);
        if (!event) return next(new Error('Failed to load Event ' + id));
        req.event = event;
        next();
      });
    };

    /**
     * Event authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.event.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
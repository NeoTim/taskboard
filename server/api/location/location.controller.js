(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /locations              ->  index
   * POST    /locations              ->  create
   * GET     /locations/:id          ->  show
   * PUT     /locations/:id          ->  update
   * DELETE  /locations/:id          ->  destroy
   */


    var _ = require('lodash');
    var Location = require('./location.model');

    // Get list of locations
    exports.index = function(req, res) {
      Location.find(function (err, locations) {
        if(err) { return handleError(res, err); }
        return res.json(200, locations);
      });
    };

    // Get a single location
    exports.show = function(req, res) {
      Location.findById(req.params.id, function (err, location) {
        if(err) { return handleError(res, err); }
        if(!location) { return res.send(404); }
        return res.json(location);
      });
    };

    // Creates a new location in the DB.
    exports.create = function(req, res) {
      Location.create(req.body, function(err, location) {
        if(err) { return handleError(res, err); }
        return res.json(201, location);
      });
    };

    // Updates an existing location in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Location.findById(req.params.id, function (err, location) {
        if (err) { return handleError(res, err); }
        if(!location) { return res.send(404); }
        var updated = _.merge(location, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, location);
        });
      });
    };

    // Deletes a location from the DB.
    exports.destroy = function(req, res) {
      Location.findById(req.params.id, function (err, location) {
        if(err) { return handleError(res, err); }
        if(!location) { return res.send(404); }
        location.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Location middleware
     */
    exports.locationByID = function(req, res, next, id) {
      Location.findById(id).populate('user', 'displayName').exec(function(err, location) {
        if (err) return next(err);
        if (!location) return next(new Error('Failed to load Location ' + id));
        req.location = location;
        next();
      });
    };

    /**
     * Location authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.location.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
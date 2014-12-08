(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /groups              ->  index
   * POST    /groups              ->  create
   * GET     /groups/:id          ->  show
   * PUT     /groups/:id          ->  update
   * DELETE  /groups/:id          ->  destroy
   */


    var _ = require('lodash');
    var Group = require('./group.model');

    // Get list of groups
    exports.index = function(req, res) {
      Group.find(function (err, groups) {
        if(err) { return handleError(res, err); }
        return res.json(200, groups);
      });
    };

    // Get a single group
    exports.show = function(req, res) {
      Group.findById(req.params.id, function (err, group) {
        if(err) { return handleError(res, err); }
        if(!group) { return res.send(404); }
        return res.json(group);
      });
    };

    // Creates a new group in the DB.
    exports.create = function(req, res) {
      Group.create(req.body, function(err, group) {
        if(err) { return handleError(res, err); }
        return res.json(201, group);
      });
    };

    // Updates an existing group in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Group.findById(req.params.id, function (err, group) {
        if (err) { return handleError(res, err); }
        if(!group) { return res.send(404); }
        var updated = _.merge(group, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, group);
        });
      });
    };

    // Deletes a group from the DB.
    exports.destroy = function(req, res) {
      Group.findById(req.params.id, function (err, group) {
        if(err) { return handleError(res, err); }
        if(!group) { return res.send(404); }
        group.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Group middleware
     */
    exports.groupByID = function(req, res, next, id) {
      Group.findById(id).populate('user', 'displayName').exec(function(err, group) {
        if (err) return next(err);
        if (!group) return next(new Error('Failed to load Group ' + id));
        req.group = group;
        next();
      });
    };

    /**
     * Group authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.group.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
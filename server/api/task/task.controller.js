(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /tasks              ->  index
   * POST    /tasks              ->  create
   * GET     /tasks/:id          ->  show
   * PUT     /tasks/:id          ->  update
   * DELETE  /tasks/:id          ->  destroy
   */


    var _ = require('lodash');
    var Task = require('./task.model');

    // Get list of tasks
    exports.index = function(req, res) {
      Task.find(function (err, tasks) {
        if(err) { return handleError(res, err); }
        return res.json(200, tasks);
      });
    };

    // Get a single task
    exports.show = function(req, res) {
      Task.findById(req.params.id, function (err, task) {
        if(err) { return handleError(res, err); }
        if(!task) { return res.send(404); }
        return res.json(task);
      });
    };

    // Creates a new task in the DB.
    exports.create = function(req, res) {
      Task.create(req.body, function(err, task) {
        if(err) { return handleError(res, err); }
        return res.json(201, task);
      });
    };

    // Updates an existing task in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Task.findById(req.params.id, function (err, task) {
        if (err) { return handleError(res, err); }
        if(!task) { return res.send(404); }
        var updated = _.merge(task, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, task);
        });
      });
    };

    // Deletes a task from the DB.
    exports.destroy = function(req, res) {
      Task.findById(req.params.id, function (err, task) {
        if(err) { return handleError(res, err); }
        if(!task) { return res.send(404); }
        task.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Task middleware
     */
    exports.taskByID = function(req, res, next, id) {
      Task.findById(id).populate('user', 'displayName').exec(function(err, task) {
        if (err) return next(err);
        if (!task) return next(new Error('Failed to load Task ' + id));
        req.task = task;
        next();
      });
    };

    /**
     * Task authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.task.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
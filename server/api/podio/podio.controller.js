(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /podios              ->  index
   * POST    /podios              ->  create
   * GET     /podios/:id          ->  show
   * PUT     /podios/:id          ->  update
   * DELETE  /podios/:id          ->  destroy
   */


    var _ = require('lodash');
    var Podio = require('./podio.model');
    var fs = require('fs');
    // var xlsxj = require("xlsx-to-json");
    // xlsxj({
    //   input: "/Users/joelcox/dev/projects/taskboard/server/api/podio/podio-contacts-input.xlsx",
    //   output: "/Users/joelcox/dev/projects/taskboard/server/api/podio/podio-contacts-output.json"
    // }, function(err, result) {
    //   if(err) {
    //     console.error(err);
    //   }else {
    //     console.log(result);
    //   }
    // });
    // Get list of podios
    exports.index = function(req, res) {
      var data = require('./podio-contacts-output.json');
      _.forEach(data, function (item, key){
        var contact = {
          created:      item["Created on"],
          name:         item["Contact - name"],
          title:        item["Contact - title"],
          organization: item["Contact - organization"],
          phone:        item["Contact - phone"],
          phone2:       item["Phone Number"],
          email:        item["Contact - mail"],
          url:          item["Contact - url"],
          address1:     item["Contact - address"],
          address2:     item["Address"],
          zip:          item["Contact - zip"],
          city:         item["Contact - city"],
          state:        item["Contact - state"],
          country:      item["Contact - country"],
          info:         item["Party Info"],
          notes:        item["Notes"],
          card: {
            number:       item["Card"],
            number2:      item["Card #"],
            expires:      item["Expires"],
            security:     item["Security Code"],
            address:      item["Card Address"]
          }
        }
        Podio.create(contact, function (err, res){
          console.log(res);
        })
      });
      res.send('Stored');
    };

    // Get a single podio
    exports.show = function(req, res) {
      Podio.findById(req.params.id, function (err, podio) {
        if(err) { return handleError(res, err); }
        if(!podio) { return res.send(404); }
        return res.json(podio);
      });
    };

    // Creates a new podio in the DB.
    exports.create = function(req, res) {
      Podio.create(req.body, function(err, podio) {
        if(err) { return handleError(res, err); }
        return res.json(201, podio);
      });
    };

    // Updates an existing podio in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Podio.findById(req.params.id, function (err, podio) {
        if (err) { return handleError(res, err); }
        if(!podio) { return res.send(404); }
        var updated = _.merge(podio, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, podio);
        });
      });
    };

    // Deletes a podio from the DB.
    exports.destroy = function(req, res) {
      Podio.findById(req.params.id, function (err, podio) {
        if(err) { return handleError(res, err); }
        if(!podio) { return res.send(404); }
        podio.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Podio middleware
     */
    exports.podioByID = function(req, res, next, id) {
      Podio.findById(id).populate('user', 'displayName').exec(function(err, podio) {
        if (err) return next(err);
        if (!podio) return next(new Error('Failed to load Podio ' + id));
        req.podio = podio;
        next();
      });
    };

    /**
     * Podio authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.podio.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
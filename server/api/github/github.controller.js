(function(){
  'use strict';

  /**
   * Using Rails-like standard naming convention for endpoints.
   * GET     /githubs              ->  index
   * POST    /githubs              ->  create
   * GET     /githubs/:id          ->  show
   * PUT     /githubs/:id          ->  update
   * DELETE  /githubs/:id          ->  destroy
   */


    var _ = require('lodash');
    var Github = require('./github.model');
    var github = require('octonode')
    var Promise  = require('bluebird');
    var moment = require('moment');
    require('date-utils');
    Promise.promisifyAll(github);
    // Get list of githubs
    exports.index = function(req, res) {

      var client = github.client({
          username: "joelcoxokc",
          password: "091190github",
      });

      var ghrepo = client.repo('joelcoxokc/slush-y');
      ghrepo.commits(function(err, data){
          var month = 0;
        var result = _.map(data, function (item, index){

          var date = new Date(item.commit.author.date);
          var m = date.toFormat('YY/MM/DD H:M:SS')
          // console.log(date.getFullYear());
          return [gd(date.getFullYear(),date.getMonth(), date.getDay()), date.getMonth()+1]
          // return [date.getMonth()+1, m]
        })

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }


        res.send(result)
      })
      // var info = Promise.promisify(ghrepo.info, 'slush-y', ghrepo);
      // info()
      // .then(function(repo) {
      //     return 'Remote repository created ' + repo[0].full_name;
      // });
      // var createRepo = Promise.promisify(ghme.repo, ghme);
      // var repo = ghme.repo('slush-y')
      // return createRepo({
      //     'name': answers.appNameSlug,
      //     'description': answers.appDescription,
      // })


      // Github.find(function (err, githubs) {
      //   if(err) { return handleError(res, err); }
      //   return res.json(200, githubs);
      // });
    };

    // Get a single github
    exports.show = function(req, res) {
      Github.findById(req.params.id, function (err, github) {
        if(err) { return handleError(res, err); }
        if(!github) { return res.send(404); }
        return res.json(github);
      });
    };

    // Creates a new github in the DB.
    exports.create = function(req, res) {
      Github.create(req.body, function(err, github) {
        if(err) { return handleError(res, err); }
        return res.json(201, github);
      });
    };

    // Updates an existing github in the DB.
    exports.update = function(req, res) {
      if(req.body._id) { delete req.body._id; }
      Github.findById(req.params.id, function (err, github) {
        if (err) { return handleError(res, err); }
        if(!github) { return res.send(404); }
        var updated = _.merge(github, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          return res.json(200, github);
        });
      });
    };

    // Deletes a github from the DB.
    exports.destroy = function(req, res) {
      Github.findById(req.params.id, function (err, github) {
        if(err) { return handleError(res, err); }
        if(!github) { return res.send(404); }
        github.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
      });
    };

    /**
     * Github middleware
     */
    exports.githubByID = function(req, res, next, id) {
      Github.findById(id).populate('user', 'displayName').exec(function(err, github) {
        if (err) return next(err);
        if (!github) return next(new Error('Failed to load Github ' + id));
        req.github = github;
        next();
      });
    };

    /**
     * Github authorization middleware
     */
    exports.hasAuthorization = function(req, res, next) {
      if (req.github.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
      }
      next();
    };
    function handleError(res, err) {
      return res.send(500, err);
    }

})();
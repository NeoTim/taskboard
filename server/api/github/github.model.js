(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var GithubSchema = new Schema({
    
    created: {
      type: Date,
      default: Date.now
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    // user: {
    //   type: Schema.ObjectId,
    //   ref: 'User'
    // }
  });

  module.exports = mongoose.model('Github', GithubSchema);
})();
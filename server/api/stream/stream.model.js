(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var StreamSchema = new Schema({
    created: {
      type: Date,
      default: Date.now
    },
    updated: {
      type: Date,
      default: Date.now
    },
    title: {
      type: String,
      default: '',
      trim: true,
    },
    text: {
      type: String,
      default: '',
      trim: true
    },
    color:{
      type:String,
      default: ''
    },
    followers: {
      type: [Schema.ObjectId],
      ref: 'User'
    },
    members: {
      type: [Schema.ObjectId],
      ref: 'User'
    },
    content:{},
    position:{},
    size:{},
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  });

  module.exports = mongoose.model('Stream', StreamSchema);
})();
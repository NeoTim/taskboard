(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var ContactSchema = new Schema({

    group: {
      type: Schema.ObjectId,
      ref: 'Group'
    },
     first: {
      type: String,
      default: ''
    },
    last: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    mobile: {
      type: String,
      default: ''
    },
    home: {
      type: String,
      default: ''
    },
    work: {
      type: String,
      default: ''
    },
    notes: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    createdBy: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  });

  module.exports = mongoose.model('Contact', ContactSchema);
})();
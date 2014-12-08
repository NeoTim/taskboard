(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var TaskSchema = new Schema({
    created: {
      type: Date,
      default: Date.now
    },
    title: {
      type: String,
      default: '',
      trim: true,
      required: 'Title cannot be blank'
    },
    content: {
      type: String,
      default: '',
      trim: true
    },
    color: {
      type: String,
      default: '',
      trim: true
    },
    position:{},
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  });

  module.exports = mongoose.model('Task', TaskSchema);
})();
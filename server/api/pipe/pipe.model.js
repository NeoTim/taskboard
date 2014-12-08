(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var PipeSchema = new Schema({
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
    text: {
      type: String,
      default: '',
      trim: true
    },
    type: {
      type: String,
      default: '',
      trim: true
    },
    location: {
      type: Schema.ObjectId,
      ref:'Location'
    },
    event: {
      type: Schema.ObjectId,
      ref:'Event'
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
    },
    stream: {
      type: Schema.ObjectId,
      ref: 'Stream'
    }
  });

  module.exports = mongoose.model('Pipe', PipeSchema);
})();
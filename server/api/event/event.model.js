(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var EventSchema = new Schema({
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
    start:{
      type:Date,
      default:Date.now
    },
    end:{
      type:Date,
      default:Date.now
    },
    template:{
      type:String,
      default:''
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
    locations: {
      type: [Schema.ObjectId],
      ref: 'Location'
    },
    stream: {
      type: Schema.ObjectId,
      ref: 'Stream'
    }
  });

  module.exports = mongoose.model('Event', EventSchema);
})();
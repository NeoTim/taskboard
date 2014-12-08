(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var TipSchema = new Schema({
    created:{
      type:Date,
      default:Date.now
    },
    title:{
      type:String,
      default: ''
    },
    text:{
      type:String,
      default:''
    }
  })

  var LocationSchema = new Schema({
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
    phone: {
      type: String,
      default: '',
      trim: true
    },
    location: {
      type: String,
      default: '',
      trim: true
    },
    rating: {
      type: String
    },
    direction: {
      type: String,
      default: '',
      trim: true
    },
    tips: [TipSchema],
    website:{
      type: String,
      default:'',
      trim:true
    },
    event: {
      type: Schema.ObjectId,
      ref: 'Event'
    },
    stream:{
      type: Schema.ObjectId,
      ref: 'Stream'
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  });

  module.exports = mongoose.model('Location', LocationSchema);
})();
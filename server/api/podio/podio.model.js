(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var PodioSchema = new Schema({

    created: {
      type: Date,
      default: Date.now
    },
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    organization: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    phone2: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    address2: {
      type: String,
      default: ''
    },
    zip: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    card: {
      expires:String,
      security:String,
      address:String,
    },
    info:{
      type:String,
      default:''
    },
    notes:{
      type:String,
      default:''
    }

    // user: {
    //   type: Schema.ObjectId,
    //   ref: 'User'
    // }
  });

  module.exports = mongoose.model('Podio', PodioSchema);


})();


(function(){

  'use strict';

  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var NoteSchema = new Schema({

    content: {
      type: String,
      default: ''
    },
     color: {
      type: String,
      default: ''
    },
     date: {
      type: Date,
      default: Date.now
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  });

  module.exports = mongoose.model('Note', NoteSchema);
})();
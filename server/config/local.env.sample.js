'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'yosoa-secret',

  FACEBOOK_ID:      'app-id',
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        '505970791803-594u2rkesjsoe7l246d1gmhhqkjbeu81.apps.googleusercontent.com',
  GOOGLE_SECRET:    'Gl7KNMgEBJy-jH1EenEXoDI0',
  callbackURL:      'http://localhost:9000/oauth2callback'

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var inbox  = require('inbox')
exports.setup = function (User, config) {
  passport.use(new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {

      console.log('PROFILE', profile)
      User.findOne({
        'google.id': profile.id
      }, function(err, user) {
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.username,
            provider: 'google',
            google: profile._json,
            access_token: accessToken,
            refresh_token: refreshToken
          });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    }
  ));
};

// // config/passport.js

// // load all the things we need
// var LocalStrategy    = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var TwitterStrategy  = require('passport-twitter').Strategy;
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// // load up the user model
// var User       = require('../../api/user/user.model');

// // load the auth variables
// var configAuth = {
//     GOOGLE_ID:        '505970791803-594u2rkesjsoe7l246d1gmhhqkjbeu81.apps.googleusercontent.com',
//     GOOGLE_SECRET:    'Gl7KNMgEBJy-jH1EenEXoDI0',
//     callbackURL:       'http://localhost:9000/oauth2callback'
// }

// module.exports = function(passport) {

//     // used to serialize the user for the session
//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });

//     // used to deserialize the user
//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//             done(err, user);
//         });
//     });

//     // code for login (use('local-login', new LocalStategy))
//     // code for signup (use('local-signup', new LocalStategy))
//     // code for facebook (use('facebook', new FacebookStrategy))
//     // code for twitter (use('twitter', new TwitterStrategy))

//     // =========================================================================
//     // GOOGLE ==================================================================
//     // =========================================================================
//     passport.use(new GoogleStrategy({

//         clientID        : configAuth.GOOGLE_ID,
//         clientSecret    : configAuth.GOOGLE_SECRET,
//         callbackURL     : configAuth.callbackURL,

//     },
//     function(token, refreshToken, profile, done) {

//         // make the code asynchronous
//         // User.findOne won't fire until we have all our data back from Google
//         process.nextTick(function() {

//             // try to find the user based on their google id
//             User.findOne({ 'google.id' : profile.id }, function(err, user) {
//                 if (err)
//                     return done(err);

//                 if (user) {

//                     // if a user is found, log them in
//                     return done(null, user);
//                 } else {
//                     // if the user isnt in our database, create a new user
//                     var newUser          = new User();

//                     // set all of the relevant information
//                     newUser.google.id    = profile.id;
//                     newUser.google.token = token;
//                     newUser.google.name  = profile.displayName;
//                     newUser.google.email = profile.emails[0].value; // pull the first email

//                     // save the user
//                     newUser.save(function(err) {
//                         if (err)
//                             throw err;
//                         return done(null, newUser);
//                     });
//                 }
//             });
//         });

//     }));

// };


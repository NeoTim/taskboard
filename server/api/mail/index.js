var nodemailer = require('nodemailer');

// // create reusable transporter object using SMTP transport
// var transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'joelcox@hisimagination.com',
//         pass: '091190dev'
//     }
// });

// // NB! No need to recreate the transporter object. You can use
// // the same transporter object for all e-mails

// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: 'Joel Cox ✔ <joelcox@hisimagination.com>', // sender address
//     to: 'joelcox@hisimagination.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world ✔', // plaintext body
//     html: '<b>Hello world ✔</b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Message sent: ' + info.response);
//     }
// });

(function(){
  'use strict';

  var express = require('express');
  var controller = require('./mail.controller.js');

  module.exports = function(app){

    // Instantiate a new express router
    // bind the router to the app at the end.
    var router = express.Router();


    // // GET: /api/notes
    router.get('/', controller.index);
    // GET: /api/notes/:id
    // router.get('/:id', controller.show);
    // // POST: /api/notes
    // router.post('/', controller.create);
    // // PUT: /api/notes/:id
    // router.put('/:id', controller.update);
    // // DELETE: /api/notes/:id
    // router.delete('/:id', controller.destroy);
    // router.param('id', controller.noteByID);
    app.use('/api/mail', router);

  }

})();
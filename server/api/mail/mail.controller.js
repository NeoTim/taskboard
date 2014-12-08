(function(){
  'use strict';
  var nodemailer = require('nodemailer');
  var Gmail = require('gmail')
  var gm = new Gmail.GMailInterface();
  var moment = require('moment');
  var _ = require('lodash');
  var inbox  = require('inbox')

  // var transporter = nodemailer.createTransport({
  //     service: 'Gmail',
  //     auth: {
  //         user: 'joelcox@hisimagination.com',
  //         pass: '091190dev'
  //     }
  // });
  // gm.connect('joelcox@hisimagination.com','091190dev',function (err, data){
  //   console.log(err);
  // })
  //
// googleauth --scope=https://www.googleapis.com/auth/gmail.readonly --client_id="" --client_secret=""
// googleauth --scope=https://www.googleapis.com/auth/gmail.readonly --client_id="505970791803-ib42r1jhgjdd77gnhbacvsf6sm5c5cjv.apps.googleusercontent.com" --client_secret="wEGiL_gyBCotQdkltCmmqKzE"


// https://oauth2-login-demo.appspot.com/oauthcallback#access_token=1/1TgrxuoNv7J2bofGOmvgeq0pnNs1-03WEdmDy0_1_mE&token_type=Bearer&expires_in=3600
// https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=1/1TgrxuoNv7J2bofGOmvgeq0pnNs1-03WEdmDy0_1_mE
  exports.index = function(req, res){

    client.connect()
    client.on('connect', function(){
      console.log('Successfully connected to gmail');
      // client.listMailboxes(callback);
      res.send()
    })
    // client.close();

    // function callback(err, mailboxes){
    //   if(err) return console.error(err)
    //   for (var i = 0; i < mailboxes.length; i++) {
    //     if(mailboxes[i].hasChildren){
    //       mailboxes[i].listChildren(function (err,children){
    //         console.log(children);
    //         res.send(children)
    //       })
    //     }
    //   };
    // }
    // var fetcher = gm.get({since: moment().subtract(1, 'days').format()})
    // var msgs = [];
    // fetcher.on('fetched', function(message){
    //   // if(messages.label)
    //   if(message.labels[0] !== 'GIT' && message.labels[0] !== 'Promo' && message.labels[0] !==  'Linked IN' && message.labels[0] !== "\\\\Sent"){
    //     console.log(message.labels);
    //     // messages.body = veil.parse(messages.eml)
    //     msgs.push(message)
    //   }
    // })
    // fetcher.on('end', function(){
    //   res.send(msgs)
    // })
  }

})()
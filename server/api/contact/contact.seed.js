(function(){

  'use strict';
/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
 var contacts = [{
      group : "Partner",
      first: "Bertina",
      last: "Robert",
      company: "",
      mobile: "121 364 135",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a3.jpg"
    },
    {
      group : "Coworkers",
      first: "Alexandra",
      last: "Galton",
      company: "Google Inc.",
      mobile: "102 394 821",
      home: "(021) 9876 9485",
      work: "(021) 2130 3049",
      notes: "",
      avatar: "img/a0.jpg"
    },
    {
       group : "Family",
      first: "Angela",
      last: "Oscar",
      company: "Max Inc.",
      mobile: "100 364 135",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a1.jpg"
    },
    {
      group : "Friends",
      first: "Annabelle",
      last: "",
      company: "",
      mobile: "324 123 123",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a2.jpg"
    },
    {
      group : "Friends",
      first: "Brenda",
      last: "Lanny",
      company: "",
      mobile: "765 434 565",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a4.jpg"
    },
    {
      group : "Group",
      first: "Britney",
      last: "Patricia",
      company: "",
      mobile: "432 364 455",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a5.jpg"
    },
    {
      group : "Friends",
      first: "Blanche",
      last: "Julian",
      company: "",
      mobile: "433 364 234",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a6.jpg"
    },
    {
      group : "Group",
      first: "Deborah",
      last: "Darryl",
      company: "",
      mobile: "332 431 223",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a7.jpg"
    },
    {
      group : "Group",
      first: "Elizabeth",
      last: "",
      company: "",
      mobile: "543 453 890",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a8.jpg"
    },
    {
      group : "Partners",
      first: "Emily",
      last: "Jolyon",
      company: "",
      mobile: "656 565 789",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a9.jpg"
    },
    {
      group : "Partners",
      first: "Gertrude",
      last: "",
      company: "",
      mobile: "434 987 898",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a8.jpg"
    },
    {
      group : "Family",
      first: "Gwynne",
      last: "Rufus",
      company: "",
      mobile: "098 888 897",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a8.jpg"
    },
    {
      group : "Coworkers",
      first: "Octavia",
      last: "Swaine",
      company: "",
      mobile: "854 656 879",
      home: "(021) 1234 8755",
      work: "(021) 9000 9877",
      notes: "",
      avatar: "img/a8.jpg"
    }]

  var Contact = require('./contact.model');
  var Group = require('../group/group.model');
  var _ = require('lodash');
    Group.find({}).remove(function() {



    });

  Contact.find({}).remove(function() {
    Group.find({}).remove(function() {

      Group.create(
        {
          name: 'Coworkers',
        },
        {
          name: 'Family',
        },
        {
          name: 'Friends',
        },
        {
          name: 'Partners',
        },
        {
          name: 'Group',
        }, function(){
// ==========
          Group.find(function (err, result){

            // ===========
            _.forEach(result, function (item, index){

              // ===========
              var con = _.where(contacts, {group:item.name});
              _.forEach(con, function(newContact){
                newContact.group = item._id;
                Contact.create(newContact, function (err, res){})
              })
              // ===========

            })
            // =============

          })
// ==========

        });
    })
  });

})();
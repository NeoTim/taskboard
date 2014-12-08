;(function(){
'use strict';

  //Setting up route
  angular
    .module('contact')
    .config( Configuration );

  /* @inject */
  function Configuration($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('app.contacts', {
        url:'/contacts',
        resolve:{
          resolvedGroups: resolvedGroups
        },
        views:{
          "@":{
            templateUrl: 'app/modules/contacts/views/contacts.html',
          },
          "groups@app.contacts":{
            templateUrl: 'app/modules/contacts/views/groups.list.view.html',
            controller: 'GroupsController as vm',
          },

        }

      })
      .state('app.contacts.list', {
        url:'/:groupId',
        templateUrl: 'app/modules/contacts/views/contacts.list.view.html',
        controller: 'ContactsController as vm',
        resolve: {
          resolvedContacts: resolvedContacts,
        },
      })
      .state('app.contacts.list.detail', {
        url:'/:contactId',
        views:{
          "detail@app.contacts":{
            templateUrl: 'app/modules/contacts/views/contacts.detail.view.html',
            controller: 'ContactsDetailController as vm',
            resolve: {
              resolvedDetail: resolvedDetail,
            }
          }
        }
      })


      .state('app.contacts-create', {
        url: '/contacts/create',
        templateUrl: 'app/modules/contacts/views/contacts.create.view.html',
        controller: 'ContactsCreateController as vm'
      })
      .state('app.contacts-detail', {
        url: '/contact/:contactId',
        templateUrl: 'app/modules/contacts/views/contacts.detail.view.html',
        controller: 'ContactsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      })
      .state('app.contacts-edit', {
        url: '/contact/:contactId/edit',
        templateUrl: 'app/modules/contacts/views/contacts.edit.view.html',
        controller: 'ContactsDetailController as vm',
        resolve: {
          resolvedDetail: resolvedDetail
        }
      });

    ////////////////

    /**
     * [resolvedDetail description]
     * @return {[type]}    [description]
     */
    function resolvedDetail($stateParams, Contacts){
      return Contacts.one($stateParams.contactId).get()
        .then( function ( response ){
          return response;
        });
    }

    /**
     * [resolvedList description]
     * @return {[type]}     [description]
     */
    function resolvedContacts($stateParams, Contacts){
      return Contacts.getList()
        .then( function ( response ){
          console.log();
          if($stateParams.groupId === '1'){
            return response;
          }
          return _.filter(response, function(item){return item.group._id === $stateParams.groupId})
          // return response;
        });
    }

    /**
     * [resolvedGroups description]
     * @return {[type]}     [description]
     */
    function resolvedGroups(Groups){
      return Groups.getList()
        .then( function ( response ){
          return response;
        });
    }
  }
}).call(this);
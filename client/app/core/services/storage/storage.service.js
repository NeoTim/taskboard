;(function(){
'use strict';
  angular
    .module('core')
    .service('$storage', Storage);

  function Storage(){
    this._storage = {};

    this.setObject = function( key, value ){
      if(key === undefined || key === 'undefined') {return;}
      return localStorage.setItem( key, JSON.stringify( value ) );
    };
    this.set = function( key, value ){
      if(key === undefined || key === 'undefined') {return;}
      return localStorage.setItem( key, value);
    };
    this.getObject = function(key){
      var value = localStorage.getItem(key);
      return JSON.parse(value);
    };
    this.get = function(key){
      var value = localStorage.getItem(key);
      return value;
    };
    this.setUser = function(data){
      var token = data.token;
      var user = data.user;
      this.set('user_token', token);
      return this.setObject('user', user);
    };
    /**
     * store                [Stringify an object before placing it in localStorage]
     * @param  {String} key [The key identifier when stored in localStorage]
     * @param  {Object} obj [Object to be storaged in localStorage at key]
     * @return {Object}     [Return a version of what was just stored];
     */
    this.save = function( key, val ){
        var obj = JSON.stringify(val);
        this._storage[key] = val;

        localStorage.setItem(key, obj);
        return this._storage[key];

    }

    /**
     * all                     [Find obj at key in local storage, and return the strigified verison]
     * @param {String}  key    [Key Identifier to find the item in localStorage]
     * @return {Object} Return [Object from localStorage]
     */
    this.all = function( key ){
      // if(this._storage[key]){
      //   return this._storage[key];
      // }
      var obj = localStorage.getItem(key);
      return JSON.parse(obj);
    }
    this.clear = function(key){
      if(key){
        delete localStorage[key];
        return ;
      }
      localStorage.clear();
      return;
    };

  }

}).call(this);
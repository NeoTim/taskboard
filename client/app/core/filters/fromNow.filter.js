;(function(){
  'use strict';

  angular
    .module('core')
    .filter('fromNow', fromNow);

  /* @inject */
  function fromNow() {
    return function(date) {
      return moment(date).fromNow();
    }
  }
}).call(this);
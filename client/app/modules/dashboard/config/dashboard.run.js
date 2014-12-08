;(function(){
  'use strict';
  // Configuring the Articles module
  angular
    .module('dashboard')
    .run( Run );

  /* @inject */
  function Run($storage) {

    // Set top bar menu items
    // Menus.set('Dashboard', '/dashboard', 'grey-500');
    if(!$storage.all('y-portlets') || !$storage.all('y-portlets').length){
      $storage.save('y-portlets', items() )
    }
    function items (){
      return [
        { size: { x: 2, y: 1 }, position: [0, 0], title: "ONE" },
        { size: { x: 2, y: 2 }, position: [0, 2], title: "TWO" },
        { size: { x: 1, y: 1 }, position: [0, 4], title: "THREE" },
        { size: { x: 1, y: 1 }, position: [0, 5], title: "FOUR" },
        { size: { x: 2, y: 1 }, position: [1, 0], title: "FIVE" },
        { size: { x: 1, y: 1 }, position: [1, 4], title: "SIX" },
        { size: { x: 1, y: 2 }, position: [1, 5], title: "SEVEN" },
        { size: { x: 1, y: 1 }, position: [2, 0], title: "EIGHT" },
        { size: { x: 2, y: 1 }, position: [2, 1], title: "NINE" },
        { size: { x: 1, y: 1 }, position: [2, 3], title: "TEN" },
        { size: { x: 1, y: 1 }, position: [2, 4], title: "ELEVEN" }
      ];
      // return [
      //   { sizeX: 2, sizeY: 1, row: 0, col: 0, title: 'ONE',    bg:'dark' },
      //   { sizeX: 2, sizeY: 1, row: 0, col: 2, title: 'TWO',    bg:'black' },
      //   { sizeX: 2, sizeY: 1, row: 0, col: 4, title: 'THREE',  bg:'primary' },
      //   { sizeX: 2, sizeY: 1, row: 1, col: 0, title: 'FOUR',   bg:'info' },
      //   { sizeX: 2, sizeY: 1, row: 1, col: 2, title: 'FIVE',   bg:'success' },
      //   { sizeX: 2, sizeY: 1, row: 1, col: 4, title: 'SIX',    bg:'warning' },
      //   { sizeX: 2, sizeY: 1, row: 2, col: 0, title: 'SEVEN',  bg:'danger' },
      //   { sizeX: 2, sizeY: 1, row: 2, col: 2, title: 'EIGHT',  bg:'dark' },
      //   { sizeX: 2, sizeY: 1, row: 2, col: 4, title: 'NINE',   bg:'black' },
      // ];
    }
  }


}).call(this);
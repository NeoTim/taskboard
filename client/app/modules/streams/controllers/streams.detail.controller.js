;(function(){
'use strict';

  // Streams controller
  angular
    .module('streams')
    .controller('StreamsDetailController', StreamsDetailController);

  /* @inject */
  function StreamsDetailController(resolvedStream, resolvedDetail, $scope, $stateParams, $state, Streams, logger) {

    var vm;

    vm          = this;
    vm.remove   = remove;
    vm.update   = update;
    vm.pipes   = resolvedDetail;
    vm.createLocation = createLocation;
    vm.createPipe = createPipe;
    vm.createContact = createContact;
    vm.stream = _.find(resolvedStream, {_id: $stateParams.id});
    console.log(vm.stream);

    //////////////////////


    function createLocation(){
      vm.pipes.push({type:'location'})
      console.log(vm.pipes);
    }
    function createPipe(){
      vm.pipes.push({type:'pipe'})
      console.log(vm.pipes);
    }
    function createContact(){
      vm.pipes.push({type:'contact'})
      console.log(vm.pipes);
    }

    // Remove existing Stream
    function remove(stream) {

      vm.stream.remove()
        .then( function(){
          $state.go('streams');
        });

    }

    // Update existing Stream
    function update() {

      vm.stream.save()
        .then( function ( data ){
          $state.go('streams-detail', {streamId: vm.stream._id});
        })
        .catch( function (error){
          $scope.error = error.data.message;

        });
    }
    vm.config = {};
    vm.config.map = {
          sizeX: 'item.size.x',
          sizeY: 'item.size.y',
          row: 'item.position[0]',
          col: 'item.position[1]'
      };
    // vm.$watch('items', function(){
    //   console.log(arguments);
    // })

    vm.config.options = {
      minRows: 2,               /* the minimum height of the grid, in rows */
      maxRows: 100,
      columns: 24,               /* the width of the grid, in columns */
      colWidth: 'auto',         /* can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns' */
      rowHeight: 'match',       /* can be an integer or 'match'.  Match uses the colWidth, giving you square widgets. */
      margins: [10, 10],        /* the pixel distance between each widget */
      defaultSizeX: 10,          /* the default width of a gridster item, if not specifed */
      defaultSizeY: 8,          /* the default height of a gridster item, if not specified */
      mobileBreakPoint: 600,    /* if the screen is not wider that this, remove the grid layout and stack the items */
      resizable: {
         enabled: true,
         // start: onResizeStart,
         // resize: onResized,
         // stop: onResizeStop,
      },
      draggable: {
         enabled: true,         /* whether dragging items is supported */
         handle: '.my-class',   /* optional selector for resize handle */
         // start: onDragStart,
         // drag: onDragged,
         // stop: onDragStop
      }
    };
  }
}).call(this);

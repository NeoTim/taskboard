;(function(){
  'use strict';
  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

  /* @inject */
  function DashboardController($scope, $storage) {
      var vm = this;
      $scope.customItems = $storage.all('y-portlets');

      vm.createBlock = createBlock;
      vm.deleteBlock = deleteBlock;
      vm.widgets = {
        contact: {
          template:'templates/widgets.restaurants.html',
          name:'contact'
        }
      }

      ///////////////////////

      function createBlock(){

      }

      function deleteBlock(index){
        $scope.customItems.splice(index, 1)
      }

      /**
       * startDrag  [optional callback fired when drag is started]
       */
      function onDragStart(event, uiWidget, $element){}

      /**
       * onDrag     [optional callback fired when item is moved]
       */
      function onDragged(event, uiWidget, $element){}

      /**
       * stopDrag   [optional callback fired when item is finished dragging]
       */
      function onDragStop(event, uiWidget, $element){
        console.log($scope.customItems);
        $storage.save('y-portlets', $scope.customItems);
      }

      /**
       * onResizeStart  [optional callback fired when resize is started]
       */
      function onResizeStart(event, uiWidget, $element){}

      /**
       * onResized      [optional callback fired when item is resized]
       */
      function onResized(event, uiWidget, $element){}

      /**
       * onResizeStop   [optional callback fired when item is finished resizing]
       */
      function onResizeStop(event, uiWidget, $element){
        $storage.save('y-portlets', $scope.items);
      }
      $scope.customItemMap = {
          sizeX: 'item.size.x',
          sizeY: 'item.size.y',
          row: 'item.position[0]',
          col: 'item.position[1]'
      };
      // $scope.$watch('items', function(){
      //   console.log(arguments);
      // })

      $scope.gridsterOpts = {
        minRows: 2,               /* the minimum height of the grid, in rows */
        maxRows: 100,
        columns: 6,               /* the width of the grid, in columns */
        colWidth: 'auto',         /* can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns' */
        rowHeight: 'match',       /* can be an integer or 'match'.  Match uses the colWidth, giving you square widgets. */
        margins: [10, 10],        /* the pixel distance between each widget */
        defaultSizeX: 2,          /* the default width of a gridster item, if not specifed */
        defaultSizeY: 1,          /* the default height of a gridster item, if not specified */
        mobileBreakPoint: 600,    /* if the screen is not wider that this, remove the grid layout and stack the items */
        resizable: {
           enabled: true,
           start: onResizeStart,
           resize: onResized,
           stop: onResizeStop,
        },
        draggable: {
           enabled: true,         /* whether dragging items is supported */
           handle: '.my-class',   /* optional selector for resize handle */
           start: onDragStart,
           drag: onDragged,
           stop: onDragStop
        }
      };
  }
}).call(this);



/*



      $scope.customItems = [
        { size: { x: 2, y: 1 }, position: [0, 0], title: '0,0',   index: 0,  bg:'bg-dark'},
        { size: { x: 2, y: 2 }, position: [0, 2], title: '0,2',   index: 1,  bg:'bg-black'},
        { size: { x: 1, y: 1 }, position: [0, 4], title: '0,4',   index: 2,  bg:'bg-primary'},
        { size: { x: 1, y: 1 }, position: [0, 5], title: 'Title', index: 3,  bg:'bg-info'},
        { size: { x: 2, y: 1 }, position: [1, 0], title: 'Title', index: 4,  bg:'bg-success'},
        { size: { x: 1, y: 1 }, position: [1, 4], title: 'Title', index: 5,  bg:'bg-warning'},
        { size: { x: 1, y: 2 }, position: [1, 5], title: 'Title', index: 6,  bg:'bg-danger'},
        { size: { x: 1, y: 1 }, position: [2, 0], title: 'Title', index: 7,  bg:'bg-dark'},
        { size: { x: 2, y: 1 }, position: [2, 1], title: 'Title', index: 8,  bg:'bg-black'},
        { size: { x: 1, y: 1 }, position: [2, 3], title: 'Title', index: 9,  bg:'bg-primary'},
        { size: { x: 1, y: 1 }, position: [2, 4], title: 'Title', index: 10, bg:'bg-info'},
      ];

 */
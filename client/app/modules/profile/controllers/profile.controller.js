;(function(){
  'use strict';

  angular
    .module('profile')
    .controller('ProfileController', ProfileController);

  /* @inject */
  function ProfileController($scope, $rootScope) {
    // Profile controller logic



    $scope.app.settings.visible = false
    $scope.val = 0;
    var vm = this;
    vm.create = create;
    vm.update = update;
    vm.destroy = destroy;

    $scope.customItems = [
        { size: { x: 12, y: 1 }, position: [1, 1], title: "ONE", content: '' },
        // { size: { x: 1, y: 1 }, position: [2, 0], title: "TWO" },
        // { size: { x: 1, y: 1 }, position: [3, 0], title: "THREE" },
        // { size: { x: 1, y: 1 }, position: [4, 0], title: "FOUR" },
        // { size: { x: 1, y: 1 }, position: [5, 0], title: "FIVE" },
        // { size: { x: 1, y: 1 }, position: [6, 0], title: "SIX" },
        // { size: { x: 1, y: 1 }, position: [7, 0], title: "SEVEN" },
        // { size: { x: 1, y: 1 }, position: [8, 0], title: "EIGHT" },
        // { size: { x: 1, y: 1 }, position: [9, 0], title: "NINE" },
        // { size: { x: 1, y: 1 }, position: [10,0], title: "TEN" },
        // { size: { x: 1, y: 1 }, position: [11,0], title: "ELEVEN" }
      ];
    $scope.customItemMap = {
          sizeX: 'item.size.x',
          sizeY: 'item.size.y',
          row: 'item.position[0]',
          col: 'item.position[1]'
      };
      // $scope.$watch('items', function(){
      //   console.log(arguments);
      // })

      $scope.disable=function(){
        console.log('disable');
        $scope.gridsterOpts.resizable.enable = false;
        $scope.gridsterOpts.draggable.enable = false;
      }
      $scope.enable=function(){
        console.log('enable');
        $scope.gridsterOpts.resizable.enable = true;
        $scope.gridsterOpts.draggable.enable = true;
      }

      $scope.gridsterOpts = {
        minRows: 5,               /* the minimum height of the grid, in rows */
        maxRows: 100,
        columns: 24,               /* the width of the grid, in columns */
        colWidth: 'auto',         /* can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns' */
        rowHeight: 'match',       /* can be an integer or 'match'.  Match uses the colWidth, giving you square widgets. */
        margins: [10, 10],        /* the pixel distance between each widget */
        defaultSizeX: 12,          /* the default width of a gridster item, if not specifed */
        defaultSizeY: 1,          /* the default height of a gridster item, if not specified */
        mobileBreakPoint: 600,    /* if the screen is not wider that this, remove the grid layout and stack the items */
        widget_base_dimensions: [100,40],
        resizable: {
           enabled: true,
           // start: onResizeStart,
           // resize: onResized,
           // stop: onResizeStop,
        },
        draggable: {
           enabled: true,         /* whether dragging items is supported */
           // handle: '.y-portlet-handle',   /* optional selector for resize handle */
           // start: onDragStart,
           // drag: onDragged,
           // stop: onDragStop
        }
      };



    //////////////////

    /*
     * create      description
     * @return {[type]} description
     *
     */
    function create() {
        console.log('test');
        // $scope.customItems.unshift({ size: { x: 12, y: 1 }, position: [1, 1], title: "ONE" })
        $scope.customItems.unshift({})
    }

    /*
     * update      description
     * @return {[type]} description
     *
     */
    function update() {}

    /*
     * destroy      description
     * @return {[type]} description
     *
     */
    function destroy() {}


  }
}).call(this);

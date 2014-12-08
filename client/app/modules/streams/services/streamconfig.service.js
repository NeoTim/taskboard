;(function(){
  'use strict';

  angular
    .module('streams')
    .service('Streamconfig', Streamconfig);

  /* @inject */
  function Streamconfig(Streams) {

    var _this = this;
    this.map = configMap();
    this.options = {
      minRows: 2,               /* the minimum height of the grid, in rows */
      maxRows: 100,
      columns: 12,               /* the width of the grid, in columns */
      colWidth: 'auto',         /* can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns' */
      rowHeight: 'match',       /* can be an integer or 'match'.  Match uses the colWidth, giving you square widgets. */
      margins: [12, 12],        /* the pixel distance between each widget */
      defaultSizeX: 3,          /* the default width of a gridster item, if not specifed */
      defaultSizeY: 1,          /* the default height of a gridster item, if not specified */
      mobileBreakPoint: 600,    /* if the screen is not wider that this, remove the grid layout and stack the items */
      widget_base_dimensions: [100,40],
      resizable: {},
      dragable: {}
    };
    // Streamconfig service logic
    ////////////////////////////////

    this.initialize = function(enableResize, enableDrag){
      if(enableDrag)    _this.config.resizable.drag;
      if(enableResize)  _this.config.draggable = resizable;
      return _this.config;
    }

    /**
     * create description
     * @return {[type]} description
     */
    this.create = function(){}

    /**
     * update description
     * @return {[type]} description
     */
    this.update = function(){}

    /**
     * destroy description
     * @return {[type]} description
     */
    this.destroy = function(){}


    this.resizable = function(){
      return {
        enable: true,
        resize: this.onResized,
        start:  this.onResizeStart,
        stop:   this.onResizeEnd
      }
    }
    this.draggable = function(){
      return {
        enable: true,
        start:   this.onDragStart,
        stop:    this.onDragStop,
        drag:    this.onDragged
      }
    }

    this.onResizeStart = function(){};
    this.onResizeStop  = function(){};
    this.onResized     = function(){};

    this.onDragStart   = function(){};
    this.onDragStop    = function(){};
    this.onDragged     = function(){};

    function configMap(){
      return {
        sizeX: 'item.size.x',
        sizeY: 'item.size.y',
        row: 'item.position[0]',
        col: 'item.position[1]'
      };
    }
  }
}).call(this);
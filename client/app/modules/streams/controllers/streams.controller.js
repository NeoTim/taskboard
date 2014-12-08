;(function(){
  'use strict';

  angular
    .module('streams')
    .controller('StreamsController', StreamsController);

  /* @inject */
  function StreamsController(Streamconfig, $scope, $rootScope, socket, Locations, Pipes) {

    var vm        = this;
      vm.config   = Streamconfig


    $scope.app.settings.visible = false

    vm.create = createStream;
    vm.update = update;
    vm.destroy = destroy;
    // vm.streams = resolvedStream;
        // { size: { x: 12, y: 1 }, position: [1, 1], title: "ONE", content: '' },
    vm.config.initialize();



    //////////////////

    /*
     * create      description
     * @return {[type]} description
     *
     */
    function createStream() {

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

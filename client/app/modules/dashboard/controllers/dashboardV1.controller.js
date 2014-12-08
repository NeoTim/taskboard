;(function(){
  'use strict';

  angular
    .module('dashboard')
    .controller('Dashboardv1Controller', Dashboardv1Controller);

  /* @inject */
  function Dashboardv1Controller($scope,$rootScope) {
    // Dashboardv1 controller logic

    $scope.val = 0;
    $scope.app.settings.asideRightFold = false;
    $scope.app.settings.asideRightHide = false;
    $scope.create = create;
    $scope.update = update;
    $scope.destroy = destroy;

    $scope.$on('$destroy', function(){
      $scope.app.settings.asideRightHide = true;
    })

    //////////////////

    /*
     * create      description
     * @return {[type]} description
     *
     */
    function create() {}

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

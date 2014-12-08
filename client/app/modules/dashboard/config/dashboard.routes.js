  ;(function(){
  'use strict';
  //Setting up route
  angular
    .module('dashboard')
    .config( Dashboard );

  /* @inject */
  function Dashboard($stateProvider) {
    //  state routing
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          "@":{
            templateUrl: 'app/modules/dashboard/views/dashboard.view.html',
            controller: 'DashboardController as vm',
          },
        }
      })
      .state('app.dashboard-v1', {
        url: '/dashboard-v1',
        views:{
          "@":{
            templateUrl: 'app/modules/dashboard/views/dashboard-v1.view.html',
            controller: 'Dashboardv1Controller',
            resolve: {
              deps: ['$ocLazyLoad',
                function( $ocLazyLoad ){
                  return $ocLazyLoad.load(['js/controllers/chart.js']);
              }]
            }
          },
          "right@":{
            templateUrl:'app/modules/dashboard/views/dashboard-v1.right.view.html'
          }
        }
      })
  }

}).call(this);
;(function(){
  'use strict';

  angular
    .module('core')
    .controller('AppCtrl', AppCtrl);

  /* @inject */
  function AppCtrl($scope,   $translate,   $localStorage,   $window, $rootScope) {
    // Appctrl controller logic

    var isIE = !!navigator.userAgent.match(/MSIE/i);
    isIE && angular.element($window.document.body).addClass('ie');
    isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');



    // config
    $rootScope.app = {
      name: 'slush-y',
      version: '1.3.2',
      // for chart colors
      leftMenu: [
        {state:'app.dashboard', title:'Dashboard', icon:'dashboard', color:'blue-500'},
        {state:'app.dashboard-v1', title:'Dash-v1', icon:'bar-chart-o', color:'blue-500'},
        // {state:'app.dashboard-v2', title:'Dash-v2', icon:'bar-chart-o', color:'blue-500'},
        {state:'app.contacts', title:'Contacts', icon:'users', color:'blue-500'},
        // {state:'app.mail.list', title:'Email', icon:'envelope', color:'blue-500'},
        {state:'app.notes', title:'Note', icon:'pencil', color:'blue-500'},
        {state:'app.streams', title:'Streams', icon:'bars', color:'blue-500'},
        // {state:'app.tasks', title:'Tasks', icon:'check', color:'blue-500'}
      ],
      color: {
        primary: '#7266ba',
        info:    '#23b7e5',
        success: '#27c24c',
        warning: '#fad733',
        danger:  '#f05050',
        light:   '#e8eff0',
        dark:    '#3a3f51',
        black:   '#1c2b36'
      },
      user:{
        aside: true
      },
      settings: {
        showSettings: false,
        themeID: 1,
        navbarHeaderColor: 'bg-black',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: false,
        asideFolded: false,
        asideDock: false,
        container: false,
        asideLeftFold: false,
        asideLeftHide: false,
        asideRightFold: false,
        asideRightHide: true,
        aside: {
          right:{
            fixed:true,
            fold:true,
            hide:true,
          },
          left:{
            fixed:true,
            fold:true,
            hide:false,
          }
        }
      }
    }

    // save settings to local storage
    if ( angular.isDefined($localStorage.settings) ) {
      $scope.app.settings = $localStorage.settings;
    } else {
      $localStorage.settings = $scope.app.settings;
    }
    $scope.$watch('app.settings', function(){


      // save to local storage
      $localStorage.settings = $scope.app.settings;
    }, true);

    // angular translate
    $scope.lang = { isopen: false };
    $scope.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
    $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
    $scope.setLang = function(langKey, $event) {
      // set the current lang
      $scope.selectLang = $scope.langs[langKey];
      // You can change the language during runtime
      $translate.use(langKey);
      $scope.lang.isopen = !$scope.lang.isopen;
    };

    function isSmartDevice( $window )
    {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }


  }
}).call(this);

(function() {
  'use strict';

  angular.module('App.config', [])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
    });

}());

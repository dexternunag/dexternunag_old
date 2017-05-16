(function() {
  'use strict';

  angular.module('App',
    [
      'ui.router',
      'duScroll',
      'App.config',
      'App.pfHeader',
      'App.pfHome',
      'App.pfAbout',
      'App.pfPortfolio',
      'App.pfContact'
    ]);

}());

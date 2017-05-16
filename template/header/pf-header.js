(function() {
  'use strict';

  angular.module('App.pfHeader', [])
    .directive('pfHeader', function() {
      return {
          templateUrl: 'https://dnunag13.github.io/dexternunag.github.io/template/header/portfolio-header.html'
      };
    })
    .controller('pf-header-ctrl', function($scope, $window) {
      $scope.navLinks = [
        { title: 'About Me', link: 'about'},
        { title: 'Portfolio', link: 'portfolio'},
        { title: 'Contact', link: 'contact'}
      ];

      angular.element($window).bind('scroll', function() {

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 150) {
          $('.navbar-custom').css('background-color', '#212121');
          $('.navbar-custom').css('transition', 'all 0.3s ease-in-out');
          $('.navbar-custom').css('padding', 0);
        } else {
          $('.navbar-custom').css('background-color', 'transparent');
          $('.navbar-custom').css('padding', '5px 0');
        }

      });

    });

}());

(function() {
  'use strict';

  angular.module('App.pfContact', [])
    .directive('pfContact', function() {
      return {
          templateUrl: 'https://dnunag13.github.io/dexternunag.github.io/template/contact/contact.html'
      };
    })

    .controller('pf-contact-ctrl', function($scope) {

      $scope.social = [
        {
          site: 'facebook',
          icon: 'fa fa-facebook-square',
          link: 'fb.com/dxtrr'
        },
        {
          site: 'linkedIn',
          icon: 'fa fa-linkedin-square',
          link: 'linkedin.com/in/dexter-nunag-a11327139'
        }
      ];

      $scope.message = {};

      $scope.send = function() {
        console.log($scope.message);
      };

    });

}());

(function() {
  'use strict';

  angular.module('App.pfAbout', [])
    .directive('pfAbout', function() {
      return {
        templateUrl: 'https://dnunag13.github.io/dexternunag.github.io/template/about/about.html'
      };
    })

    .controller('pf-about-ctrl', function($scope, $window) {

      $scope.skills = [
        {skill: 'HTML', rate: '90'},
        {skill: 'CSS', rate: '90'},
        {skill: 'JAVASCRIPT', rate: '70'},
        {skill: 'PHP', rate: '50'},
        {skill: 'BOOTSTRAP', rate: '75'},
        {skill: 'SASS', rate: '80'},
        {skill: 'ANGULARJS', rate: '45'}
      ];

      angular.element($window).bind('scroll', function() {

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 640) {
        $('.about .skill-holder .skill .progress-bar-container').each(function(){
          $(this).find('.progress-bar-value').animate({
              width:$(this).attr('data-percent')
            }, 2000);
          });
        } else {
          return false;
        }

      });

    });

}());

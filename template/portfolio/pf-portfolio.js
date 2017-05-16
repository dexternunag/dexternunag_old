(function() {
  'use strict';

  angular.module('App.pfPortfolio', [])
    .value('duScrollDuration', 800)
    .directive('pfPortfolio', function() {
      return {
          templateUrl: 'https://dnunag13.github.io/dexternunag.github.io/template/portfolio/portfolio.html'
      };
    })

    .directive('portfolioModal', function() {
      return {
        templateUrl:'https://dnunag13.github.io/dexternunag.github.io/template/portfolio/portfolio-modal.html'
      }
    })

  .controller('pf-portfolio-ctrl', function($scope) {

      $scope.portfolio = [
        {
            title: 'Document Tracker',
            img: [
              'https://dnunag13.github.io/dexternunag.github.io//img/work/1.JPG',
              'https://dnunag13.github.io/dexternunag.github.io//img/work/2.JPG',
              'https://dnunag13.github.io/dexternunag.github.io//img/work/3.JPG'
            ],
            description: 'This is my first freelance project. It is a web app that tracks document uploaded by the user.',
            tags: [
              'html',
              'css',
              'bootstrap',
              'angularjs'
            ]
        },
        {
            title: 'Campus Portal',
            img: [
              'https://dnunag13.github.io/dexternunag.github.io//img/work/4.JPG'
            ],
            description: 'This is my second freelance project. It is a web app campus portal for students in the university.',
            tags: [
              'html',
              'css',
              'bootstrap',
              'angularjs',
              'gulp.js'
            ]
        },
        {
            title: 'Portfolio Template',
            img: [
              'https://dnunag13.github.io/dexternunag.github.io//img/projects/1.JPG',
              'https://dnunag13.github.io/dexternunag.github.io//img/projects/2.JPG',
              'https://dnunag13.github.io/dexternunag.github.io//img/projects/3.JPG'
            ],
            description: 'This is a portfolio template.',
            tags: [
              'html',
              'sass',
              'javascript',
              'bootstrap'
            ]
        },
        {
            title: 'Web Audition Project',
            img: [
              'https://dnunag13.github.io/dexternunag.github.io//img/projects/4.JPG',
              'https://dnunag13.github.io/dexternunag.github.io//img/projects/5.JPG',
              'https://dnunag13.github.io/dexternunag.github.io//img/projects/6.JPG'
            ],
            description: 'This is a web audition project for me to get a home based job.',
            tags: [
              'html',
              'sass',
              'javascript',
              'bootstrap'
            ]
        }
      ];

      $scope.view = function(title) {
        $scope.projTitle = title;
        console.log($scope.projTitle);
      };

      $scope.zoomImg = function() {
        $(this).toggleClass("zoom-img");
      };

    });

}());

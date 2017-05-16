angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/about/about.html','<section class="about" id="about" ng-controller="pf-about-ctrl">\r\n  <div class="container">\r\n    <div class="inner-wrapper">\r\n      <!-- <div class="title-holder text-center">\r\n        <h2>ABOUT ME</h2>\r\n      </div> -->\r\n      <div class="content-holder">\r\n        <div class="row">\r\n          <div class="avatar-holder col-md-4">\r\n            <img class="image-responsive my-avatar" src="https://dnunag13.github.io/dexternunag.github.io/img/avatar.png">\r\n          </div>\r\n          <div class="info-holder col-md-8">\r\n            <div class="who-holder">\r\n              <h4 class="title-holder text-muted">\r\n                WHO AM I?\r\n              </h4>\r\n              <p class="text-holder">\r\n                I\'m <span class="text-gold">Dexter Lawan Nunag</span>, a Computer Engineer who loves Web Development specially Front-End Development. Gaining and looking for more experience is what I like to improve my skills or languages that involves web development.\r\n              </p>\r\n            </div>\r\n            <hr />\r\n            <div class="what-holder">\r\n              <h4 class="title-holder text-muted">\r\n                WHAT I DO?\r\n              </h4>\r\n              <p class="text-holder">\r\n                I\'ve fallen in love into web development ever since I learned the fundamentals of it. After that I basically <span class="text-design">design</span> and write <span class="text-function">functions</span> for my web projects. I learned a lot while coding and learning even more up until now. Designing or making template for a website in Photoshop is also my work.\r\n              </p>\r\n            </div>\r\n            <hr />\r\n            <div class="skill-holder">\r\n              <h4 class="title-holder text-muted">\r\n                WHAT ARE MY SKILLS?\r\n              </h4>\r\n              <div class="skills-wrapper">\r\n                <div class="skill" ng-repeat="skill in skills">\r\n                  <span class="skill-label">{{skill.skill}}</span>\r\n                  <div class="progress-bar-container" data-percent="{{skill.rate}}%">\r\n                    <div class="progress-bar-value {{skill.skill}}"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n');
$templateCache.put('app/contact/contact.html','<section class="contact" id="contact" ng-controller="pf-contact-ctrl">\r\n  <div class="container">\r\n    <div class="inner-wrapper">\r\n      <div class="content-holder">\r\n        <div class="row">\r\n          <div class="contact-holder col-xs-12 col-sm-4">\r\n            <div class="basic-contact">\r\n              <div class="title-holder">\r\n                <h4>CONTACT</h4>\r\n              </div>\r\n              <ul class="list-unstyled">\r\n                <li class="contact">\r\n                  <i class="fa fa-home"></i>\r\n                  3138 Batangas Street Hensonville Subdivision, Angeles City, Pampanga\r\n                </li>\r\n                <li class="contact">\r\n                  <i class="fa fa-phone"></i>\r\n                  +639267727460\r\n                </li>\r\n                <li class="contact">\r\n                  <i class="fa fa-envelope"></i>\r\n                  nunagdexter@gmail.com\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class="social-holder col-xs-12 col-sm-4">\r\n            <div class="social-contact">\r\n              <div class="title-holder">\r\n                <h4>CONNECT WITH ME</h4>\r\n              </div>\r\n              <ul class="list-unstyled">\r\n                <li class="social" ng-repeat="media in social">\r\n                  <a href="{{media.link}}">\r\n                    <i class="{{media.icon}}"></i>\r\n                    {{media.site}}\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class="message-holder col-xs-12 col-sm-4">\r\n            <div class="title-holder">\r\n              <h4>MESSAGE ME</h4>\r\n            </div>\r\n            <form class="form" ng-submit="send()">\r\n              <div class="form-group">\r\n                <input class="form-control" type="text" placeholder="Name" ng-model="message.name"/>\r\n              </div>\r\n              <div class="form-group">\r\n                <input class="form-control" type="email" placeholder="Email" ng-model="message.email"/>\r\n              </div>\r\n              <div class="form-group">\r\n                <textarea class="form-control" rows="4" cols="4" placeholder="Message.." ng-model="message.msg"></textarea>\r\n              </div>\r\n              <div class="form-group clearfix">\r\n                <button class="btn btn-send pull-right" type="submit">\r\n                  <i class="fa fa-send"></i>\r\n                  SEND\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<footer class="footer">\r\n  <div class="copyright-holder text-center">\r\n    Copyrights\r\n    <i class="fa fa-copyright"></i>\r\n    2017 DNUNAG\r\n  </div>\r\n</footer>\r\n');
$templateCache.put('app/header/portfolio-header.html','<nav class="navbar navbar-custom navbar-fixed-top" ng-controller="pf-header-ctrl">\r\n  <div class="container">\r\n    <div class="navbar-header">\r\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#pfNavbar" aria-expanded="false">\r\n        <span class="sr-only">Toggle navigation</span>\r\n        <span class="hamburger">\r\n          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>\r\n        </span>\r\n      </button>\r\n      <!-- <a class="navbar-brand" href="#">DNUNAG</a> -->\r\n    </div>\r\n    <div class="collapse navbar-collapse" id="pfNavbar">\r\n      <ul class="nav navbar-nav navbar-right">\r\n        <li ng-repeat="link in navLinks"\r\n            du-scrollspy="{{link.link}}" offset="200">\r\n          <a class="navlink" href="#{{link.link}}" du-smooth-scroll>{{link.title}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n');
$templateCache.put('app/home/home.html','<section class="home" id="home">\r\n  <div class="container">\r\n    <div class="inner-wrapper">\r\n      <div class="title-holder text-center">\r\n        <div class="name-holder">\r\n          <h1 class="name-text">\r\n            DEXTER NUNAG\r\n          </h1>\r\n        </div>\r\n        <div class="position-holder">\r\n          <span class="position-text">WEB DEVELOPER</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n');
$templateCache.put('app/portfolio/portfolio-modal.html','<div class="modal fade" tabindex="-1" id="project-modal">\r\n  <div class="modal-dialog modal-md" role="document">\r\n    <div class="modal-content">\r\n      <div ng-repeat="project in portfolio | filter:{title:projTitle}">\r\n        <div class="modal-body">\r\n          <button type="button" class="close" data-dismiss="modal">\r\n            <span aria-hidden="true">&times;</span>\r\n          </button>\r\n          <div class="title-holder">\r\n            <h4 class="modal-title">{{project.title}}</h4>\r\n          </div>\r\n          <hr />\r\n          <div class="description-holder">\r\n            <h5>\r\n              <i class="fa fa-comment"></i>\r\n              Description:\r\n            </h5>\r\n            <p class="text-flow">{{project.description}}</p>\r\n          </div>\r\n\r\n          <div class="img-holder">\r\n            <h5>\r\n              <i class="fa fa-camera"></i>\r\n              Screenshots:\r\n            </h5>\r\n            <ul class="list-inline">\r\n              <li ng-repeat="img in project.img">\r\n                <img class="imgs img-slide"\r\n                     ng-src="{{img}}"\r\n                     ng-model="imgSlide"\r\n                     ng-click="zoomImg()">\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class="tag-holder">\r\n            <h5>\r\n              <i class="fa fa-tags"></i>\r\n              Tags\r\n            </h5>\r\n            <ul class="list-inline">\r\n              <li class="tag" ng-repeat="tag in project.tags">{{tag}}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('app/portfolio/portfolio.html','<section class="portfolio" id="portfolio" ng-controller="pf-portfolio-ctrl">\r\n  <div class="container">\r\n    <div class="inner-wrapper">\r\n      <!-- <div class="title-holder text-center">\r\n        <h2>PORTFOLIO</h2>\r\n      </div> -->\r\n      <div class="content-holder">\r\n        <div class="project-holder">\r\n          <div class="project col-xs-12 col-sm-6 col-md-3" ng-repeat="projects in portfolio">\r\n            <div class="proj-holder">\r\n              <img class="project-img" src="{{projects.img[0]}}">\r\n              <div class="title-holder">\r\n                {{projects.title}}\r\n                <span class="btn-holder">\r\n                  <button class="btn btn-view" type="button" data-toggle="modal" data-target="#project-modal" ng-click="view(projects.title)">VIEW PROJECT</button>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <portfolio-Modal></portfolio-Modal>\r\n</section>\r\n');}]);
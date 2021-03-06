'use strict';

angular.module('amercierApp', ['ngRoute', 'ngAnimate', 'angulartics', 'angulartics.google.analytics'])
  .directive('activeLink', function($location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var clazz = attrs.activeLink;
        var path = element[0].firstChild.getAttribute('ng-href').replace(/^!?#/, '');
        scope.location = $location;
        scope.$watch('location.path()', function(newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cv', {
        templateUrl: '/views/cv.html',
        controller: 'CvCtrl'
      })
      .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  });

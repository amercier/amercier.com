'use strict';

angular.module('amercierApp', [])
  .directive('activeLink', ['$location', function(location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs/*, controller*/) {
        var clazz = attrs.activeLink;
        var path = element[0].firstChild.getAttribute('href');
        path = path.substring(1); //hack because path does bot return including hashbang
        scope.location = location;
        scope.$watch('location.path()', function(newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }
    };
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

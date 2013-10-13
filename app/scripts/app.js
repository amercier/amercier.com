'use strict';

angular.module('amercierApp', [])
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

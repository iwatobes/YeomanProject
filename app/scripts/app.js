'use strict';

angular.module('YeomanProjectApp', [])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/Home.html',
        controller: 'MainCtrl'
      })
	  $routeProvider.when('/home', {
        templateUrl: 'views/Home.html',
        controller: 'MainCtrl'
      })
	  $routeProvider.when('/about', {
        templateUrl: 'views/About.html',
        controller: 'MainCtrl'
      })
      $routeProvider.otherwise({
        redirectTo: '404.html'
      });
	  //comment out because github hosting doesnt work well with angular HTML5. this require URL rewrite while github page are just static pages
	  //$locationProvider.html5Mode(true);
  });

'use strict';

/* App Module */

var app = angular.module('app', [
	'ngRoute',
	'myControllers',
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'templates/main.html',
        controller: 'myViewCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);
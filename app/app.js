'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.view2',
  'angular-carousel'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);

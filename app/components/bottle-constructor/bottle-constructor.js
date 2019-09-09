'use strict';

angular.
  module('myApp').
  component('appBottleConstructor', {
    templateUrl: 'components/bottle-constructor/bottle-constructor.html',
    controller: 'BottleConstructorCtrl' 
  })
  .controller('BottleConstructorCtrl', ['$scope', function($scope) {
    console.log('BottleConstructorCtrl');
}]);

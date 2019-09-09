'use strict';

angular.
  	module('myApp').
  	component('appBottleConstructor', {
	templateUrl: 'components/bottle-constructor/bottle-constructor.html',
    	controller: 'BottleConstructorCtrl' 
  	})
  	.controller('BottleConstructorCtrl', ['$scope', function($scope) {

		$scope.bottleTypes = [
			{
				type: 'classic',
				name: 'Classic',
				srcDefault: 'assets/images/bottles/AS-ASW58800.png',
				srcActive: 'assets/images/bottles/AS-ASW58800-01.png'
			}, {
				type: 'nozzle_on',
				name: 'Nozzle on',
				srcDefault: 'assets/images/bottles/PP-PPW42301.png',
				srcActive: 'assets/images/bottles/PP-PPW42301-01.png'
			}, {
				type: 'sporty',
				name: 'Sporty',
				srcDefault: 'assets/images/bottles/DM-DMW42300.png',
				srcActive: 'assets/images/bottles/DM-DMW42300-01.png'
			}
		];
		$scope.selectedType = $scope.bottleTypes[0];

		$scope.onTypeSelect = function(type) {
			if ($scope.selectedType.type !== type) {
				$scope.bottleTypes.forEach(function(t) {
					if (t.type === type) {
						$scope.selectedType = t;
					}
					return;
				});
			}
		};
}]);

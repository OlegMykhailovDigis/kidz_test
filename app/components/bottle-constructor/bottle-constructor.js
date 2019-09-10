'use strict';

angular.
  	module('myApp').
  	component('appBottleConstructor', {
	templateUrl: 'components/bottle-constructor/bottle-constructor.html',
    	controller: 'BottleConstructorCtrl' 
  	})
  	.controller('BottleConstructorCtrl', ['$scope', function($scope) {

		$scope.bottleCaps = undefined;
		$scope.bottleBodies = undefined;

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
		
		$scope.classicCaps = [
			{id: 'AS-ASW58800-CAP', image: './assets/images/bottles/AS-ASW58800-CAP.png'},
			{id: 'DM-DMW58802-CAP', image: './assets/images/bottles/DM-DMW58802-CAP.png'},
			{id: 'DSC_1657-CAP', image: './assets/images/bottles/DSC_1657-CAP.png'},
			{id: 'DSC_1667-CAP', image: './assets/images/bottles/DSC_1667-CAP.png'},
			{id: 'ADSC_1670-CAP', image: './assets/images/bottles/DSC_1670-CAP.png'},
		];
		$scope.classicBodies = [
			{id: 'AS-ASW58800-BODY', image:'./assets/images/bottles/AS-ASW58800-BODY.png'},
			{id: 'DM-DMW58802-BODY', image:'./assets/images/bottles/DM-DMW58802-BODY.png'},
			{id: 'DSC_1657-BODY', image:'./assets/images/bottles/DSC_1657-BODY.png'},
			{id: 'DSC_1667-BODY', image:'./assets/images/bottles/DSC_1667-BODY.png'},
			{id: 'DSC_1670-BODY', image:'./assets/images/bottles/DSC_1670-BODY.png'},
		];

		$scope.nozzleCaps = [
			{id: 'DM-DMW42300-CAP', image:'./assets/images/bottles/DM-DMW42300-CAP.png'},
			{id: 'DSC_1850-CAP', image:'./assets/images/bottles/DSC_1850-CAP.png'},
			{id: 'NL-NLW42300-CAP', image:'./assets/images/bottles/NL-NLW42300-CAP.png'},
			{id: 'PM-PMW42301-CAP', image:'./assets/images/bottles/PM-PMW42301-CAP.png'},
			{id: 'PP-PPW42301-CAP', image:'./assets/images/bottles/PP-PPW42301-CAP.png'},
		];
		$scope.nozzleBodies = [
			{id: 'DM-DMW42300-BODY', image:'./assets/images/bottles/DM-DMW42300-BODY.png'},
			{id: 'DSC_1850-BODY', image:'./assets/images/bottles/DSC_1850-BODY.png'},
			{id: 'NL-NLW42300-BODY', image:'./assets/images/bottles/NL-NLW42300-BODY.png'},
			{id: 'PM-PMW42301-BODY', image:'./assets/images/bottles/PM-PMW42301-BODY.png'},
			{id: 'PP-PPW42301-BODY', image:'./assets/images/bottles/PP-PPW42301-BODY.png'},
		];

		$scope.sportyCaps = [];
		$scope.sportyBodies = [];

		var generateSwiperProps = function(location) {
			return {
				slidesPerView: 3,
				speed: 1000,
				spaceBetween: 80,
				effect: 'coverflow',
				centeredSlides: true,
				loop: true,
				loopFillGroupWithBlank: true,
				observeSlideChildren: true,
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 290,
					modifier: 1,
					slideShadows: false
				},
				navigation: {
				  nextEl: '#next' + location,
				  prevEl: '#prev' + location,
				},
			};
		};

		var init = function() {
			if (!$scope.selectedType) {
				$scope.selectedType = $scope.bottleTypes[0];
			}
			$scope.bottleCaps = [];
			$scope.bottleBodies = [];
			if ($scope.selectedType.type === 'classic') {
				$scope.bottleCaps = $scope.classicCaps;
				$scope.bottleBodies = $scope.classicBodies;
			} else if ($scope.selectedType.type === 'nozzle_on') {
				$scope.bottleCaps = $scope.nozzleCaps;
				$scope.bottleBodies = $scope.nozzleBodies;
			} else if ($scope.selectedType.type === 'sporty') {
				// TODO Init 'sporty' swiper
			}
		};

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

		angular.element(document).ready(function () {
			$scope.swiper2 = new Swiper('#swiperTop', generateSwiperProps('Top'));
			$scope.swiper1 = new Swiper('#swiperBottom', generateSwiperProps('Bottom'));
		});

		$scope.$watch('selectedType', function(newVal, oldVal) {
			init();
			if ($scope.swiper1 && $scope.swiper2) {
				$scope.swiper1.updateSlides();
				$scope.swiper2.updateSlides();
			}
		});

		init();
}]);

'use strict';

angular.
	module('myApp').
	component('appBottleConstructor', {
		templateUrl: 'components/bottle-constructor/bottle-constructor.html',
		controller: 'BottleConstructorCtrl'
	})
	.controller('BottleConstructorCtrl', ['$scope', function ($scope) {
		$scope.constructorTitles = {
			classic: {
				header: 'KIDZTIME Classic sipper',
				subheader: 'Transition well from toddler sippy cup to the big kids\' world with our classic sippers. Strudy, Safe, Speils & Fuss proof.'
			}, 
			nozzle_on: {
				header: 'KIDZTIME Original Nozzlers',
				subheader: 'For the older kiddos, whether for the school, for the playground or for the weekend - our Classic Nozzlers have never llost their charm.'
			}
		};
		$scope.getTitle = function(type) {
			if (!type) {
				return $scope.constructorTitles['classic']
			}
			return $scope.constructorTitles[type];
		};
		// bottleCaps - used for caps slider
		$scope.bottleCaps = undefined;
		// bottleBodies - used for bodies slider
		$scope.bottleBodies = undefined;
		// General Bottle Types - Classic, Nozzle, Sporty
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
		// Mocked Data start
		$scope.classicCaps = [
			{ id: 'AS-ASW58800-CAP', image: './assets/images/bottles/AS-ASW58800-CAP.png' },
			{ id: 'DM-DMW58802-CAP', image: './assets/images/bottles/DM-DMW58802-CAP.png' },
			{ id: 'DSC_1657-CAP', image: './assets/images/bottles/DSC_1657-CAP.png' },
			{ id: 'DSC_1667-CAP', image: './assets/images/bottles/DSC_1667-CAP.png' },
			{ id: 'ADSC_1670-CAP', image: './assets/images/bottles/DSC_1670-CAP.png' },
		];
		$scope.classicBodies = [
			{ id: 'AS-ASW58800-BODY', image: './assets/images/bottles/AS-ASW58800-BODY.png' },
			{ id: 'DM-DMW58802-BODY', image: './assets/images/bottles/DM-DMW58802-BODY.png' },
			{ id: 'DSC_1657-BODY', image: './assets/images/bottles/DSC_1657-BODY.png' },
			{ id: 'DSC_1667-BODY', image: './assets/images/bottles/DSC_1667-BODY.png' },
			{ id: 'DSC_1670-BODY', image: './assets/images/bottles/DSC_1670-BODY.png' },
		];
		$scope.nozzleCaps = [
			{ id: 'DM-DMW42300-CAP', image: './assets/images/bottles/DM-DMW42300-CAP.png' },
			{ id: 'DSC_1850-CAP', image: './assets/images/bottles/DSC_1850-CAP.png' },
			{ id: 'NL-NLW42300-CAP', image: './assets/images/bottles/NL-NLW42300-CAP.png' },
			{ id: 'PM-PMW42301-CAP', image: './assets/images/bottles/PM-PMW42301-CAP.png' },
			{ id: 'PP-PPW42301-CAP', image: './assets/images/bottles/PP-PPW42301-CAP.png' },
		];
		$scope.nozzleBodies = [
			{ id: 'DM-DMW42300-BODY', image: './assets/images/bottles/DM-DMW42300-BODY.png' },
			{ id: 'DSC_1850-BODY', image: './assets/images/bottles/DSC_1850-BODY.png' },
			{ id: 'NL-NLW42300-BODY', image: './assets/images/bottles/NL-NLW42300-BODY.png' },
			{ id: 'PM-PMW42301-BODY', image: './assets/images/bottles/PM-PMW42301-BODY.png' },
			{ id: 'PP-PPW42301-BODY', image: './assets/images/bottles/PP-PPW42301-BODY.png' },
		];
		$scope.sportyCaps = [];
		$scope.sportyBodies = [];
		// Mocked Data end

		// generateSwiperProps return obeject of properties for slider
		// initialization
		var generateSwiperProps = function (location) {
			return {
				slidesPerView: 3,
				speed: 1000,
				spaceBetween: 105,
				effect: 'coverflow',
				centeredSlides: true,
				loop: true,
				coverflowEffect: {
					rotate: 0,
					stretch: 15,
					depth: 100,
					modifier: 2,
					slideShadows: false
				},
				navigation: {
					nextEl: '#next' + location,
					prevEl: '#prev' + location,
				},
			};
		};
		// On Init method
		var init = function () {
			if (!$scope.selectedType) {
				$scope.selectedType = $scope.bottleTypes[0];
			}

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
		// Watch bottle types selector to choose wich type of bottle to render 
		// in slider
		$scope.onTypeSelect = function (type) {
			if (type === 'sporty') return;
			if ($scope.selectedType.type !== type) {
				$scope.bottleTypes.forEach(function (t) {
					if (t.type === type) {
						$scope.selectedType = t;
					}
					return;
				});
			}
		};
		$scope.addToCard = function() {
			console.log($scope.selectedType);
			console.log($scope.capsSwiper.realIndex);
			console.log($scope.bodySwiper.realIndex);
		};
		// Sliders initialization
		var initSliders = function () {
			// $scope.showSlider = true;
			$scope.capsSwiper = new Swiper('#swiperTop', generateSwiperProps('Top'));
			$scope.bodySwiper = new Swiper('#swiperBottom', generateSwiperProps('Bottom'));
		};
		angular.element(document).ready(function () {
			initSliders();
		});
		$scope.$watch('selectedType', function (newVal, oldVal) {
			init();
			if ($scope.bodySwiper && $scope.capsSwiper) {
				$scope.capsSwiper.destroy();
				$scope.capsSwiper = undefined;
				$scope.bodySwiper.destroy();
				$scope.bodySwiper = undefined;

				setTimeout(function(){ 
					initSliders();
				}, 0);
			}
		});
		
		// $scope.showSlider = true;

		// $scope.sliderIsShown = function() {
		// 	return $scope.showSlider;
		// };

		init();
	}]);

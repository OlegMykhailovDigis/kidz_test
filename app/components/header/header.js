'use strict';

angular.
	module('myApp').
	component('appHeader', {
		templateUrl: 'components/header/header.html',
		controller: 'HeaderCtrl',
	})
	.controller('HeaderCtrl', ['$scope', '$element', function ($scope, $element) {
		var headerBg = document.querySelector('.app-header__background');

		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 500) {
				$(headerBg).addClass('active');
			} else {
				$(headerBg).removeClass('active');
			}
		});

		$('.dropdown').dropdown();
	}]);

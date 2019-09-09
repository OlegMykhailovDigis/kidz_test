'use strict';

angular.
  module('myApp').
  component('appCarousel', {
    templateUrl: 'components/main-carousel/main-carousel.html',
    controller: 'MaincarouselCtrl' 
  })
  .controller('MaincarouselCtrl', ['$scope', function($scope) {
    $scope.slides = [
        {
            title: 'Kidztime straw sippers',
            subtitle: 'Little ones \'big-kid cup\'. Look at\'er all grown up',
            src: 'assets/images/banner-1.png'
        }, {
            title: 'Kidztime nozzle on',
            subtitle: 'Beyond straw. The little big kid\'s hydration buddy.',
            src: 'assets/images/banner-2.png'
        }
      ];
}]);

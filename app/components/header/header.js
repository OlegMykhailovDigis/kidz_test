'use strict';

angular.
  module('myApp').
  component('appHeader', {
    templateUrl: 'components/header/header.html',
    controller: function HeaderController() {
      $('.ui.dropdown').dropdown();
    }
  });

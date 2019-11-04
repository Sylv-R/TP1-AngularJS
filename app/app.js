'use strict';

var module = angular.module('myApp', []);

module.controller('MainController', ['$scope', function ($scope) {

  $scope.restaurants_1 = [{
      nom: '',
      adresse: '',
      datedernierevisite: '',
      notedernierevisite: ''
    },
    {
      nom: '',
      adresse: '',
      datedernierevisite: '',
      notedernierevisite: ''
    },
    {
      nom: '',
      adresse: '',
      datedernierevisite: '',
      notedernierevisite: ''
    }
  ];
}]);




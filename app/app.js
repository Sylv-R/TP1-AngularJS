'use strict';

var module = angular.module('myApp', []);

module.controller('MainController', ['$scope', function ($scope) {

  $scope.restaurants_1 = [{
      nom: 'Plaza Pizza',
      adresse: "30 Avenue Jeanne d'Arc, Grenoble",
      datedernierevisite: '30/10/2019',
      notedernierevisite: '9/10',
      nomproprietaire: 'Monsieur Michot',
      email: 'plaza.pizza@gmail.com',
      commentaire: ''
    },
    {
      nom: 'La petite Idée',
      adresse: '7 Cours Jean Jaurès, Grenoble',
      datedernierevisite: '15/09/2018',
      notedernierevisite: '8/10',
      nomproprietaire: 'Madame Bergamote',
      email: 'lapetiteidee@yahoo.fr',
      commentaire: ''
    },
    {
      nom: "L'Amélyss",
      adresse: '3 Boulevard Gambetta, Grenoble',
      datedernierevisite: '15/07/2019',
      notedernierevisite: '8,5/10',
      nomproprietaire: 'Monsieur Sacquet',
      email: 'lamelyss@hotmail.com',
      commentaire: ''
    }
  ];
}]);




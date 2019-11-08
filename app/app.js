'use strict';

var module = angular.module('myApp', []);

module.controller('MainController', ['$scope', function ($scope) {

  $scope.restaurants_1 = [{
      nom: 'Plaza Pizza',
      adresse: "30 Avenue Jeanne d'Arc, Grenoble",
      datedernierevisite: '30/10/2019',
      notedernierevisite: '9',
      nomproprietaire: 'Monsieur Michot',
      email: 'plaza.pizza@gmail.com',
      commentaire: ''
    },
    {
      nom: 'La Petite Idée',
      adresse: '7 Cours Jean Jaurès, Grenoble',
      datedernierevisite: '15/09/2018',
      notedernierevisite: '8',
      nomproprietaire: 'Madame Bergamote',
      email: 'lapetiteidee@yahoo.fr',
      commentaire: ''
    },
    {
      nom: "L'Amélyss",
      adresse: '3 Boulevard Gambetta, Grenoble',
      datedernierevisite: '15/07/2019',
      notedernierevisite: '9',
      nomproprietaire: 'Monsieur Sacquet',
      email: 'lamelyss@hotmail.com',
      commentaire: ''
    },
    {
      nom: "Tombé du Ciel",
      adresse: '14 Rue Arago , Grenoble',
      datedernierevisite: '15/02/2015',
      notedernierevisite: '10',
      nomproprietaire: 'Monsieur Patate',
      email: 'tombeduciel@hotmail.fr',
      commentaire: ''
    },
    {
      nom: "L'Inattendu",
      adresse: '3 Rue Condorcet , Grenoble',
      datedernierevisite: '31/08/2010',
      notedernierevisite: '7',
      nomproprietaire: 'Monsieur Depardieu',
      email: 'linattendu@hotmail.fr',
      commentaire: ''
    }
  ];
}]);




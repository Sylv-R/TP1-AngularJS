var myModule = angular.module('myApp');
myModule.directive('restaurantlistdetaildir', [function () {
    return {
        templateUrl: '/graphics/restaurantlistdetail/restaurantlistdetail.html',
         scope: {
            restaurant: '=restaurant'
        },
        // link: function (scope, element, attrs) {
        //     scope.selectPersonne = function (p) {
        //         /* scope.nom = p.nom;
        //         scope.prenom = p.prenom */
        //         console.log(p);
        //         scope.personne = p;
        //     }
        // }
    };
}]);
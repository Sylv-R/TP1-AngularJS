var myModule = angular.module('myApp');
myModule.directive('restaurants', [function () {
    return {
        templateUrl: '/graphics/restaurants/restaurants.html',
        scope: {
            restaurants: '=lesrestaurants'
        },
        // link: function (scope, element, attrs) {
        //     scope.selectRestaurant = function (p) {
        //         /* scope.nom = p.nom;
        //         scope.prenom = p.prenom */
        //         //console.log(p);
        //         scope.restaurant = p;
        //     }
        // }
    };
}]);
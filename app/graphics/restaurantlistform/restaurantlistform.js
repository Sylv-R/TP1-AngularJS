var myModule = angular.module('myApp');
myModule.directive('restaurantform', [function () {
    return {
        templateUrl: '/graphics/restaurantlistform/restaurantlistform.html',
        scope: {
            restaurant: '='
        },
        link: function (scope, element, attrs) {
            scope.$watch(() => scope.restaurant, function () {
                scope.monrestaurant = angular.copy(scope.restaurant);
                scope.myform.$setPristine();
               // ou angular.copy(scope.personne, scope.mapersonne);
            })
            scope.valider = function () {
                angular.copy(scope.monrestaurant, scope.restaurant);
                scope.myform.$setPristine();
            }
            scope.annuler = function () {
                scope.monrestaurant = angular.copy(scope.restaurant);
            }
        }
    };
}]);
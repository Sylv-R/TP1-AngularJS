var myModule = angular.module('myApp');
myModule.directive('restaurants', [function () {
    return {
        templateUrl: '/graphics/restaurants/restaurants.html',
        scope: {
            restaurants: '=lesrestaurants',
            // displayform: '='
        },
        link: function (scope, element, attrs) {
            scope.selectedRow = null;
            scope.selectRestaurant = function (r) {
                scope.displayform = true;
                /* scope.nom = p.nom;
                scope.prenom = p.prenom */
                //console.log(p);
                //scope.displayform = true;
                /* if(scope.displayform){
                   console.log("trueee");
                }else{
                    console.log("falseee");
                } */
                //console.log("displayform", scope.displayform);
                scope.restaurant = r;

               
                scope.selectedRow = r;
                console.log(r);
            }
        }
    };
}]);
var myApp = angular.module("myApp", []);

myApp.controller("WelcomeController", ["$scope", "$http", '$filter', function($scope, $http, $filter){
    $scope.info = {};
    $scope.people = [];
    var orderBy = $filter('orderBy');


    $scope.getPeople = function(){
        $http.get('/info').then(function(response){
            $scope.people = response.data.rows;
            console.log($scope.people);
        });

    };

    $scope.order = function(predicate, reverse) {
        $scope.people = orderBy($scope.people, predicate, reverse);
    };

    $scope.getPeople();
    $scope.order();

}]);


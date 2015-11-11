var myApp = angular.module("myApp", []);

myApp.controller("WelcomeController", ["$scope", "$http", function($scope, $http){
    $scope.info = {};
    $scope.people = [];

    $scope.getPeople = function(){
        $http.get('/info').then(function(response){
            $scope.people = response.data.rows;
        });
    };

    $scope.getPeople();

}]);


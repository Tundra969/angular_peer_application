var myApp = angular.module("myApp", []);

myApp.controller("WelcomeController", ["$scope", function($scope){
    $scope.info = {};

    $scope.dana = {
        name: "Dana Hazen",
        location: "Brooklyn Park",
        favNum: 42
    };

    $scope.sam = {
        name: "Sam Moss",
        location: "NorthEast",
        favNum: NaN
    };

    $scope.people = [$scope.dana, $scope.sam];
}]);


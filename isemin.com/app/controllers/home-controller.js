(function () {
    var iseminApp = angular.module("isemin");

    var homeController = function ($scope, $http) {
        $scope.freq = 1;
    };

    iseminApp.controller("homeController", ["$scope", "$http", homeController]);
}());

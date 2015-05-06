(function () {
    var iseminApp = angular.module("isemin");
    
    var contactController = function ($scope) {
        $scope.map = { center: { latitude: 55.780495, longitude: 49.13379371 }, zoom: 14 };
        $scope.marker = {
            id: 0,
            coords: { latitude: 55.780495, longitude: 49.13379371 }
        };
    };

    iseminApp.controller("contactController", ["$scope", contactController]);
}());


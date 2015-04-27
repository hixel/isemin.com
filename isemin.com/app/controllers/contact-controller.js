(function () {
    var iseminApp = angular.module("isemin");
    
    var contactController = function ($scope) {
        $scope.map = { center: { latitude: 55.793386, longitude: 49.106263 }, zoom: 14 };
    };

    iseminApp.controller("contactController", ["$scope", contactController]);
}());

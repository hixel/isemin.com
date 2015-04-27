(function () {
    var iseminApp = angular.module("isemin");

    var projectInfoController = function ($scope, $modalInstance) {
        $scope.close = $modalInstance.close;
    };
    
    iseminApp.controller("projectInfoController", [
        "$scope",
        "$modalInstance",
        projectInfoController
    ]);
}());

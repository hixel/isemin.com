(function () {

    var iseminApp = angular.module("isemin", ["ngRoute"]);

    iseminApp.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                controller: "homeController",
                templateUrl: "/templates/home/index.html"
            })
            .when("/documentation", {
                controller: "documentationController",
                templateUrl: "/templates/documentation/index.html"
            })
            .otherwise({ redirectTo: "/home" });
    });

}());
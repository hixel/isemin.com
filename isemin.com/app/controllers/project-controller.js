(function () {
    var iseminApp = angular.module("isemin");

    var projectController = function ($scope, $modal) {
        $scope.open = function (project) {
            $modal.open({
                templateUrl: getTemplate(project),
                controller: "projectInfoController",
                windowClass: "projects-info-modal"
            });
        };
    };

    function getTemplate(project) {
        switch (project) {
            case "estimategen":
                return "/templates/projects/estimate-gen-modal.html";

            case "epayments":
                return "/templates/projects/epayments-modal.html";
               
            case "rappelz":
                return "/templates/projects/rappelz-modal.html";
             
            case "favorite-projects":
                return "/templates/projects/favorite-projects-modal.html";
                
            default:
                return "";
        }
    }
    
    iseminApp.controller("projectController", [
        "$scope",
        "$modal",
        projectController
    ]);
}());

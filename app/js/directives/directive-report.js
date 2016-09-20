var reportModule = angular.module("directives.report", []);

reportModule.directive("report",[function(){
    return {
        "replace" : true,
        "limit" : "E",
        "scope" : {
                    "state" : "@",
                    "title" : "@",
                    "description" : "@",
                    "path" : "@",
                    "successtext" : "@",
                    "successcount" : "@",
                    "failuretext" : "@",
                    "failurecount" : "@"
                },
        "templateUrl" : "templates/report.html",
        "link" : function(scope, element, attr){
            scope.$watch("state", function(){
                if(scope.state.toLowerCase() == "error"){
                    angular.element(angular.element.find("#stateDefination i")).remove();
                    angular.element(angular.element.find("#stateDefination")).prepend("<i class='fa fa-exclamation-circle'></i>").append("<i class='fa fa-ellipsis-h'></i>");
                }else if(scope.state.toLowerCase() == "ok"){
                    angular.element(angular.element.find("#stateDefination i")).remove();
                    angular.element(angular.element.find("#stateDefination")).prepend("<i class='fa fa-check-circle'></i>").append("<i class='fa fa-ellipsis-h'></i>");
                }
            }, true);
        }
    };
}]);
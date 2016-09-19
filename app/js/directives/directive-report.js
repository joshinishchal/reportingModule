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
        "template" : `<section class="nishchal-report row">
                        <p id="stateDefination" data-ng-bind="state" class="row {{state.toLowerCase()}}"></p>
                        <header class="row">
                            <h4 data-ng-bind="title" class="row main-text-color"></h4>
                        </header>
                        <p data-ng-bind="description" class="row description"></p>
                        <p data-ng-bind="path" class="row path"></p>
                        <footer class="row">
                            <div class="success col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <p data-ng-bind="successtext" class="row main-text-color"></p>
                                <p data-ng-bind="successcount" class="row"></p>
                            </div>
                            <div class="failure col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <p data-ng-bind="failuretext" class="row {{state.toLowerCase()}}"></p>
                                <p data-ng-bind="failurecount" class="row {{state.toLowerCase()}}"></p>
                            </div>
                        </footer>
                    </section>`,
        "link" : function(scope, element, attr){
            scope.$watch("state", function(){
                if(scope.state.toLowerCase() == "error"){
                    angular.element(angular.element.find("#stateDefination")).prepend("<i class='fa fa-exclamation-circle'></i>").append("<i class='fa fa-ellipsis-h'></i>");
                }else if(scope.state.toLowerCase() == "ok"){
                    angular.element(angular.element.find("#stateDefination")).prepend("<i class='fa fa-check-circle'></i>").append("<i class='fa fa-ellipsis-h'></i>");
                }
            });
        }
    };
}]);
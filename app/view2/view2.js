'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
   .state('myapp.view2', {
    url: 'view2',
    templateUrl: 'view2/view2.html',
    controller: "View2Ctrl"
  })
}])

.controller('View2Ctrl', ['$scope','$rootScope', 'MetaService', function($scope, $rootScope, MetaService) {
	// Configure Meta Tags and Title
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("view2 | angular-seed","desc","blah blah");
}]);
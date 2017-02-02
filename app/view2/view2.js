'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
   .state('myapp.view2', {
    url: 'view2/:bId',
    templateUrl: 'view2/view2.html',
    controller: "View2Ctrl"
  })
}])

.controller('View2Ctrl', ['$scope','$rootScope', 'MetaService','$stateParams', function($scope, $rootScope, MetaService, $stateParams) {
	// Configure Meta Tags and Title
  get();
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("view2 | angular-seed","desc","blah blah");

    console.log($stateParams);

    $scope.data = $rootScope.data[$stateParams.bId];
    console.log($scope.data);
}]);
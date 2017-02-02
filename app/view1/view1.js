'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
  .state('myapp.view1', {
    url: 'view1',
    templateUrl: 'view1/view1.html',
    controller: "View1Ctrl"
  });
}])


.controller('View1Ctrl', ['$scope','$rootScope', 'MetaService', function($scope, $rootScope, MetaService) {
	// Configure Meta Tags and Title
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("view2 | angular-seed","desc","blah blah");


    $rootScope.data =[
    {
    	bId: 1,
    	bName: 'first'
    },
    {
    	bId: 2,
    	bName: 'second'
    },
    {
    	bId: 3,
    	bName: 'third'
    }];
}]);

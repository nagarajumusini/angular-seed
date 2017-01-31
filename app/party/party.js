'use strict';

angular.module('myApp.party', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
   .state('myapp.party', {
    url: 'party/:partyID/:partyLocation',
    templateUrl: 'party/party.html',
    controller: "PartyCtrl"
  })
}])

.controller('PartyCtrl', ['$scope','$rootScope', 'MetaService', '$stateParams', function($scope, $rootScope, MetaService, $stateParams) {
	// Configure Meta Tags and Title
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("view2 | angular-seed","desc","blah blah");
    $scope.id = $stateParams.partyID;
    $scope.location = $stateParams.partyLocation; 
}]);
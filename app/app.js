'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'metaservice',
  'myApp.view1',
  'myApp.party'
]).
config(['$locationProvider', '$urlRouterProvider', '$stateProvider', '$provide', function($locationProvider, $urlRouterProvider, $stateProvider, $provide) {
  
  $provide.decorator("$exceptionHandler", ["$delegate", "$log","$injector", function($delegate, $log, $injector) {
    return function (exception, cause) {
      var $rootScope = $injector.get('$rootScope');
      $rootScope.Errors = $rootScope.Errors || [];
      $rootScope.Errors.push({ exception: exception, cause: cause });
      //console.log({ exception: exception, cause: cause });
      //$delegate(exception, cause);
   };
  }]);

  //$locationProvider.hashPrefix('!');

  //$urlRouterProvider.otherwise('/otherwise');
  $stateProvider

  .state('login', {
    url: 'login',
    views: {
      'content': {
        template:'<button ui-sref="myapp.aboutus">Go to About us page</button> <br/><button ui-sref="register">got to registration</button>'
      }
    }
  })
  .state('register', {
    url: 'register',
    views: {
      'content': {
        template:'<button ui-sref="login">Go to login page</button>'
      }
    }
  })
  .state('myapp', {
    views: {
      'header': {
        templateUrl:'header/header.html'
      },
      'content': {
        template:'<div ui-view></div>'
      },
      'footer': {
        template:'<hr /> footer'
      }
    }
  })
  .state('myapp.aboutus', {
    url: 'aboutus',
    template:'sup <button ui-sref="myapp.services">Go to services</button>'
  })
  .state('myapp.services', {
    url: 'services',
    template:'another page <button ui-sref="myapp.contact"> Go to contact</button>'
  })
  .state('myapp.contact', {
    url: 'contact',
    template:'another page <button ui-sref="login"> Go to login</button>'
  })

 

}])
.run([ '$rootScope', '$location', '$anchorScroll','$state', function( $rootScope, $location, $anchorScroll, $state) {
  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });
  $state.go('login');
}])
;

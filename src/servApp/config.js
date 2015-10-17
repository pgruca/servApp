angular.module('servApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise("/");

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'servApp/modules/main/main.html',
        controller: "MainCtrl"
    });

}]);

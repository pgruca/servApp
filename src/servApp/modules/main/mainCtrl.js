angular.module("servApp").controller("MainCtrl", ['$scope', 'serversSvc', function($scope, serversSvc) {

	$scope.servers = serversSvc.servers;

}]);



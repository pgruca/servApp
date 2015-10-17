angular.module("servApp").controller("NavigationCtrl", ['$scope', 'serversSvc', function($scope, serversSvc) {

	$scope.apps = [
		{name: 'Hadoop', abbr:'Ha', color: '#f707a5'},
		{name: 'Rails', abbr:'Ra', color: '#3c2dee'},
		{name: 'Chronos', abbr:'Ch', color: '#01aafd'},
		{name: 'Storm', abbr:'St', color: '#2ce19c'},
		{name: 'Spark', abbr:'Sp', color: '#69fa1a'}
	];

	$scope.mountApp = function(app){
		serversSvc.mountApp(app);
	}

	$scope.unmountApp = function(app){
		serversSvc.unmountApp(app);
	}

	$scope.addServer = function () {
		serversSvc.addServer();
	};

	$scope.destroyServer = function () {
		if (serversSvc.servers.length < 5) {
			alert("You can't destroy more servers! Minimum number of servers: 4");
		} else {
			if(serversSvc.servers[serversSvc.servers.length - 1].apps) {
				var runningApps = confirm("This server is running applications, are you sure you want to destroy it?");
				if(runningApps) {
					serversSvc.servers.pop();
				}
			} else {
				serversSvc.servers.pop();
			};
		};
	};	


}]);



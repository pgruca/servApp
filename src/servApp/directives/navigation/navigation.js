angular.module("servApp").directive("navigation", function () {
	return {
		restrict: "AE",
  		templateUrl: "servApp/directives/navigation/navigation.html",
  		controller: 'NavigationCtrl'
	};		
});

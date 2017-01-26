var beaconsApp = angular.module('beaconsApp', [
	'authentication',
    'ngRoute',
    'ngCookies'
]);

beaconsApp.config(function ($routeProvider, $locationProvider) {

	$locationProvider.hashPrefix('');

	$routeProvider

		.when('/', {
			templateUrl: 'js/angular/pages/dashboard.html',
			controller: 'mainController'
		})
		.when('/users', {
			templateUrl: 'js/angular/users/users.html',
			controller: 'usersController'
		})
		.when('/devices', {
			templateUrl: 'js/angular/pages/devices.html',
			controller: 'mainController'
		})
		.when('/venues', {
			templateUrl: 'js/angular/pages/venues.html',
			controller: 'mainController'
		})
});

beaconsApp.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
		if ($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
		}
    }]);

beaconsApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

	$scope.name = 'Main';

}]);
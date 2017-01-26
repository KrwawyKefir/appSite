beaconsApp.controller('navController', ['$scope', '$location', function ($scope, $location) {

	$scope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {

		angular.element(document.querySelector('#side-menu a.active')).removeClass('active');

		var menuEl = angular.element(document.querySelector('#side-menu a[href$="' + $location.path() + '"]'));
		menuEl.addClass('active');
	});

}]);
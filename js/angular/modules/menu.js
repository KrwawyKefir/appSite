var menu = angular.module('menu', []);

menu
	.controller('menuHighlightController', ['$scope', '$location', function ($scope, $location) {

		$scope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {

			var location = $location.path();
			$scope.link = location.substring(location.lastIndexOf('/') + 1);
		});

}]);
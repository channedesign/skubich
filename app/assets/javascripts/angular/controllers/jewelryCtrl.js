(function() {

	var jewelryController = angular.module('JewelryController', []);

	jewelryController.controller('jewelryIndexCtrl', ['$scope', '$location', 'Jewelry', function($scope, $location, Jewelry) {
		$scope.jewelries = Jewelry.query();

		$scope.jewelryShow = function(id) {
			$location.url('/'+ id );
		}	
	}]);

	jewelryController.controller('jewelryShowCtrl', ['$scope', '$location', '$routeParams', 'Jewelry', function($scope, $location, $routeParams, Jewelry) {
		$scope.jewelry = Jewelry.get({id: $routeParams.id});

		$scope.jewelryIndex = function() {
			$location.url('/');
		}
	}]);


})();
(function() {

	var jewelryController = angular.module('JewelryController', []);

	jewelryController.controller('jewelryIndexCtrl', ['$scope', '$location', 'Jewelry', function($scope, $location, Jewelry) {
		$scope.jewelries = Jewelry.query();
		$scope.jewelryShow = function(id) {
			$location.url('/'+ id );
		}	

	}])
	.controller('jewelryShowCtrl', ['$scope', '$location', '$routeParams', 'Jewelry', function($scope, $location, $routeParams, Jewelry) {
		$scope.jewelryShow = Jewelry.get({id: $routeParams.id});
		$scope.jewelries = Jewelry.query();
		
		$scope.backToIndex = function(id) {
			$location.url('/#'+ id);
			
		}

		$scope.jewelryNext = function(id) {
			$location.url('/'+ id );
		}	
	}])
	.animation('.list-in', [function() {
		return {
			enter: function(element, doneFn) {
				TweenMax.staggerFrom([element[0]], 1, { opacity: 0, scale: 0, delay: 1 }, 0.2);
			}, 
			leave: function(element, doneFn) {
				// TweenMax.staggerFrom(element, 1, { opacity: 1, scale: 1, delay:0, onComplete: doneFn }, 0.2);
			}
		}
	}]);






})();
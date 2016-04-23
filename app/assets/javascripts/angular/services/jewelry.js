(function() {

	var jewelryServices = angular.module('JewelryServices', ['ngResource']);

	jewelryServices.factory('Jewelry', ['$resource', function($resource) {
		return $resource('jewelries/:id', {id: '@id'}, {update: {method: 'PUT'}});
	}]);




})();
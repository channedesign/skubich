(function() {

	var adminServices = angular.module('AdminServices', ['ngResource']);

	adminServices.factory('Admin', ['$resource', function($resource) {
		return $resource('jewelries/:id', {id: '@id'}, {update: {method: "PUT"}});
	}]);
	


})();
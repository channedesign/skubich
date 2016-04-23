(function() {

	var jewelryApp = angular.module('JewelryApp', [
			'ngRoute',
			'templates',
			'JewelryController',
			'JewelryServices'
		]);



	jewelryApp.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
		$httpProvider.defaults.headers.common.Accept = "application/json";
	}]);	

	jewelryApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'index.html',
				controller: 'jewelryIndexCtrl',	
			}).
			when('/:id', {
				templateUrl: 'show.html',
				controller: 'jewelryShowCtrl',
			}).
			otherwise({redirectTo: '/'});
	}]);

})();
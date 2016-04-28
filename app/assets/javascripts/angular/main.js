(function() {

	var jewelryApp = angular.module('JewelryApp', [
			'ngRoute',
			'templates',
			'JewelryController',
			'JewelryServices', 
			'JewelryDirective'
		]);



	jewelryApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
		$httpProvider.defaults.headers.common.Accept = "application/json";
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
	}])
	.run(['$rootScope', '$location', '$anchorScroll', '$routeParams', '$timeout', function($rootScope, $location, $anchorScroll, $routeParams, $timeout) {
	  	$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    		if ($location.hash()) {
    			$timeout(function() {
		            
		            $location.hash();
		            $anchorScroll();
		            
		        }, 500);
    		} 
    		
  		});
	}])

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////

	var adminApp = angular.module('AdminApp', [
			'ngRoute',
			'templates',
			'AdminController',
			'AdminServices',
			'ui.sortable'
		]);

	adminApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
		$httpProvider.defaults.headers.common.Accept = "application/json";
		$routeProvider.
			when('/', {
				templateUrl: 'admin.html',
				controller: 'adminCtrl',	
			}).
			when('/:id', {
				templateUrl: 'admin_edit.html',
				controller: 'adminEditCtrl',
			}).
			otherwise({redirectTo: '/'});
	}]);

})();
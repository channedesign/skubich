(function() {

	angular.module('AdminDirective', [])
	.directive('formAdmin', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/form_partial.html',
			scope: {value: '='}
		}
	})
	.directive('jewelryShowText', function() {
		return {
			restrict: 'E', 
			templateUrl: 'partials/jewelry_show_text_partial.html',
			scope: {value: '='}
		}
	})

})();
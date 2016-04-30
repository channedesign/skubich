(function() {

	var jewelryDirective = angular.module('JewelryDirective', ['ngAnimate']);

	jewelryDirective.directive('animateFromLeft', function() {
		return {
			link: function(scope, element) {
				TweenMax.from(element, 0.5, {x: -1500});
			}
		}
	})
	.directive('animateFromRight', function() {
		return {
			link: function(scope, element) {
				var element1 = element.children()[0],
					element2 = element.children()[1],
					element3 = element.children()[2];
				TweenMax.staggerFrom([element1, element2, element3], 0.5, {x: 1500 }, 0.4);
			}
		}
	})
	.directive('fadeIn', function() {
		return {
			link: function(scope, element) {
				TweenMax.from(element, 2, { opacity: 0, delay: 1});
			}
		}
	})
	
})();
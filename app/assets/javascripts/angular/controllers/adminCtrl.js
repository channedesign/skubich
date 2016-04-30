var adminController = angular.module('AdminController', ['ngFileUpload', 'ngAnimate']);

adminController.controller('adminCtrl', ['$scope', '$location', '$http', 'Admin', 'Upload', function($scope, $location, $http, Admin, Upload) {
	
	$scope.jewelries = Admin.query();
	
	$scope.logout = function(data) {
		$http.delete('/admins/sign_out', data).then(function(resp) {
			window.location = "http://www.skubichjewelry.com";
		});
		
	}

	$scope.addJewelry = function() {
		$http.post('/jewelries.json', $scope.newJewelry).then(function(resp) {
			$http.get('/jewelries/'+ resp.data.id +'.json').then(function(resp) {
	    		$scope.jewelries[$scope.jewelries.length-1] = resp.data;
	    	});
	    	$scope.jewelries.push($scope.newJewelry);
			$scope.newJewelry = {};
		})
		$scope.showJewelryForm = false;
	}

	$scope.cancel = function() {
		$scope.newJewelry = {};
		$scope.showJewelryForm = false;
	}

	$scope.editJewelry = function(id) {
		$location.url('/' + id)
	}

	$scope.deleteJewelry = function(index) {
		$scope.compressionFinished = true;
		var id = $scope.jewelries[index].id;
		$http.delete('/jewelries/'+ id +'.json').then(function(resp) {
			$scope.jewelries.splice(index, 1);
			$scope.compressionFinished = false;
		})
	}

	$scope.sorting = {
		cursor: 'move',
		stop: function(e, ui) {
			$.post('/jewelries/sort.json', $(this).sortable('serialize'));
		}
	}

	$scope.uploadImage = function(file, jewelry) {
		$scope.compressionFinished = true;
		Upload.upload({
		    url: '/jewelries/' + jewelry.id + '.json',
		    method: 'PUT',
		    headers: { 'Content-Type': false },
		    fields: {
		      	'jewelry[title]': jewelry.title,
		      	'jewelry[body]': jewelry.body,
		        'jewelry[image]': file
		      	},
		    file: file,
		    sendFieldsAs: 'json'
	    }).then(function (resp) {
	    	$http.get('/jewelries/'+ jewelry.id +'.json').then(function(resp) {
	    		jewelry.image_url_min = resp.data.image_url_min;
	    		$scope.compressionFinished = false;
	    	});
	     	console.log('Success ' + resp.config.file.name + 'uploaded. Response: ' + resp.data);
	    }, function (resp) {
	      	console.log('Error status: ' + resp.status);
	    }, function (evt) {
	    	file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	    });
	}


}])
.animation('.formAnim', [function() {
	return {
		addClass: function(element, className, done) {
			if (className !== "ng-hide") {
        		done();
        		return;
      		}
			TweenMax.set(element, { height: 450, autoAlpha: 1 });
			TweenMax.to(element, 0.5, {  height: 0, autoAlpha: 0, onComplete: done  });

		}, 
		removeClass: function(element, className, done) {
			if (className !== "ng-hide") {
		        done();
		        return;
		    }
			TweenMax.set(element, { height: 0, autoAlpha: 0 });
			TweenMax.to(element, 0.5, {  height: 450, autoAlpha:1, onComplete: done });
		}
	}
}])
.controller('adminEditCtrl', ['$scope', '$location', '$routeParams', 'Admin', function($scope, $location, $routeParams, Admin) {
	$scope.jewelry = Admin.get({id: $routeParams.id});

	$scope.updateJewelry = function(index) {
		var jewelry = Admin.update($scope.jewelry);
		$location.url('/');
	}


}]);
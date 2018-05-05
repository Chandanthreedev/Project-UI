(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('moreController', [
			'$scope','$stateParams','$state','$http',
			function($scope,$stateParams, $state,$http) {
				console.log($stateParams.username);
				var username =  $stateParams.username;
				$scope.person=[]
				var da={'username':username}
				$http({
					method:'POST',
					url:'http://be27d057.ngrok.io/getuserdetails',
					data:da
				})

				.success(
					function(res) {
						$scope.person = res.contact;
						console.log($scope.person);
					}
				)
				.error(
					function(err) {
						console.log(err);
					}
				)
			$scope.delete=function($http,id){
				var d={'username':username,'number':number}
				$http({
					method:'POST',
					url:'http://23350472.ngrok.io/delete',
					data:d
				})

			}
            
				
			}
		]);
}());
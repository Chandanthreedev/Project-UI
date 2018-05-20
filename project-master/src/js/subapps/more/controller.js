(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('moreController', [
			'$scope','$stateParams','$state','$http','$location',
			function($scope,$stateParams, $state,$http,$location) {
				console.log($stateParams.username);
				var username=  $stateParams.username;
				$scope.person=[]
				var da={'username':username}
				$http({
					method:'POST',
					url:'https://cryptic-brushlands-32872.herokuapp.com/getuserdetails',
					data:da
				})

				.success(
					function(res) {
						$scope.person = res.contact;
						console.log($scope.person);
						alert("Greetings "+ username);
						console.log(res);
					}
				)
				.error(
					function(err) {
						console.log(err);
					}
				)
			$scope.delete=function(no){
				console.log(no)
				var d={'username':username}
				$http({
					method:'POST',
					url:'https://cryptic-brushlands-32872.herokuapp.com/getuserdetails',
					data:d
				})
				.success(
					function(res){
						var a=res.contact;
						a=a.filter((item)=>item.number!==no);
						var d={'username':username,'conts':a};
						$http(
							{
								method:"POST",
								url:'https://cryptic-brushlands-32872.herokuapp.com/delete',
								data:d
 
							})
							.success(
								function(res){
									location.reload();
                                    

								}
							
						)
					}
                   


				)

			}
			$scope.add=function(){
				var ui="/more/"+username+"/addcontacts"
				$location.path(ui)
			}
            $scope.logout=function(){
				var ui="/login"
				$location.path(ui)
			}
				
			}
		]);
}());
(function() {
    'use strict';
        angular.module('ngSeedApp.controllers')
       
        .controller('signupController', [
            '$scope', '$http', '$location',
            
            function($scope, $http,$location) {
                $scope.data = '';
                $scope.test = function() {
                    var user = $('#username').val();
                    var user1 = $('#pass').val();
                    var user2 = $('#mob').val();
                    $scope.test = 'hello';
                    var da = { 'username':user,'password':user1,'mobile':user2 };
                    $http({
                            method: 'POST',
                            url: 'https://cryptic-brushlands-32872.herokuapp.com/signup',
                            data: da
                        })
                        .success(
                            function(res) {
                                alert("Successfully Registered!!!!")
                                var rut = "/login";
                                $location.path(rut);

                            }
                        )
                        .error(
                            function(err) {
                                console.log(err);
                                alert("Failed to register")
                            }
                        )
                }
               
                 $scope.click=function(){
                     $location.path("/login")
                 }   
                    
                    
                    
                    
                    
                    
                    
                }
                
            
        ]);
}());
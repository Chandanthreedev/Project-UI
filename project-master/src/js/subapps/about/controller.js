(function() {
    'use strict';
        angular.module('ngSeedApp.controllers')
       /*p.config(['$locationProvider', '$urlRouterProvider',
        function($locationProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');


            $locationProvider.when({
                url:'/login',
                controller: 'homeController',
                templateUrl: 'src/js/subapps/home/template.html'
            })}])*/
        .controller('signupController', [
            '$scope', '$http', 
            
            function($scope, $http) {
                $scope.data = '';
                $scope.test = function() {
                    var user = $('#username').val();
                    var user1 = $('#pass').val();
                    var user2 = $('#mob').val();
                    $scope.test = 'hello';
                    var da = { 'username':user,'password':user1,'mobile':user2 };
                    $http({
                            method: 'POST',
                            url: 'http://d316c19a.ngrok.io/signup',
                            data: da
                        })
                        .success(
                            function(res) {
                                console.log(res);
                            }
                        )
                        .error(
                            function(err) {
                                console.log(err);
                            }
                        )
                }
                /*$scope.login=function(path){
                    $location.path(path)
                    
                    
                    }*/
                    
                    
                    
                    
                    
                    
                }
                
            
        ]);
}());
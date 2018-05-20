(function() {
    'use strict';
    angular.module('ngSeedApp.controllers')
        .controller('homeController', [
                '$scope', '$http','$location',

                function($scope, $http,$location) {
                    $scope.data = '';
                    $scope.test = function() {
                        var user = $('#username').val();
                        var user1 = $('#pass').val();
                        $scope.test = 'hello';
                  
                        var da = { 'username':user,'password':user1};
                        $http({
                                method: 'POST',
                                url: 'https://cryptic-brushlands-32872.herokuapp.com/login',
                                data: da
                            })
                            .success(
                                function(res) {
                                    var rut = "/more/"+user;
                                    $location.path(rut);
                                     }
                            )
                            .error(
                                function(err) {
                                    console.log(err);
                                    alert("Please Enter Valid Username and Password")
                                }
                            )
                    }
                }
            ]);

}());
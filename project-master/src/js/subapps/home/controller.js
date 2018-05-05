(function() {
    'use strict';
    angular.module('ngSeedApp.controllers')
        .controller('homeController', [
                '$scope', '$http',

                function($scope, $http) {
                    $scope.data = '';
                    $scope.test = function() {
                        var user = $('#username').val();
                        var user1 = $('#pass').val();
                        $scope.test = 'hello';
                  
                        var da = { 'username':user,'password':user1};
                        $http({
                                method: 'POST',
                                url: 'http://be27d057.ngrok.io/login',
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
                }
            ]);

}());
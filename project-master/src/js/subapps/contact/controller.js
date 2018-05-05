(function() {
    'use strict';
    angular.module('ngSeedApp.controllers')
        .controller('contactController', [
            '$scope', '$http','$stateParams', 
            
            function($scope, $http,$stateParams) {
                $scope.data = '';
                $scope.click = function() {
                    var user = $('#name').val();
                    var user1 = $('#number').val();
                    var username =  $stateParams.username;
                    var da = { 'name':user,'mobile':user1,'username':username};

                    $http({
                            method: 'POST',
                            url: 'http://be27d057.ngrok.io/addconts',
                            data: da,
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
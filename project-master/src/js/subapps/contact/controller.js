(function() {
    'use strict';
    angular.module('ngSeedApp.controllers')
        .controller('contactController', [
            '$scope', '$http','$stateParams', '$location',
            
            function($scope, $http,$stateParams,$location) {
                $scope.data = '';
                $scope.click = function() {
                    var user = $('#name').val();
                    var user1 = $('#number').val();
                    var username =  $stateParams.username;
                    var da = { 'name':user,'mobile':user1,'username':username};

                    $http({
                            method: 'POST',
                            url: 'https://cryptic-brushlands-32872.herokuapp.com/addconts',
                            data: da,
                        })
                        .success(
                            function(res) {
                                var rut = "/more/"+username;
                                $location.path(rut);
                                alert("You have added a new contact!!")
                            
                            }
                        )
                        .error(
                            function(err) {
                                console.log(err);
                                alert("Failed to add contact!!")
                            }
                        )
                }
            }
        ]);
}());
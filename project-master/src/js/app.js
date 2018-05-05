(function() {
    'use strict';

    //Create a app level module which has dependencies on controllers and components
    var ngPrototype =
        angular.module('ngSeedApp', [
            'ui.router',
            'ngSeedApp.controllers'
        ]);

    ngPrototype.run(['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {

                //Add references to $state and $stateParams to the $rootScope
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');


                $stateProvider.state("home", {
                    url: "/login",
                    controller: 'homeController',
                    templateUrl: 'src/js/subapps/home/template.html'
                }).state("signup", {
                    url: "/",
                    controller: 'signupController',
                    templateUrl: 'src/js/subapps/about/template.html'
                }).state("more", {
                    url: "/more/:username",
                    controller: 'moreController',
                    templateUrl: 'src/js/subapps/more/template.html'
                }).state("contact", {
                    url: "/more/:username/addcontacts",
                    controller: 'contactController',
                    templateUrl: 'src/js/subapps/contact/template.html'
                });
                
            }
        ]);
}());
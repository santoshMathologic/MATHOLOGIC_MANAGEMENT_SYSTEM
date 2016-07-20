'use strict';

var api = {
    protocol: 'http',
    server: 'localhost',
    port: 4000,
    baseUrl: '/api/v1',
    loginUrl: '/login',
    registerUrl: '/register'
};

var apiUrl = api.protocol + '://' + api.server + ':' + api.port + api.baseUrl;
var apiLoginUrl = api.protocol + '://' + api.server + ':' + api.port + api.loginUrl;
var apiRegisterUrl = api.protocol + '://' + api.server + ':' + api.port + api.registerUrl;
var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');

var app = angular
    .module('matApp', [
        'oc.lazyLoad',
        'ngRoute',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'ngCookies'

    ]);
app.config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });



        $urlRouterProvider.otherwise('/home/dashboard');
        $stateProvider
            .state('home', {
                templateUrl: 'ng/directives/home/home.directive.html',
                url: '/home',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'matApp',
                                files: [
                                    'ng/directives/home/home.js'
                                ]
                            })
                    }
                }
            })

            .state('home.login', {
                templateUrl: 'ng/directives/login/login.directive.html',
                url: '/login',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'matApp',
                                files: [
                                    'ng/service/loginService.js',
                                    'ng/directives/login/login.js',

                                ]
                            })
                    }
                }
            })
            .state('home.register', {
                templateUrl: 'ng/directives/register/register.directive.html',
                url: '/register',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'matApp',
                                files: [
                                    'ng/directives/register/register.js',

                                ]
                            })
                    }
                }
            }).state('home.dashboard',
            {
                template: '<dashboard></dashboard>',
                url: '/dashboard',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'matApp',
                                files: [
                                    'ng/directives/dashboard/dashboard.js',
                                    'ng/directives/dashboard/header/header.js',
                                    'ng/directives/dashboard/footer/footer.js',
                                    'ng/directives/dashboard/sidebar/sidebar.js',

                                ]
                            })
                    }
                }
            }).state('home.dashboard.users',
            {
                templateUrl: 'ng/directives/dashboard/User/user.directive.html',
                url: '/users',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'matApp',
                                files: [
                                    'ng/directives/dashboard/User/user.js'

                                ]
                            })
                    }
                }
            }).state('home.dashboard.userPlans', {
                templateUrl: "ng/directives/dashboard/UserPlan/userPlan.directive.html",
                url: "/userPlan",
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: "matApp",
                            files: [
                                'ng/directives/dashboard/UserPlan/userPlan.js',
                            ]
                        })
                    }
                }
            }).state('home.Opportunity', {
                url: '/Opportunity',
                templateUrl: '/ng/directives/create.html',
                controller:function($scope){


                    
                    console.log("In opportunity");
                }
               
            });

    }]);
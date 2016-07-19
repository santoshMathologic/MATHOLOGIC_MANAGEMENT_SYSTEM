angular.module('matApp')
    .directive('login', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/login/login.tmpl.html',
            controller: function ($scope, $state, $window, $location) {


                $scope.login = function () {
                    $state.go('home.dashboard');

                }





            }

        };
    }]);
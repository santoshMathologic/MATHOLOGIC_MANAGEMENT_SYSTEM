angular.module('matApp')
    .directive('login', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/login/login.tmpl.html',
            controller: function ($scope, $state, $window, $location,loginService) {

                var userObj ={
                  username : "",
                  password :""

                }


                $scope.login = function () {
                    loginService.doLogin(userObj.username,userObj.password);
                    $state.go('home.dashboard');

                }





            }

        };
    }]);
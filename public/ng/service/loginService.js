angular.module('matApp').factory('loginService', function ($scope, $http, $state, $resource) {

    var auth = {

        dologin: function (userName, password) {

            console.log("" + userName);
            console.log("" + password);


        }

    }
    return auth;
});
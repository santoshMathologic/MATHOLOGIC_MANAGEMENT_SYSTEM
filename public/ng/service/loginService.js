var app = angular.module('matApp');
app.factory('AuthFactory', function ($state, $window, $http) {
    var auth = {
        doLogin: function (username, password) {

            console.log(""+username);
            console.log(""+password);
        },

        logout: function () {
        }
    }
    return auth;
});



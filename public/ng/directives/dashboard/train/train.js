angular.module('matApp').directive('train', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/train/train.tmpl.html',
        controller: function ($scope, $state, $window, $location, $http) {


        }

    }
}]);
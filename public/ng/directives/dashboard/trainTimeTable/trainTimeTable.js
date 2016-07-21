angular.module('matApp').directive('trainTime', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/trainTimeTable/trainTimeTable.tmpl.html',
        controller: function ($scope, $state, $window, $location, $http,$resource) {

            $scope.Days = Days;
            $scope.trainNo = ($state.params.trainNo) ? $state.params.trainNo : '';
            $scope.startDay = ($state.params.startDay) ? $state.params.startDay : '';

            console.log($scope.trainNo)
            console.log($scope.startDay);



        }

    }
}]);
angular.module('matApp').directive('drivingDuty', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/drivingDuty/drivingDuty.tmpl.html',
        controller: function ($scope, $state,$q, $window, $location, $http, $resource) {


            $scope.trains = [];

            
            $scope.searchTrain = function (term) {
            
                if (!term) {
                    return $scope.trains;
                }
                var deferred = $q.defer();
              /*  SpringDataRestApi.get('/api/trains/search/findByTrainNo?trainNo=' + term, ['fromStation', 'toStation']).then(
                    function (response) {
                        $scope.trains = response._embedded.trains;
                        deferred.resolve($scope.trains);
                    }
                );
                */
                
                return deferred.promise;
            };




        }

    }
}]);
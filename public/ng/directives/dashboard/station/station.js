angular.module('matApp').directive('station', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/station/station.tmpl.html',
        controller: function ($scope, $state, $window, $location, $http, $resource) {

            $scope.Days = Days;
            $scope.stationsList = [];
            
            $scope.query = {
                sortBy: 'stationCode',
                limit: 30,
                page: 1,
           
            };
            var apiStations = "http://localhost:3000/stations/api/v1/stations"

            $scope.getStation = function () {
                $http.get(apiStations, { params: $scope.query })
                    .then(function (response) {
                        $scope.stationsList  = response.data.results;
                        $scope.currentPage = response.data.current;
                        $scope.perPage = response.data.options.perPage;
                        $scope.totalPages = response.data.last;
                        $scope.totalRecords = response.data.count;
                    });
            }


            $scope.getStation();



        }

    }
}]);
angular.module('matApp').directive('trainType', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/trainType/trainType.tmpl.html',
        controller: function ($scope, $state, $window, $location, $http, $resource) {

            $scope.Days = Days;
            $scope.trainTypesList = [];
            
            $scope.query = {
                sortBy: 'name',
                limit: 30,
                page: 1,
           
            };
            var apiTypes = "http://localhost:3000/api/v1/trainTypes"

            $scope.getType = function () {
                $http.get(apiTypes, { params: $scope.query })
                    .then(function (response) {
                        $scope.trainTypesList  = response.data.results;
                        $scope.currentPage = response.data.current;
                        $scope.perPage = response.data.options.perPage;
                        $scope.totalPages = response.data.last;
                        $scope.totalRecords = response.data.count;
                    });
            }


            $scope.getType();



        }

    }
}]);
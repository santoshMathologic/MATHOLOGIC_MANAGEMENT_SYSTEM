angular.module('matApp').directive('crewType', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/crewType/crewType.tmpl.html',
        controller: function ($scope, $state, $window, $location, $http, $resource) {

            $scope.Days = Days;
            $scope.crewTypeList = [];
            
            $scope.query = {
                sortBy: 'name',
                limit: 30,
                page: 1,
           
            };
            var apicrewType = "http://localhost:3000/api/v1/crewTypes"

            $scope.getCrewType = function () {
                $http.get(apicrewType, { params: $scope.query })
                    .then(function (response) {
                        $scope.crewTypeList  = response.data.results;
                        $scope.currentPage = response.data.current;
                        $scope.perPage = response.data.options.perPage;
                        $scope.totalPages = response.data.last;
                        $scope.totalRecords = response.data.count;
                    });
            }


            $scope.getCrewType();



        }

    }
}]);
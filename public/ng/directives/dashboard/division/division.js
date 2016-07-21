angular.module('matApp').directive('division', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/division/division.tmpl.html',
        controller: function ($scope, $state, $window, $location, $http, $resource) {

            $scope.Days = Days;
            $scope.divisionList = [];
            
            $scope.query = {
                sortBy: 'name',
                limit: 30,
                page: 1,
           
            };
            var apidivision = "http://localhost:3000/divisions/api/v1/divisions"

            $scope.getdivision = function () {
                $http.get(apidivision, { params: $scope.query })
                    .then(function (response) {
                        $scope.divisionList  = response.data.results;
                        $scope.currentPage = response.data.current;
                        $scope.perPage = response.data.options.perPage;
                        $scope.totalPages = response.data.last;
                        $scope.totalRecords = response.data.count;
                    });
            }


            $scope.getdivision();



        }

    }
}]);
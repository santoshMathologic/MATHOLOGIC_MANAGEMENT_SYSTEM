angular.module('matApp')
    .directive('userPlan', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/UserPlan/userPlan.tmpl.html',
            controller: function ($scope, $state, $window, $location, $http) {

               $scope.query = {
                    sortBy: 'planName',
                    limit: 10,
                    page: 1,

                };
                var apiUserPlanList = "http://localhost:3000/plans/api/v1/plans"

                $scope.getUserPlanList = function () {
                    $http.get(apiUserPlanList, { params: $scope.query })
                        .then(function (response) {
                            $scope.userPlanList = response.data.results;
                            $scope.currentPage = response.data.current;
                            $scope.perPage = response.data.options.perPage;
                            $scope.totalPages = response.data.last;
                            $scope.totalRecords = response.data.count;
                        });
                } 


                $scope.getUserPlanList();



            }

        };
    }]);
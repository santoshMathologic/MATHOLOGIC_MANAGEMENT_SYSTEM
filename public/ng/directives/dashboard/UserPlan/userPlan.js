angular.module('matApp')
    .directive('userPlan', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/UserPlan/userPlan.tmpl.html',
            controller: function ($scope, $state,$timeout,$window, $location, $http, $confirm) {

                $scope.options = {};
                $scope.query = {
                    sortBy: 'planName',
                    limit: 10,
                    page: 1,

                };
                $scope.myvar =false;
                var apiUserPlanList = "http://localhost:3000/api/v1/userPlan"

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

                $scope.removeUserPlan = function (plan) {

                    $timeout(function () {
                        var index = $scope.userPlanList.indexOf(plan);
                        $scope.userPlanList.splice(index, 1);
                        //$scope.myvar = true;
                    }, 1000);

 //$scope.myvar = false;
                    /*  $confirm(
                          { // Confirm PopUp to Remove fields from
                              // DB
                              text: 'Are you sure you want to delete all item of this train?',
                              headerClass: 'confirm-header-danger',
                              okButtonClass: "btn-danger"
                          }).then(function (successResponse) {
  
  
                          }, function (errorResponse) {
  
                          });
                          */
                }

                $scope.getUsers = function (searchquery, timeout) {
                    return $http.get("http://localhost:3000/api/v1/admin/users/searchByQuery/" + searchquery);
                }

                $scope.setPlan = function () {
                    $state.go('home.dashboard.smalldashboard');
                }

            }

        };
    }]);
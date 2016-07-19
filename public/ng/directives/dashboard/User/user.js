angular.module('matApp')
    .directive('user', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/User/user.tmpl.html',
            controller: function ($scope, $state, $window, $location, $http) {

                $scope.query = {
                    sortBy: 'userName',
                    limit: 10,
                    page: 1,

                };
                var apiUserListUrl = "http://localhost:3000/users/api/v1/admin/users"

                $scope.getUserList = function () {
                    $http.get(apiUserListUrl, { params: $scope.query })
                        .then(function (response) {
                            $scope.trainsList = response.data.results;
                            console.log($scope.trainsList);
                            $scope.currentPage = response.data.current;
                            $scope.perPage = response.data.options.perPage;
                            $scope.totalPages = response.data.last;
                            $scope.totalRecords = response.data.count;
                        });
                }


                $scope.getUserList();

                $scope.$watch('query', function(newValue, oldValue) {
                    if (!oldValue) {
                        bookmark = $scope.query.page;
                    }

                    if (newValue !== oldValue) {
                        $scope.query.page = newValue.page;
                    }

                    if (!newValue) {
                        $scope.query.page = bookmark;
                    }

                      $scope.getUserList();
                }, true);



            }

        };
    }]);
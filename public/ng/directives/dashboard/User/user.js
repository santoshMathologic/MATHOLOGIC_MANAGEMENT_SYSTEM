angular.module('matApp')
    .directive('user', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/User/user.tmpl.html',
            controller: function ($scope, $state, $window, $location, $http, toaster) {

                $scope.userdetails = {};

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

                $scope.$watch('query', function (newValue, oldValue) {
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



                $scope.saveUser = function (userobj) {

                    console.log("" + userobj.username);
                    toaster
                        .pop({
                            type: 'success',
                            title: 'User Save Successfully!!!!!',
                            body: 'User Save Successfully!!!!! !!!'
                        });


                }



                $scope.test = function () {
                    var nonDBFieldsArray = ['limit', 'page', 'order', 'sectionType'];
                    var numberFilterArray = ['stopNo', 'dayOfJourney', 'distance', 'startDay'];
                    var booleanFields = ['isLocoChange', 'markDelete'];
                    var dbArrayFields = ['passingStations'];

                    for (var query in nonDBFieldsArray) {

                        if (nonDBFieldsArray.indexOf(query) === -1) {
                            console.log(nonDBFieldsArray[query]);
                        }

                    }
                }
                $scope.test();



            }

        };
    }]);
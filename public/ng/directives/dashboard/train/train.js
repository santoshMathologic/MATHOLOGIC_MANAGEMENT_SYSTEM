angular.module('matApp').directive('train', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/train/train.tmpl.html',
        controller: function ($scope, $state, $window, $location, $http) {

            $scope.trainsList = [];
            $scope.Days = Days;
            $scope.query = {
                    sortBy: 'trainNo',
                    limit: 10,
                    page: 1,

                };
                var apiTrain = "http://localhost:3000/api/v1/trains"

                $scope.getTrainList = function () {
                    $http.get(apiTrain, { params: $scope.query })
                        .then(function (response) {
                            $scope.trainsList = response.data.results;
                            $scope.currentPage = response.data.current;
                            $scope.perPage = response.data.options.perPage;
                            $scope.totalPages = response.data.last;
                            $scope.totalRecords = response.data.count;
                        });
                }


                $scope.getTrainList();

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

                    $scope.getTrainList();
                }, true);


        }

    }
}]);
angular.module('matApp').directive('drivingSection', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/drivingSection/drivingSection.tmpl.html',
        controller: function ($scope, $state, $log, $q, $window, $location, $http, toaster, $confirm, $timeout, $resource) {

            $scope.trainsList = [];
            $scope.Days = Days;
            $scope.trainNo = ($state.params.trainNo) ? $state.params.trainNo : 0;
            $scope.startDay = ($state.params.startDay) ? $state.params.startDay : '';
            $scope.selectedTrain = {
                trainNo: $scope.trainNo,
                startDay: $scope.startDay
            };
            $scope.selectedCssClass = 'selected-train-section';

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



            $scope.getTrainTimeTable = function (trainItem) {

                $log

            }
            $scope.getSelectedTrainCss = function () {


            }


        }

    }
}]);
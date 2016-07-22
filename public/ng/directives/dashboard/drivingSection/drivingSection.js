angular.module('matApp').directive('drivingSection', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/drivingSection/drivingSection.tmpl.html',
        controller: function ($scope, $filter, $state, $log, $q, $window, $location, $http, toaster, $confirm, $timeout, $resource) {

            $scope.trainsList = [];
            $scope.Days = Days;
            $scope.trainNo = ($state.params.trainNo) ? $state.params.trainNo : 0;
            $scope.startDay = ($state.params.startDay) ? $state.params.startDay : '';

            $scope.refreshDrivingSection = true;


            $scope.itemsPerPage = 200;

            $scope.selectedTrain = {
                trainNo: $scope.trainNo,
                startDay: $scope.startDay
            };
            $scope.selectedCssClass = 'selected-train-section';

            $scope.getters = {
                trainNo: function (value) {
                    //this will sort by the length of the first name string
                    return value.trainNo.length;
                }
            }

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
                if ($scope.selectedTrain.trainNo != trainItem.trainNo || $scope.selectedTrain.startDay != trainItem.runningDays[0]) {
                    $scope.selectedTrain = {
                        trainNo: trainItem.trainNo,
                        startDay: Days[trainItem.runningDays[0]],
                        cssClass: $scope.selectedCssClass
                    };

                }

            

            }
            $scope.getSelectedTrainCss = function (trainItem) {
                if ($scope.selectedTrain.trainNo == trainItem.trainNo
                    && $scope.selectedTrain.startDay == Days[trainItem.runningDays[0]]) {
           //  $scope.refreshDrivingSection = ($scope.refreshDrivingSection) ? false : true;
                       //  $scope.getTrainList();
                    return $scope.selectedTrain.cssClass;
                }
                return "";

            }


        }

    }
}]);
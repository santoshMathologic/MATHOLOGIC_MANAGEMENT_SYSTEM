angular.module('matApp').directive('upload', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/Uploads/uploads.tmpl.html',
        controller: function ($scope, $state, $window, Upload, $location, $timeout, $http, $resource) {

            $scope.saveUpload = function () {

                // var elem = angular.element(document.querySelector('[id="myBar"]'));
                //var width = 0;
                //  $timeout(function () {
                //      frame(width, elem);
                //  }, 2000)

                move();
            }

            function move() {
              //var elem = angular.element(document.querySelector('[id="myBar"]'));
               var elem = document.getElementById("myBar");
                var width = 0;
                var id = setInterval(frame, 50);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
    angular.element(document.querySelector('[id="myP"]')).addClass("w3-text-green w3-animate-opacity");
    angular.element(document.querySelector('[id="myP"]')).innerHTML = "Successfully uploaded 10 photos!";

                        //document.getElementById("myP").className = "w3-text-green w3-animate-opacity";
                        //document.getElementById("myP").innerHTML = "Successfully uploaded 10 photos!";
                    } else {
                        width++;
                        elem.style.width = width + '%';
                        var num = width * 1 / 10;
                        num = num.toFixed(0)
                        document.getElementById("demo").innerHTML = num;
                        document.getElementById("demo1").innerHTML = width * 1 + "%";
                        
                    }
                }
            }

            function frame(width, elem) {
                var w = width;
                if (w >= 100) {
                    angular.element(document.querySelector('[id="myP"]')).addClass("w3-text-green w3-animate-opacity");
                    angular.element(document.querySelector('[id="myP"]')).innerHTML = "Successfully uploaded 10 photos!";

                } else {
                    w++;
                    elem.style.w = w + '%';
                    var num = w * 1 / 10;
                    num = num.toFixed(0)
                    angular.element(document.querySelector('[id="demo"]')).innerHTML = num;


                }

            }





        }

    }
}]);
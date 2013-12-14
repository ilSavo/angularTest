'use strict';

angular.module('compare2App')
  .controller('NationslistCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.nations = [];
    $scope.compare = [];

    $http.get('/data/nations.json')
      .success( function(data) {
        $scope.status = true;
        $scope.nations = data;

        angular.forEach($scope.nations, function (value, key) {
          //console.log($scope.nations[key].population + " / " + $scope.nations[key].area);
          $scope.nations[key].area = parseInt($scope.nations[key].area);
          $scope.nations[key].population = parseInt($scope.nations[key].population);
          $scope.nations[key].density = value.population / value.area;
          $scope.nations[key].selected = false;
          //console.log($scope.nations[key].population / $scope.nations[key].area);
        });
      })
      .error( function() {
        console.log("Error");
      });
  }]);

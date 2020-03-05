angular.module('starter.controllers', [])

  .controller("DashCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
    var ref = firebase.database().ref();
    var obj = $firebaseObject(ref);


    obj.$watch(function() {
      var accum = obj.rotation + obj.uturn;

      if (accum < 10) {
        $scope.color = '#33cc33';
        $scope.text = '우수';
      } else if (accum < 20) {
        $scope.color = '#33ccff';
        $scope.text = '양호';
      } else if (accum < 30) {
        $scope.color = '#ffff00';
        $scope.text = '보통';
      } else if (accum < 40) {
        $scope.color = '#ff9900';
        $scope.text = '미달';
      } else {
        $scope.color = '#cc3300';
        $scope.text = '위험';
      }
    });



    // To make the data available in the DOM, assign it to $scope
    $scope.data = obj;



  }]);

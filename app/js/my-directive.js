var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
  $scope.list = ["one", "two", "three", "four"];
});

/*
 * 自作Directive
 * listからテーブルを作ります。
 */
app.directive('myDirective', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'template.html',
    controller: 'myCtrl'
  };
}]);

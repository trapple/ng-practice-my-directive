var app = angular.module('myApp', []);

/*
 * 普通のController
 */
app.controller('myCtrl', function ($scope) {
  $scope.class = 'hoge';
  $scope.list = ['いち', 'に', 'さん', 'よん'];
});

/*
 * myDirectiveが参照するController
 */
app.controller('dirCtrl', function ($scope) {
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
    controller: 'dirCtrl'
  };
}]);

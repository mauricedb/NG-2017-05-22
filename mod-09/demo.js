(function () {
  angular.module("myApp", []).controller("DemoController", function ($scope) {
    $scope.cat = {
      name: "Zorro"
    };
    $scope.catName = "Sara";
  })
})();
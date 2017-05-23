(function () {
  angular.module("myApp", [])
    .controller('CatEditorController', function ($scope) {

      $scope.cat = {
        name: 'Zorro',
        age: 12
      };

    });

})();
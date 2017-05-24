(function () {
  angular.module("myApp", [])
    .controller('CatController', function ($scope, calc, $http) {
      $scope.cat = {
        name: 'Zorro'
      };

      $scope.$apply();

      $http.get('/api/cats')
        .then(function(rsp){
          $scope.cats = rsp.data;
        })

    })
    .factory('calc', function(){
      return {
        add: function(x, y) {
          return x + y;
        }
      }
    })
    .directive('myLogo', function() {
      return {
        template: '<img src="logo.png" />'
      }
    })

})();

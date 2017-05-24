(function () {
  angular.module("myApp", [])
    .controller('CatController', function () {
      // $scope.cat = {
      //   name: 'Zorro'
      // };

    })
    .factory('calculator', function(){
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
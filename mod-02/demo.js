(function() {
  angular.module("myApp", []).controller("DemoController", ['$scope', '$interval','GetCats' , function($scope, int, GetCats) {
    console.log("in DemoController");

    $scope.now = new Date();

    // setInterval(function(){
    //     $scope.$apply(function(){
    //         $scope.now = new Date();
    //     })
    // }, 1000)

    int(function(){
        $scope.now = new Date();
    }, 1000)

    $scope.cat = {
      name: "Zorro"
    };

    $scope.cats = GetCats.get();
  }])
  .service('GetCats', function(){
      this.get = function(){
        return  [{
            name: "Zorro"
        },{
            name: "Sara"
        }
        ];
      }
  })


})();

(function () {
  angular.module("myApp", [])
    .controller("FirstController", function ($scope, data, $log) {
      $scope.theName = "FirstController";

      $scope.$on('my-trigger', function(){
        $log.log('my-trigger fired')
      })

      $scope.$on('my-other-event', function(){
        console.log('my-other-event fired')
      })

$scope.result = 'Unkown';

      data.getData()
        .then(function(result){
          $scope.result = result;
        });

    })
    .controller("ChildController", function ($scope, $rootScope) {
      $scope.data = [{name:'Zorro', city:'Zoetermeer'}, {name:'Sara', city:'Zoetermeer'}];
      console.log($scope);

      $scope.now = new Date();
      
      $scope.trigger = function(){

        $rootScope.$broadcast('my-trigger', 42);
        $scope.$emit('my-other-event', 1);
      }

    })
    .controller("SecondController", function ($scope) {
      this.cat = {
        name:'Zorro'
      };


      $scope.$on('my-trigger', function(){
        console.log('my-trigger fired')
      })

      $scope.$on('my-other-event', function(){
        console.log('my-other-event fired')
      })


    })
    .service('data', function($q){
      this.getData = function(){
        var d = $q.defer();

        setTimeout(function(){
          d.resolve(42)
        }, 1000);

        return d.promise;
      }
    })


})();
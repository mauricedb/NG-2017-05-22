(function () {
  angular.module("myApp", ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
      // $locationProvider.html5Mode(true);
      
      $routeProvider.when('/cat', {
        controller: 'CatController',
        // template: 'This is a cat'
        templateUrl: '/cat.html'
      })

      $routeProvider.when('/cat/:catName', {
        controller: 'CatDetailsController',
        // template: 'This is a cat'
        templateUrl: '/cat.html',
        resolve: {
          catName: function($route){
            return 'Cat ' + $route.current.params.catName
          }
        }
      })


      $routeProvider.when('/dog', {
        controller: 'DogController',
        // template: 'This is a dog'
        templateUrl: '/dog.html',
        resolve: {
          dogName: function($q){
            // return 'Brutus'
            var d = $q.defer();

            setTimeout(() => d.resolve('Cure puppy'), 2000);

            return d.promise;
          }
        }
      })

      $routeProvider.otherwise({
        redirectTo:'/cat'
      })

    })
    .controller('CatController', function ($scope, $location) {
      console.log('In CatController')
      $scope.seeDog = function(){
        $location.path('/dog')
      }

    })
    .controller('CatDetailsController', function ($scope, catName) {
      console.log('In CatController')
      $scope.catName = catName;
    })
    .controller('DogController', function ($scope, dogName) {
      $scope.dogName = dogName
    });

})();
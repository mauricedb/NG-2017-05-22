
(function() {
  angular.module("myApp", ['ngResource'])
    .controller("MoviesController", function($scope, Movies) {
    // $scope.movies = [
    //   {
    //     title: "2001: A Space Odyssey"
    //   }, {
    //     title: "Star wars"
    //   }
    // ];

    //  Movies.getAllMovies()
    //   .then(movies => $scope.movies = movies)
      
      // $scope.movies = Movies.query()
$scope.movies = [
  Movies.get({movieId: 369557})
]

      // console.log( $scope.movies.length)

      // setTimeout(() => console.log( $scope.movies.length), 1000);
      //  $scope.movies.$promise.then(() =>  console.log( $scope.movies.length));
  })
  // .service('Movies', function($http){
  //   this.getAllMovies = function(){
  //   return $http.get('/api/movies')
  //       .then(rsp => rsp.data)     
  //   }
  // });
  .factory('Movies', function($resource){
    return $resource('/api/movies/:movieId');
  })
})();

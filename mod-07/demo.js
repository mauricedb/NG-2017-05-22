(function() {
  angular
    .module("myApp", [])
    .controller("MainController", function($scope, $interval) {
      $scope.value = 42;
      $scope.catWidth = 128;

      $interval(() => {
        $scope.catWidth++;
      }, 10);
    })
    .directive("myClick", function() {
      return {
        // scope: true,
        scope: {
          myValue: "="
        },
        link: function(scope, el, attrs) {
          console.log("myClick.link()", el, attrs);

          var handler = function() {
            console.log("I was clicked", attrs.myMessage);
            scope.$apply(function() {
              scope.myValue++;
            });
          };

          el.bind("click", handler);

          el.on("$destroy", function() {
            el.unbind("click", handler);
          });
        }
      };
    })
    .directive("myCat", function() {
      return {
        scope: true,
        // template: '<img src="/cat.jpg" width="128" />'
        templateUrl: "/cat.template.html",
        transclude: true,
        link: function(scope, el, attrs) {
          console.log(attrs);
          // scope.imgWidth = attrs.imgWidth || 128;

          // scope.imgWidth = 128;

          scope.$watch("catWidth", function(newValue, oldValue) {
            // console.log(newValue, oldValue);
            scope.imgWidth = newValue;
          });
        }
      };
    });
})();

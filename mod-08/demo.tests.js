describe("The Angular app", function() {
  beforeEach(module("myApp"));

  describe("the calculator", function() {
    it(
      "can add 1 + 1 = 2",
      inject(function(calc) {
        var sum = calc.add(1, 1);

        expect(sum).toBe(2);
      })
    );
  });

  describe("the CatController", function() {
    var scope, ctrl, httpBackend;

    beforeEach(
      inject(function($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        ctrl = $controller("CatController", {
          $scope: scope
        });

        $httpBackend.when("GET", "/api/cats").respond([{ x: 1 }]);
        httpBackend = $httpBackend;
      })
    );

    it("can be created", function() {
      expect(ctrl).toBeDefined();
    });

    it("should have a cat with a name", function() {
      expect(scope.cat.name).toBe("Zorro");
    });

    it("should have cats", function() {
      httpBackend.flush();
      expect(scope.cats).toEqual([{ x: 1 }]);
    });
  });

  describe("the Logo directive", function() {

      it('has an image', inject(function($compile, $rootScope){
        var scope = $rootScope.$new();
          var linkFn = $compile('<my-logo></my-logo>');
          var element = linkFn(scope)

          var src = element.find('img').attr('src')
          expect(src).toBe('logo.png')

      }))
  })
});

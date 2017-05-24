describe("The calculator", function() {
  describe("can add", function() {
    it("1 + 1 = 2", function() {
      var sum = calc.add(1, 1);

      expect(sum).toBe(2);
    });

    it("1 + 2 = 3", function() {
      var sum = calc.add(1, 2);

      expect(sum).toBe(3);
    });

    it("0.1 + 0.2 = 0.3", function() {
      var sum = calc.add(0.1, 0.2);

      expect(sum).toBeCloseTo(0.3, 5);
    });
  });
});

const sum = (a, b) => a + b;

describe("sum function", () => {
  describe("passing cases", () => {
    const shouldPass = [
      { values: [0, 0], expected: 0 },
      { values: [1, 0], expected: 1 },
      { values: [1, 1], expected: 2 },
      { values: [2, 1], expected: 3 },
      { values: [2, 2], expected: 4 },
      { values: [3, 3], expected: 6 },
      { values: [10, 3], expected: 13 },
      { values: [10, 99], expected: 109 }
    ];
    shouldPass.forEach(test => {
      it(`${test.values.join(" + ")} must to be equal ${test.expected}`, () => {
        expect(sum(...test.values)).toEqual(test.expected);
      });
    });
  });

  describe("not passing cases", () => {
    const shouldNotPass = [
      { values: [12, 30], expected: 0 },
      { values: [13, 13], expected: 1 },
      { values: [25, 31], expected: 2 },
      { values: [27, 23], expected: 3 },
      { values: [332, 32], expected: 4 },
      { values: [1046, 23], expected: 12 },
      { values: [11, 343], expected: 11343 },
      { values: [10, 989], expected: 1000 }
    ];
    shouldNotPass.forEach(test => {
      it(`${test.values.join(" + ")} must not to be equal ${
        test.expected
      }`, () => {
        expect(sum(...test.values)).not.toEqual(test.expected);
      });
    });
  });
});

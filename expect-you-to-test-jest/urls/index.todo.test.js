// what do you want to test
// be clear and straight to the point
test.skip("should return empty array if there is no domains", () => {
  // AAA
});

// give context to a group of tests
describe.skip("getListOfAllUrls", () => {
  describe("with no domains", () => {
    it("should return an empty array", () => {
      /* AAA */
    });
  });

  describe("with only default domain", () => {
    it("should return one item array with the default domain", () => {
      /* AAA */
    });
  });

  describe("with only custom domains", () => {
    it("should return an array with the custom domain", () => {
      /* AAA */
    });
  });

  describe("with default and custom domains", () => {
    it("should return an array with all domains", () => {
      /* AAA */
    });
  });
});

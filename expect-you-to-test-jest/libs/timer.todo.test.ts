import { defineTimeout } from "./timer";

describe.skip("Lib: defineTimeout", () => {
  describe("running function", () => {
    it("should run function after time out", () => {
      throw new Error();
    });
  });

  describe("aborting timeout", () => {
    it("should not run function after aborting it", () => {
      throw new Error();
    });
  });
});

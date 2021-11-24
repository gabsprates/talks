import { defineTimeout } from "./timer";

describe("Lib: defineTimeout", () => {
  const milliseconds = 0;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe("running function", () => {
    it("should run function after time out", () => {
      const fn = jest.fn();

      defineTimeout(fn, milliseconds);

      expect(fn).not.toHaveBeenCalled();

      jest.runOnlyPendingTimers();

      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe("aborting timeout", () => {
    it("should not run function after aborting it", () => {
      const fn = jest.fn();

      const abortTimeout = defineTimeout(fn, milliseconds);

      abortTimeout();

      jest.runOnlyPendingTimers();

      expect(fn).not.toHaveBeenCalled();
    });
  });
});

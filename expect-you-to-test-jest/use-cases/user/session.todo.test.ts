describe.skip("Use cases: user/session", () => {
  describe("login", () => {
    it("should start with no user", () => {
      throw new Error();
    });

    describe("success", () => {
      it("should update user state after login [callback]", done => {
        throw new Error();
      });

      it("should update user state after login [return promise.then]", () => {
        throw new Error();
      });

      it("should update user state after login [return expect.resolves]", () => {
        throw new Error();
      });

      it("should update user state after login [async/await]", async () => {
        throw new Error();
      });
    });

    describe("failure", () => {
      it("should not update user state if invalid login [return promise.catch]", () => {
        throw new Error();
      });

      it("should not update user state if invalid login [return expect.rejects]", () => {
        throw new Error();
      });

      it("should not update user state if invalid login [async/await try/catch]", async () => {
        throw new Error();
      });
    });
  });
});

const User = require("./User");

describe("Entity: User", () => {
  const userData = {
    id: "a1b2c3d4",
    name: "Gabriel Prates",
    email: "gabriel.prates@not.spam"
  };

  describe("creation", () => {
    it("should create a user", () => {
      const user = new User(userData);

      expect(user).toMatchObject(userData);
    });
  });

  describe("initials", () => {
    it("should get initials from name", () => {
      const user = new User(userData);

      expect(user.initials).toEqual("GP");
    });

    it("should get ONLY first and last initials from name", () => {
      const user = new User({
        ...userData,
        name: "Gabriel Middle Names Prates"
      });

      expect(user.initials).toEqual("GP");
    });
  });
});

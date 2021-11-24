import UserSession from "./session";

import User from "../../entities/User";
import { userData } from "../../entities/mocks";
import { UserService } from "../../typeDefs/services/UserService";

describe("Use cases: user/session", () => {
  const invalidEmail = "invalid";

  const mockedUserService: UserService = {
    authenticate: async email => {
      if (email === invalidEmail) {
        throw new Error(invalidEmail);
      }

      return { ...userData, email };
    }
  };

  describe("login", () => {
    it("should start with no user", () => {
      const session = new UserSession(mockedUserService);

      expect(session.user).toBeNull();
    });

    describe("success", () => {
      it("should update user state after login [callback]", done => {
        expect.assertions(2);

        const session = new UserSession(mockedUserService);

        session.login(userData.email).then(() => {
          expect(session.user).toBeInstanceOf(User);
          expect(session.user).toMatchObject(userData);
          done();
        });
      });

      it("should update user state after login [return promise.then]", () => {
        expect.assertions(2);

        const session = new UserSession(mockedUserService);

        return session.login(userData.email).then(() => {
          expect(session.user).toBeInstanceOf(User);
          expect(session.user).toMatchObject(userData);
        });
      });

      it("should update user state after login [return expect.resolves]", () => {
        expect.assertions(3);

        const session = new UserSession(mockedUserService);

        return expect(session.login(userData.email))
          .resolves.not.toThrow()
          .then(() => {
            expect(session.user).toBeInstanceOf(User);
            expect(session.user).toMatchObject(userData);
          });
      });

      it("should update user state after login [async/await]", async () => {
        expect.assertions(2);

        const session = new UserSession(mockedUserService);

        await session.login(userData.email);

        expect(session.user).toBeInstanceOf(User);
        expect(session.user).toMatchObject(userData);
      });
    });

    describe("failure", () => {
      it("should not update user state if invalid login [return promise.catch]", () => {
        expect.assertions(1);

        const session = new UserSession(mockedUserService);

        return session.login(invalidEmail).catch(() => {
          expect(session.user).toBeNull();
        });
      });

      it("should not update user state if invalid login [return expect.rejects]", () => {
        expect.assertions(2);

        const session = new UserSession(mockedUserService);

        return expect(session.login(invalidEmail))
          .rejects.toThrow()
          .then(() => expect(session.user).toBeNull());
      });

      it("should not update user state if invalid login [async/await try/catch]", async () => {
        expect.assertions(1);

        const session = new UserSession(mockedUserService);

        try {
          await session.login(invalidEmail);
        } catch (error) {
          expect(session.user).toBeNull();
        }
      });
    });
  });
});

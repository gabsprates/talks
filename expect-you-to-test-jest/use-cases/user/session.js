const User = require("../../entities/User");

class UserSession {
  /** @param {UserService} userService */
  constructor(userService) {
    this._service = userService;
    this._currentUser = null;
  }

  /** @param {string} email */
  async login(email) {
    const userData = await this._service.authenticate(email);
    this._currentUser = new User(userData);
  }

  /** @returns {User} */
  get user() {
    return this._currentUser;
  }
}

module.exports = UserSession;

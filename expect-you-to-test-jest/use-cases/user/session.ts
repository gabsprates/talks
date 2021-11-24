import User from "../../entities/User";
import { UserService } from "../../typeDefs/services/UserService";

class UserSession {
  _service: UserService;
  _currentUser: User | null;

  constructor(userService: UserService) {
    this._service = userService;
    this._currentUser = null;
  }

  async login(email: string) {
    const userData = await this._service.authenticate(email);
    this._currentUser = new User(userData);
  }

  get user() {
    return this._currentUser;
  }
}

export default UserSession;

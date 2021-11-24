import { UserData } from "../data/User";

export interface UserService {
  authenticate: Authenticate;
}

type Authenticate = (email: string) => Promise<UserData>;

import {HttpAPI} from './http_api';
import {User} from '@models/user';

export interface UserAPI {
  getUsers: () => Array<User>;
  login: (email: string, password: number) => User;
}

export class UserHTTP implements UserAPI {
  public http: HttpAPI;
  public users: Array<User> = [];
  public constructor(http: HttpAPI) {
    this.http = http;
  }

  public getUsers = () => {
    this.users = this.http.get('users');
  };

  public login = (email: string, password: number) => this.users.find((elem) => elem.email === email && elem.password === password);
}

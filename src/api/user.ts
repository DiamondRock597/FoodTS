import {HttpAPI} from './http_api';
import {User} from '@models/user';

export interface UserAPI {
  getUsers: () => void;
  login: (email: string, password: string) => User | undefined;
}

export class UserHTTP implements UserAPI {
  public http: HttpAPI;
  public users: Array<User> = [];
  public constructor(http: HttpAPI) {
    this.http = http;
  }

  public getUsers = () => {
    this.users = this.http.get<Array<User>>('users');
  };

  public login = (email: string, password: string) => {
    console.log({email, password});

    console.log({data: this.users.find((elem) => elem.email === email && elem.password === password)});

    return this.users.find((elem) => elem.email === email && elem.password === password);
  };
}

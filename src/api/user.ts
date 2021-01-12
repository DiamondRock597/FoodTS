import {HttpAPI} from './http_api';
import {User as UserModel} from '@models/user';

export interface UserAPI {
  getUsers: () => void;
  login: (email: string, password: string) => UserModel;
}

export class User implements UserAPI {
  public http: HttpAPI;
  public users: Array<UserModel> = [];
  public constructor(http: HttpAPI) {
    this.http = http;
  }

  public getUsers = async () => {
    const {data} = await this.http.get<Array<UserModel>>('users');
    this.users = data;
  };

  public login = (email: string, password: string) => {
    const user = this.users.find((elem) => elem.email === email && elem.password === password);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  };
}

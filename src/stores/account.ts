import {action, computed, observable} from 'mobx';
import {persist} from 'mobx-persist';

import {User} from '@models/user';
import {UserAPI} from '@api/user';

export interface AccountStore {
  emailAddres: string;
  userPassword: string;
  information: string;

  login: () => void;
}

export class Account implements AccountStore {
  @persist @observable public email: string = '';
  @persist @observable public password: string = '';
  @persist @observable public info: string = '';

  private http: UserAPI;

  @computed public get emailAddres() {
    return this.email;
  }

  @computed public get userPassword() {
    return this.password;
  }

  @computed public get information() {
    return this.info;
  }

  public constructor(http: UserAPI) {
    this.http = http;
  }

  @action.bound public login = async () => {
    await this.http.getUsers();
    const {info, email}: User = this.http.login('Dosamarvis@gmail.com', 123456);
    this.info = info;
    this.email = email;
  };
}

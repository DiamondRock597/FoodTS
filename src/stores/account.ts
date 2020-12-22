import {action, computed, observable} from 'mobx';
import {persist} from 'mobx-persist';

import {User} from '@models/user';
import {UserAPI} from '@api/user';

export interface AccountStore {
  emailAddres: string;
  userPassword: string;
  information: string;
  userName: string;
  userPhoneNumber: string;
  profileImage: string;

  login: () => void;
  changeName: (name: string) => void;
  onLoad: () => void;
}

export class Account implements AccountStore {
  @persist @observable public email: string = '';
  @persist @observable public password: string = '';
  @persist @observable public info: string = '';
  @persist @observable public image: string = '';
  @persist @observable public phoneNumber: string = '';
  @persist @observable public name: string = '';

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

  @computed public get profileImage() {
    return this.image;
  }

  @computed public get userName() {
    return this.name;
  }

  @computed public get userPhoneNumber() {
    return this.phoneNumber;
  }
  public constructor(http: UserAPI) {
    this.http = http;
  }

  @action.bound public login = async () => {
    await this.http.getUsers();
    const {info, email, phoneNumber, image, name}: User = this.http.login('Dosamarvis@gmail.com', 123456);
    this.name = name;
    this.info = info;
    this.email = email;
    this.image = image;
    this.phoneNumber = phoneNumber;
  };

  @action.bound public changeName = (name: string) => {
    this.name = name;
  };
}

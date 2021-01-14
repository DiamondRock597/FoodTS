import {action, computed, makeObservable, observable, runInAction} from 'mobx';
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
  isLogin: boolean;
  errorMessage: string;

  changeName: (name: string) => void;
  changeInfo: (info: string) => void;
  signIn: (emailAddres: string, password: string) => void;
}

export class Account implements AccountStore {
  @persist @observable public email: string = '';
  @persist @observable public password: string = '';
  @persist @observable public info: string = '';
  @persist @observable public image: string = '';
  @persist @observable public phoneNumber: string = '';
  @persist @observable public name: string = '';
  @persist @observable public isLogin: boolean = false;
  @observable public error: string = '';

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

  @computed public get errorMessage() {
    return this.error;
  }

  public constructor(http: UserAPI) {
    makeObservable<AccountStore>(this);
    this.http = http;
  }

  @action.bound public signIn = async (emailAddres: string, password: string) => {
    try {
      await this.http.getUsers();
      const {email, phoneNumber, image, name}: User = await this.http.login(emailAddres, password);
      this.name = name;
      this.email = email;
      this.image = image;
      this.phoneNumber = phoneNumber;
      this.password = password;
      this.isLogin = true;
    } catch (error) {
      this.error = error.message;
      this.isLogin = false;
    }
  };

  @action.bound public changeName = (name: string) => {
    this.name = name;
  };

  @action.bound public changeInfo = (info: string) => {
    this.info = info;
  };
}

import {observable} from 'mobx';
import {persist} from 'mobx-persist';

export interface AccountStore {
  email: string;
}

export class Account implements AccountStore {
  @persist @observable public email: string = '';
}

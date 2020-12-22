import {Dish} from '@models/dish';
import {User} from 'models/user';
import FoodsJSON from './dishes.json';
import UsersJSON from './users.json';

const data: {[key: string]: Array<Dish> | Array<User>} = {
  foods: FoodsJSON,
  users: UsersJSON,
};

type data = Array<Dish> | Array<User>;

export interface Params {
  [key: string]: number | string | boolean;
}

export interface HttpAPI {
  get: (path: string) => data;
}

export interface RequestConfig {
  auth?: {login: string; password: string};
  params?: Params;
}

export class Http implements HttpAPI {
  private params: Params;

  public get = (path: string) => data[path];
}

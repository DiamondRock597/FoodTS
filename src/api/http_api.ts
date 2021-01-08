import {Dish} from '@models/dish';
import {User} from '@models/user';
import FoodsJSON from './dishes.json';
import UsersJSON from './users.json';

const data: {[key: string]: Array<Dish> | Array<User>} = {
  foods: FoodsJSON,
  users: UsersJSON,
};

export interface Params {
  [key: string]: number | string | boolean;
}

interface Result<T = Array<User> | Array<Dish>> {
  data: T;
  error: string | undefined;
}

export interface HttpAPI {
  get: <T = Array<Dish> | Array<User>>(path: string) => Promise<Result<T>>;
}

export interface RequestConfig {
  auth?: {login: string; password: string};
  params?: Params;
}

export class Http implements HttpAPI {
  private params: Params;

  public get = <T = Array<Dish> | Array<User>>(path: string) =>
    new Promise<Result<T>>((res, rej) => {
      res({
        data: data[path],
        error: !data[path] ? 'Data is undefined' : undefined,
      });
      rej();
    });
}

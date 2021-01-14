import {DishCard as DishModel} from '@models/dish_card';
import {User} from '@models/user';
import FoodsJSON from './dishes.json';
import UsersJSON from './users.json';

const data: {[key: string]: Array<DishModel> | Array<User>} = {
  foods: FoodsJSON,
  users: UsersJSON,
};

export interface Params {
  [key: string]: number | string | boolean;
}

interface Result<T = Array<User> | Array<DishModel>> {
  data: T;
  error: string | undefined;
}

export interface HttpAPI {
  get: <T = Array<DishModel> | Array<User>>(path: string) => Promise<Result<T>>;
}

export interface RequestConfig {
  auth?: {login: string; password: string};
  params?: Params;
}

export class Http implements HttpAPI {
  private params: Params;

  public get = <T = Array<DishModel> | Array<User>>(path: string) =>
    new Promise<Result<T>>((res, rej) => {
      res({
        data: data[path],
        error: !data[path] ? 'Data is undefined' : undefined,
      });
      rej();
    });
}

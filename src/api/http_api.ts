import FoodsJSON from './dishes.json';
import {Dish} from '@models/dish';

const data: {[key: string]: Array<Dish>} = {
  foods: FoodsJSON,
};

export interface HttpAPI {
  get: (path: string) => Array<Dish>;
}

export interface Params {
  [key: string]: number | undefined | string | boolean;
}

export class Http implements HttpAPI {
  private params: Params;

  public get(path: string) {
    return data[path];
  }
}

import {HttpAPI} from './http_api';
import {Dish} from '@models/dish';

export interface FoodsAPI {
  getDishes: () => Promise<Array<Dish>>;
}

export class FoodsHTTP implements FoodsAPI {
  private http: HttpAPI;

  public constructor(http: HttpAPI) {
    this.http = http;
  }

  public getDishes = async () => {
    const {data, error} = await this.http.get<Array<Dish>>('foods');
    if (error) {
      throw new Error('');
    }

    return data.map((item) => Dish.Parse(item));
  };
}

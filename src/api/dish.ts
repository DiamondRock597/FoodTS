import {HttpAPI} from './http_api';
import {Dish} from '@models/dish';

export interface FoodsAPI {
  getDishes: () => Array<Dish>;
}

export class DishAPI implements FoodsAPI {
  private http: HttpAPI;

  public constructor(http: HttpAPI) {
    this.http = http;
  }

  public getDishes = () => this.http.get('foods');
}

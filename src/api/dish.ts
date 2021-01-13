import {HttpAPI} from './http_api';
import {Dish} from '@models/dish';
import {DishCard as DishModel} from '@models/dish_card';

export interface FoodsAPI {
  getDishes: () => Promise<{dishesInBasket: Array<Dish>; dishes: Array<DishModel>}>;
}

export class FoodsHTTP implements FoodsAPI {
  private http: HttpAPI;

  public constructor(http: HttpAPI) {
    this.http = http;
  }

  public getDishes = async () => {
    const {data, error} = await this.http.get<Array<DishModel>>('foods');
    if (error) {
      throw new Error(error);
    }

    return {
      dishesInBasket: data.map((item) => Dish.Parse(item)),
      dishes: data,
    };
  };
}

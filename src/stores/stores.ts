import {FoodsStore, Foods} from './foods';
import {FoodsAPI, DishAPI} from '@api/dish';
import {Http} from '@api/http_api';

export enum Stores {
  DishStore = 'dish',
}

export interface MainStore {
  [Stores.DishStore]: FoodsStore;
}

class RootStore implements MainStore {
  public [Stores.DishStore]: FoodsStore;

  public constructor(DishAPI: FoodsAPI) {
    this[Stores.DishStore] = new Foods(DishAPI);
  }
}

export const createRootStore = () => {
  const http = new Http();
  const Dish = new DishAPI(http);
  const rootStore = new RootStore(Dish);
  return rootStore;
};

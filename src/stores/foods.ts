import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {Dish as DishModel} from '@models/dish';
import {FoodsAPI} from '@api/dish';

export interface FoodsStore {
  dishesList: Array<DishModel>;
  dishesListInBasket: Array<DishModel>;

  fetchDishes: () => void;
  addInBasket: (item: DishModel) => void;
}

export class Foods implements FoodsStore {
  @observable public dishes: Array<DishModel> = [];
  @observable public dishesInBasket: Array<DishModel> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;

  public DishAPI: FoodsAPI;

  public constructor(DishAPI: FoodsAPI) {
    makeObservable(this);
    this.DishAPI = DishAPI;
  }

  @computed public get dishesList() {
    return toJS(this.dishes);
  }

  @computed public get dishesListInBasket() {
    return toJS(this.dishesInBasket);
  }

  @action.bound public fetchDishes = () => {
    try {
      this.isLoading = true;
      const newArr = [...this.dishes, ...this.DishAPI.getDishes()];
      this.dishes = newArr;
    } catch (error) {
      this.error = true;
    } finally {
      this.isLoading = false;
    }
  };

  @action.bound public addInBasket = (item: DishModel) => {
    item.capacity++;
    this.dishesInBasket = [...this.dishesInBasket, item];
  };
}

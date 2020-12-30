import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {Dish as DishModel} from '@models/dish';
import {FoodsAPI} from '@api/dish';

const ZERO = 0;

export interface FoodsStore {
  dishesList: Array<DishModel>;
  dishesListInBasket: Array<DishModel>;
  favouritesDishes: Array<DishModel>;

  fetchDishes: () => void;
  addInBasket: (id: number) => void;
  deleteFromBasket: (id: number) => void;
  addFavourite: (id: number) => void;
}

export class Foods implements FoodsStore {
  @observable public dishes: Array<DishModel> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;

  public FoodsHTTP: FoodsAPI;

  public constructor(FoodsHTTP: FoodsAPI) {
    makeObservable<Foods>(this);
    this.FoodsHTTP = FoodsHTTP;
  }

  @computed public get dishesList() {
    return toJS(this.dishes);
  }

  @computed public get favouritesDishes() {
    return toJS(this.dishes.filter((item) => item.favourite));
  }
  @computed public get dishesListInBasket() {
    const newArr = this.dishes.filter((item) => item.quantity > ZERO);
    return toJS(newArr);
  }

  @action.bound public fetchDishes = () => {
    try {
      this.isLoading = true;
      const newArr = [...this.dishes, ...this.FoodsHTTP.getDishes()];
      this.dishes = newArr;
    } catch (error) {
      this.error = true;
    } finally {
      this.isLoading = false;
    }
  };

  @action.bound public addInBasket = (id: number) => {
    const newArr = this.dishes.map((dish) => {
      if (id === dish.id) {
        dish.quantity++;
        return dish;
      }
      return dish;
    });

    this.dishes = newArr;
  };

  @action.bound public deleteFromBasket = (id: number) => {
    this.dishes = this.dishes.map((dish) => {
      if (id === dish.id) {
        dish.quantity--;
      }

      return dish;
    });
  };

  @action.bound public addFavourite = (id: number) => {
    this.dishes = this.dishes.map((item) => {
      if (item.id === id) {
        item.favourite = !item.favourite;
      }
      return item;
    });
  };
}

import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {Dish as DishModel} from '@models/dish';
import {FoodsAPI} from '@api/dish';

export interface FoodsStore {
  dishesList: Array<DishModel>;
  dishesListInBasket: Array<DishModel>;

  fetchDishes: () => void;
  addInBasket: (item: DishModel) => void;
  deleteFromBasket: (item: DishModel) => void;
  addDish: (id: number) => void;
  deleteDish: (id: number) => void;
}

export class Foods implements FoodsStore {
  @observable public dishes: Array<DishModel> = [];

  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;

  public DishAPI: FoodsAPI;

  public constructor(DishAPI: FoodsAPI) {
    makeObservable<Foods>(this);
    this.DishAPI = DishAPI;
  }

  @computed public get dishesList() {
    return toJS(this.dishes);
  }

  @computed public get dishesListInBasket() {
    const newArr = this.dishes.filter((item) => item.capacity > 0);
    return toJS(newArr);
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
    const newArr = this.dishes.map((dish) => {
      if (item.id === dish.id) {
        dish.capacity++;
        return dish;
      }
      return dish;
    });

    this.dishes = newArr;
  };

  @action.bound public deleteFromBasket = (item: DishModel) => {
    const newArr = this.dishes.map((dish) => {
      if (item.id === dish.id) {
        dish.capacity--;
      }

      return dish;
    });
    this.dishes = newArr;
  };

  @action.bound public addDish = (id: number) => {
    const newArr = this.dishes.map((dish) => {
      if (id === dish.id) {
        dish.capacity++;
      }
      return dish;
    });
    this.dishes = newArr;
  };

  @action.bound public deleteDish = (id: number) => {
    const newArr = this.dishes.map((dish) => {
      if (id === dish.id) {
        dish.capacity--;
      }
      return dish;
    });
    this.dishes = newArr;
  };
}

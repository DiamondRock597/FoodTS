import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {Dish as DishModel, Type as TypeModel, TypesDish} from '@models/dish';
import {FoodsAPI} from '@api/dish';

const ZERO = 0;
const types = [
  {id: 1, type: TypesDish.Foods},
  {id: 2, type: TypesDish.Drinks},
  {id: 3, type: TypesDish.Snacks},
];

export interface FoodsStore {
  dishesList: Array<DishModel>;
  dishesListInBasket: Array<DishModel>;
  currentType: TypesDish;
  types: Array<TypeModel>;

  fetchDishes: () => void;
  addInBasket: (id: number) => void;
  deleteFromBasket: (id: number) => void;
  changeType: (type: TypesDish) => void;
}

export class Foods implements FoodsStore {
  @observable public dishes: Array<DishModel> = [];
  @observable public currentType: TypesDish = TypesDish.Foods;
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;

  public DishAPI: FoodsAPI;
  public types: Array<TypeModel> = types;

  public constructor(DishAPI: FoodsAPI) {
    makeObservable<Foods>(this);
    this.DishAPI = DishAPI;
  }

  @computed public get dishesList() {
    return toJS(this.dishes);
  }

  @computed public get dishesListInBasket() {
    const newArr = this.dishes.filter((item) => item.capacity > ZERO);
    return toJS(newArr);
  }

  @action.bound public changeType = (currentType: TypesDish) => {
    this.currentType = currentType;
  };

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

  @action.bound public addInBasket = (id: number) => {
    const newArr = this.dishes.map((dish) => {
      if (id === dish.id) {
        dish.capacity++;
        return dish;
      }
      return dish;
    });

    this.dishes = newArr;
  };

  @action.bound public deleteFromBasket = (id: number) => {
    const newArr = this.dishes.map((dish) => {
      if (id === dish.id) {
        dish.capacity--;
      }

      return dish;
    });
    this.dishes = newArr;
  };
}

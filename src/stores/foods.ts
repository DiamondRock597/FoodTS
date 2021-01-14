import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {DishModel} from '@models/dish';
import {DishCard as DishCardModel} from '@models/dish_card';
import {FoodsAPI} from '@api/dish';

const ZERO = 0;

export interface FoodsStore {
  dishesList: Array<DishCardModel>;
  dishesListInBasket: Array<DishModel>;
  favouritesDishes: Array<DishCardModel>;
  errorMessage: string;

  fetchDishes: () => void;
  addInBasket: (id: number) => void;
  deleteFromBasket: (id: number) => void;
  addFavourite: (id: number) => void;
}

export class Foods implements FoodsStore {
  @observable public dishes: Array<DishCardModel> = [];
  @observable public dishesInBasket: Array<DishModel> = [];
  @observable public error: string = '';
  @observable public isLoading: boolean = false;

  public FoodsHTTP: FoodsAPI;

  public constructor(FoodsHTTP: FoodsAPI) {
    makeObservable<Foods>(this);
    this.FoodsHTTP = FoodsHTTP;
  }

  @computed public get dishesList() {
    return this.dishes.slice();
  }

  @computed public get errorMessage() {
    return this.error;
  }

  @computed public get favouritesDishes() {
    return toJS(this.dishes.filter((item) => item.favourite));
  }
  @computed public get dishesListInBasket() {
    const newArr = this.dishesInBasket.filter((item) => item.quantity > ZERO);
    return toJS(newArr);
  }

  //REFACTORING:isolate block try/catch
  @action.bound public fetchDishes = async () => {
    try {
      this.isLoading = true;
      const {dishesInBasket, dishes} = await this.FoodsHTTP.getDishes();

      this.dishes = [...this.dishes, ...dishes];
      this.dishesInBasket = dishesInBasket;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  };

  @action.bound public addInBasket = (id: number) => {
    this.dishesInBasket = this.dishesInBasket.map((dish) => {
      if (id === dish.id) {
        dish.quantity++;
        return dish;
      }
      return dish;
    });
  };

  @action.bound public deleteFromBasket = (id: number) => {
    this.dishesInBasket = this.dishesInBasket.map((dish) => {
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

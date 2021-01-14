import {DishCard} from './dish_card';

export interface DishModel {
  id: number;
  name: string;
  image: string;
  cost: number;
  type: string;
  favourite?: boolean;
  info?: string;
  policy?: string;
  quantity: number;
}

export class Dish implements DishModel {
  public id: number;
  public name: string;
  public image: string;
  public cost: number;
  public type: string;
  public quantity: number;
  public favourite?: boolean = false;
  public info?: string;
  public policy?: string;

  public constructor(id: number, name: string, image: string, cost: number, type: string, info?: string, policy?: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.cost = cost;
    this.type = type;
    this.quantity = 0;
    this.info = info;
    this.policy = policy;
  }

  public static Parse = (item: DishCard) => new Dish(item.id, item.name, item.image, item.cost, item.type, item.info, item.policy);
}

export interface Type {
  id: number;
  type: TypesDish;
}

export enum TypesDish {
  Foods = 'Foods',
  Drinks = 'Drinks',
  Snacks = 'Snacks',
}

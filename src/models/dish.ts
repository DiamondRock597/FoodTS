export interface DishModel {
  id: number;
  name: string;
  image: string;
  cost: number;
  type: string;
  capacity: number;
  favourite?: boolean;
  info?: string;
  policy?: string;
}

export class Dish implements DishModel {
  public id: number;
  public name: string;
  public image: string;
  public cost: number;
  public type: string;
  public capacity: number;
  public favourite: boolean = false;
  public info?: string;
  public policy?: string;

  public constructor(id: number, name: string, image: string, cost: number, type: string, capacity: number, info?: string, policy?: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.cost = cost;
    this.type = type;
    this.capacity = capacity;
    this.info = info;
    this.policy = policy;
  }

  public static Parse = (item: DishModel) => new Dish(item.id, item.name, item.image, item.cost, item.type, item.capacity, item.info, item.policy);
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

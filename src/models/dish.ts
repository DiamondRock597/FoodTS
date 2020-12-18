export interface Dish {
  id: number;
  name: string;
  image: string;
  cost: number;
  type: string;
  capacity?: number;
  info?: string;
  policy?: string;
}

export enum TypesDish {
  Foods = 'Foods',
  Drinks = 'Drinks',
  Snacks = 'Snacks',
}

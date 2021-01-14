export interface DishCard {
  id: number;
  name: string;
  image: string;
  cost: number;
  type: string;
  favourite?: boolean;
  info?: string;
  policy?: string;
}

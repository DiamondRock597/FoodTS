import {ImageProps} from 'react-native';

export interface Dish {
  id: number;
  name: string;
  image: ImageProps;
  cost: number;
  info?: string;
  policy?: string;
}

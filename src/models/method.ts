import {ImageProps} from 'react-native';

export enum Methods {
  Card = 'Card',
  Bank = 'Bank account',
  Paypal = 'Paypal',
}

export interface Method {
  id: number;
  name: Methods;
  background: string;
  image: ImageProps;
}

import {Methods} from './method';

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
  info: string;
  password: number;
  paymontMethods?: Methods;
}

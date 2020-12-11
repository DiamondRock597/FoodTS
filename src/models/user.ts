import {ImageProps} from 'react-native';

export interface User {
  name: string;
  email: string;
  phoneNumber: string;
  image: ImageProps;
  text: string;
}

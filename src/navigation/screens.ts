import {Dish} from '../features/home/Home';

export enum RootScreens {
  OnBoarding = 'OnBoarding',
  Register = 'Register ',
  Home = 'Home',
  Dish = 'Dish',
}

export enum TabScreens {
  Home = 'Home',
  Profile = 'Profile',
  History = 'History',
}

export type RootStackParamList = {
  [RootScreens.OnBoarding]: undefined;
  [RootScreens.Register]: undefined;
  [RootScreens.Home]: undefined;
  [RootScreens.Dish]: {dish: Dish};
};

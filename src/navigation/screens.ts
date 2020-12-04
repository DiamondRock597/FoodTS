import {Dish as DishModel} from '../models/dish';

export enum RootScreens {
  OnBoarding = 'OnBoarding',
  Register = 'Register ',
  Home = 'Home',
  Dish = 'Dish',
  Search = 'Search',
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
  [RootScreens.Dish]: {dish: DishModel};
  [RootScreens.Search]: {dishes: Array<DishModel>};
};

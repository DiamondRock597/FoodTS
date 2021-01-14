import {DishCard} from '@models/dish_card';

export enum RootScreens {
  OnBoarding = 'OnBoarding',
  Register = 'Register ',
  Home = 'Home',
  Dish = 'Dish',
  Search = 'Search',
  Profile = 'Profile',
  Orders = 'Orders',
  Favourites = 'Favourites',
}

export enum TabScreens {
  Home = 'Home',
  Profile = 'Profile',
  History = 'History',
  Favourites = 'Favourites',
}

export type RootStackParamList = {
  [RootScreens.OnBoarding]: undefined;
  [RootScreens.Register]: undefined;
  [RootScreens.Home]: undefined;
  [RootScreens.Dish]: {dish: DishCard};
  [RootScreens.Search]: undefined;
  [RootScreens.Profile]: undefined;
  [RootScreens.Orders]: undefined;
};

export enum RootScreens {
  OnBoarding = 'OnBoarding',
  Register = 'Register ',
  Home = 'Home',
}

export enum TabScreens {
  Home = 'Home',
  Profile = 'Profile',
  Orders = 'Orders',
}

export type RootStackParamList = {
  [RootScreens.OnBoarding]: undefined;
  [RootScreens.Register]: undefined;
  [RootScreens.Home]: undefined;
};

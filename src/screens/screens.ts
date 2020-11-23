export enum RootScreens {
  OnBoarding = 'OnBoarding',
  Register = 'Register ',
}

export type RootStackParamList = {
  [RootScreens.OnBoarding]: undefined;
  [RootScreens.Register]: undefined;
};

import {FoodsStore, Foods} from './foods';
import {FoodsAPI, FoodsHTTP} from '@api/dish';
import {Http} from '@api/http_api';
import {Account, AccountStore} from './account';
import {UserAPI, UserHTTP} from 'api/user';
import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

export enum Stores {
  DishStore = 'dish',
  AccountStore = 'account',
}

export enum StoresMethods {
  LoadStores = 'loadStores',
  CleanStores = 'cleanStores',
}

type PersistStores = Stores.AccountStore;

export interface MainStore {
  [Stores.DishStore]: FoodsStore;
  [Stores.AccountStore]: AccountStore;

  [StoresMethods.LoadStores]: () => Promise<void>;
}

class RootStore implements MainStore {
  public static readonly persistedStores: Array<PersistStores> = [Stores.AccountStore];
  public [Stores.DishStore]: FoodsStore;
  public [Stores.AccountStore]: AccountStore;

  public constructor(FoodsHTTP: FoodsAPI, UserHTTP: UserAPI) {
    this[Stores.DishStore] = new Foods(FoodsHTTP);
    this[Stores.AccountStore] = new Account(UserHTTP);
  }

  public [StoresMethods.LoadStores] = async () => {
    await Promise.all(RootStore.persistedStores.map(this.loadStore));
  };

  private loadStore = async (storeName: PersistStores) => {
    const hydrate = create({storage: AsyncStorage});
    await hydrate(storeName, this[storeName]);
  };
}

export const createRootStore = () => {
  const http = new Http();
  const Dish = new FoodsHTTP(http);
  const User = new UserHTTP(http);
  const rootStore = new RootStore(Dish, User);
  return rootStore;
};

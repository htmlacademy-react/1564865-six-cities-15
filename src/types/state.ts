import { store } from '../store/index';

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAuthData = {
  email: string;
  password: string;
};

export type TUserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

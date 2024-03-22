import { store } from '../store/index';

import { CityName } from '../const';
import { TOffer } from './offer';

export type TState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TAppState = {
  selectCity: CityName;
  offers: TOffer[];
}

import { createAction } from '@reduxjs/toolkit';

import { CityName } from '../const';
import { TOffer } from '../types/offer';

export const selectCity = createAction<CityName>('selectCity');
export const updateOffers = createAction<TOffer[]>('updateOffers');

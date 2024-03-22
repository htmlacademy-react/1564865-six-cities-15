import { createReducer } from '@reduxjs/toolkit';

import { selectCity, updateOffers } from './action';
import { TAppState } from '../types/state';

import { CityName } from '../const';

const initialState: TAppState = {
  selectCity: CityName.Paris,
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectCity = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload;
    });
});

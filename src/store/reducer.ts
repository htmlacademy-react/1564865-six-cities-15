import { createReducer } from '@reduxjs/toolkit';

import { CityMapDefault } from '../const';

import { TReview } from '../types/review';
import { TCity } from '../types/city';
import { TOffer, TOffers } from '../types/offer';
import { TOfferPreview, TOfferPreviews } from '../types/offer-preview';
import { TSortItem } from '../types/sort';
import { CustomError } from '../types/error';

import {
  getOffers,
  gethReviews,
  setActiveCity,
  dropOffer,
  getFavoriteOffers,
  getNearPlaces,
  getOffer,
  setOffersDataLoadingStatus,
  setActiveSortItem,
  setError
}
  from './action';

const initialState: {
  offers: TOffers;
  nearPlaces: TOfferPreviews;
  reviews: TReview[];
  offer: TOffer | null;
  favorites: TOfferPreview[];
  activeCity: TCity;
  loaded: boolean;
  isOffersDataLoading: boolean;
  activeSortItem: TSortItem;
  error: CustomError | null;
  } = {
    offers: [],
    nearPlaces: [],
    reviews: [],
    offer: null,
    favorites: [],
    loaded: false,
    activeCity: CityMapDefault,
    activeSortItem: 'Popular',
    isOffersDataLoading: false,
    error: null
  };

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
      state.loaded = true;
    })
    .addCase(getNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(gethReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
      state.loaded = false;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getFavoriteOffers, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setActiveSortItem, (state, action) => {
      state.activeSortItem = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

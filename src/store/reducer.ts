import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus, CityMapDefault } from '../const';

import { TReview } from '../types/review';
import { TCity } from '../types/city';
import { TOffer, TOffers } from '../types/offer';
import { TOfferPreview } from '../types/offer-preview';
import { TSortItem } from '../types/sort';

import {
  fetchOffers,
  fetchReviews,
  setActiveCity,
  dropOffer,
  fetchFavoriteOffers,
  fetchNearPlaces,
  fetchOffer,
  setOffersDataLoadingStatus,
  requireAuthorization,
  setActiveSortItem,
  setError
}
  from './action';

const initialState: {
  offers: TOffers;
  nearPlaces: TOfferPreview[];
  reviews: TReview[];
  offer: TOffer | null;
  favorites: TOfferPreview[];
  activeCity: TCity;
  loaded: boolean;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  activeSortItem: TSortItem;
  error: Error;
  } = {
    offers: [],
    nearPlaces: [],
    reviews: [],
    offer: null,
    favorites: [],
    loaded: false,
    activeCity: CityMapDefault,
    activeSortItem: 'Popular',
    authorizationStatus: AuthorizationStatus.Unknown,
    isOffersDataLoading: false,
    error: null
  };

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
      state.loaded = true;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviews, (state, action) => {
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
    .addCase(fetchFavoriteOffers, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setActiveSortItem, (state, action) => {
      state.activeSortItem = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

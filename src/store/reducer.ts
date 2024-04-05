import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus, CityMapDefault } from '../const';

import { TReviewType } from '../types/review';
import { TCity } from '../types/city';
import { TOffer } from '../types/offer';

import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

import {
  fetchOffers,
  fetchReviews,
  setActiveCity,
  dropOffer,
  fetchFavoriteOffers,
  fetchNearPlaces,
  fetchOffer,
  setOffersDataLoadingStatus,
  requireAuthorization
}
  from './action';
import { TOfferPreview } from '../types/offer-preview';

const initialState: {
    offers: TOffer[];
    nearPlaces: TOfferPreview[];
    reviews: TReviewType[];
    offer: TOffer | null;
    favorites: TOffer[];
    activeCity: TCity;
    loaded: boolean;
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
  } = {
    offers: [],
    nearPlaces: [],
    reviews: [],
    offer: null,
    favorites: [],
    loaded: false,
    activeCity: CityMapDefault,
    authorizationStatus: AuthorizationStatus.Unknown,
    isOffersDataLoading: false
  };

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
      state.loaded = true;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
      state.loaded = false;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavoriteOffers, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

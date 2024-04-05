import { createReducer } from '@reduxjs/toolkit';

import { CityMapDefault } from '../const';

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
  fetchOffer
}
  from './action';

const initialState: {
    offers: TOffer[];
    nearPlaces: TOffer[];
    reviews: TReviewType[];
    offer: TOffer | null;
    favorites: TOffer[];
    activeCity: TCity;
    loaded: boolean;
  } = {
    offers: offers,
    nearPlaces: [],
    reviews: [],
    offer: null,
    favorites: [],
    loaded: false,
    activeCity: CityMapDefault,
  };

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
      state.loaded = true;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = offers.filter((offer) => offer.id !== action.payload);
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
    });
});
